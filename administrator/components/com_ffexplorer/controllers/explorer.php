<?php

use Joomla\Archive\Zip;
use Joomla\CMS\Filesystem\File;
use Joomla\CMS\Filesystem\Folder;
use Joomla\CMS\Filesystem\Path;
use Joomla\CMS\Helper\MediaHelper;
use Joomla\CMS\MVC\Controller\BaseController;
use Joomla\CMS\String\PunycodeHelper;

defined('_JEXEC') or die('Restricted access');

class FfexplorerControllerExplorer extends BaseController
{
    public function download()
    {
        $this->checkToken();
        $relativePath = $this->input->getString('path');
        $path = realpath(JPATH_ROOT . $relativePath);

        if (!$relativePath || !file_exists($path) || !is_file($path)) {
            $this->response('error', 'File not existed');
        }

        ob_clean();
        $finfo = finfo_open(FILEINFO_MIME_TYPE);

        header('Content-Type: ' . finfo_file($finfo, $path));
  
        $finfo = finfo_open(FILEINFO_MIME_ENCODING);
        header('Content-Transfer-Encoding: ' . finfo_file($finfo, $path)); 
       
        header('Content-disposition: attachment; filename="' . basename($path) . '"'); 
       
        readfile($path);
        die();
    }

    public function compress()
    {
        $this->checkToken();
        $relativePath = $this->input->getString('path');
        $path = realpath(JPATH_ROOT . $relativePath);

        if (!$relativePath || !file_exists($path)) {
            $this->response('error', 'Path not existed');
        }

        $info = pathinfo($path);
        $items = array();

        if (is_dir($path)) {
            $exclude = array('.svn', 'CVS', '.DS_Store', '__MACOSX');
            $excludefilter = array('.*~');
            $files = Folder::files($path, '.', true, true, $exclude, $excludefilter);
            
            foreach ($files as &$file) {
                $content = array();
                $content['data'] = file_get_contents($file);

                $name = realpath($file);
                $name = $info['filename'] . str_replace($path, '', $name);
                $content['name'] = $name;
                $items[] = $content;
            }

        } else {
            $items[] = array(
                'data' => file_get_contents($path),
                'name' => $info['basename']
            );
        }

        $target = $info['dirname'] . '/' . $info['filename'] . '.zip';
        if (File::exists($target)) {
            for ($i=1; $i < 100; $i++) { 
                $target = $info['dirname'] . '/' . $info['filename'] . '(' . $i . ')' . '.zip';
                if (!File::exists($target)) {
                    break;
                }
            }
        }

        $archive = new Zip();
        $result = $archive->create($target, $items);
        
        if ($result) {
            $this->response('success', '');
        } else {
            $this->response('error', 'Compress error!!');
        }
    }

    public function getPermission()
    {
        $this->checkToken();
        $relativePath = $this->input->getString('path');
        $path = realpath(JPATH_ROOT . $relativePath);

        if (!$relativePath || !file_exists($path)) {
            $this->response('error', 'Path not existed');
        }

        if (!Path::check($path)) {
            $this->response('error', 'Path error');
        }

        $permission = Path::getPermissions($path);
        $this->response('permission', $permission);
    }

    public function setPermission()
    {
        $this->checkToken();
        $relativePath = $this->input->getString('path');
        $path = realpath(JPATH_ROOT . $relativePath);

        if (!$relativePath || !file_exists($path)) {
            $this->response('error', 'Path not existed');
        }

        $mode = $this->input->get('mode');
        if (!$mode) {
            $this->response('error', 'Mode is missing!');
        }

        if (is_dir($path)) {
            $result = Path::setPermissions($path, null, $mode);
        } else {
            $result = Path::setPermissions($path, $mode, null);
        }

        if ($result) {
            $this->response('success', '');
        } else {
            $this->response('error', 'Set permission failed');
        }
    }

    public function upload()
    {
        $this->checkToken();
        $path = $this->input->getString('path');

        if (!$path || !is_dir(JPATH_ROOT . $path)) {
            $this->response('error', 'empty path');
        }

        $file = $this->input->files->get('file', array(), 'array');
        $contentLength = (int) $file['size'];
        $mediaHelper = new MediaHelper;
        $postMaxSize = $mediaHelper->toBytes(ini_get('post_max_size'));
        $memoryLimit = $mediaHelper->toBytes(ini_get('memory_limit'));
        $uploadMaxFileSize = $mediaHelper->toBytes(ini_get('upload_max_filesize'));
        
        if (($file['error'] == 1)
            || ($postMaxSize > 0 && $contentLength > $postMaxSize)
            || ($memoryLimit != -1 && $contentLength > $memoryLimit)
            || ($uploadMaxFileSize > 0 && $contentLength > $uploadMaxFileSize))
        {
            $this->response('error', 'File too large');
        }

        // Make the filename safe
        $file['name'] = File::makeSafe($file['name']);

        // We need a url safe name
        $fileparts = pathinfo(JPATH_ROOT . $path . '/' . $file['name']);

        // Transform filename to punycode, check extension and transform it to lowercase
        $fileparts['filename'] = PunycodeHelper::toPunycode($fileparts['filename']);
        $tempExt = !empty($fileparts['extension']) ? strtolower($fileparts['extension']) : '';

        // Neglect other than non-alphanumeric characters, hyphens & underscores.
        $safeFileName = preg_replace(array("/[\\s]/", '/[^a-zA-Z0-9_\-]/'), array('_', ''), $fileparts['filename']) . '.' . $tempExt;

        $file['name'] = $safeFileName;

        $file['filepath'] = Path::clean(JPATH_ROOT . $path . '/' . $file['name']);

        if (File::exists($file['filepath']))
        {
            $this->response('error', 'File ' . $file['name'] . ' existed');
        }

        if (!isset($file['name']))
        {
            $this->response('error', 'File error');
        }

        if (File::upload($file['tmp_name'], $file['filepath'])) {
            $this->response('success', '');
        } else {
            $this->response('error', 'Upload error');
        }
    }

    public function saveContent()
    {
        $this->checkToken();
        $path = $this->input->getString('path');
        $content = $this->input->get('content', '', 'raw');

        if (!$path) {
            $this->response('error', 'empty path');
        }

        $file = JPATH_ROOT . $path;
        if (!File::exists($file)) {
            $this->response('error', 'file not existed');
        }

        if (@File::write($file, $content)) {
            $this->response('success', 'saved');
        } else {
            $this->response('error', 'could not write file');
        }
    }

    public function openFile()
    {
        $this->checkToken();

        $path = $this->input->getString('path');
        if (!$path) {
            $this->response('error', 'empty path');
        }

        $file = JPATH_ROOT . $path;
        if (!File::exists($file)) {
            $this->response('error', 'file not existed');
        }

        $content = file_get_contents($file);
        $this->response('content', $content);
    }

    public function explodeFolder()
    {
        $this->checkToken();

        $path = $this->input->getString('path');

        $path = $path ? JPATH_ROOT . $path : JPATH_ROOT;
        $folders = Folder::folders($path, '.', false, true);
        $folders = array_map(function($folder) {
            $folder = realpath($folder);
            $info = pathinfo($folder);

            $item = new stdClass;
            $item->path = str_replace(JPATH_ROOT, '', $folder);
            $item->name = $info['basename'];
            $item->type = 'folder';

            return $item;
        }, $folders);

        $exclude = array('.svn', 'CVS', '.DS_Store', '__MACOSX');
        $excludefilter = array('.*~');
        $files = Folder::files($path, '.', false, true, $exclude, $excludefilter);
        $files = array_map(function($file) {
            $file = realpath($file);
            $info = pathinfo($file);

            $item = new stdClass;
            $item->path = str_replace(JPATH_ROOT, '', $file);
            $item->name = $info['basename'];
            $item->type = 'file';

            return $item;
        }, $files);

        $result = array_merge($folders, $files);

        die(json_encode($result));
    }

    public function newFile()
    {
        $this->checkToken();

        $name = $this->input->getString('name');
        $path = $this->input->getString('path');

        $name = File::makeSafe($name);

        if (!$name || !$path) {
            die(json_encode(array('error' => 'empty')));
        }

        $file = JPATH_ROOT . $path . '/' . $name;
        if (File::exists($file)) {
            $this->response('error', 'File is already existed');
        }

        if (File::write($file, '')) {
            $this->response('success', 'File has been created');
        } else {
            $this->response('error', 'Create file failed');
        }
    }

    public function newFolder()
    {
        $this->checkToken();

        $name = $this->input->getString('name');
        $path = $this->input->getString('path');
        
        $name = Folder::makeSafe($name);

        if (!$name || !$path) {
            die(json_encode(array('error' => 'empty')));
        }

        $folder = JPATH_ROOT . $path . '/' . $name;
        if (Folder::exists($folder)) {
            $this->response('error', 'Folder is already existed');
        }

        if (Folder::create($folder)) {
            $this->response('success', 'Folder has been created');
        } else {
            $this->response('error', 'Create folder failed');
        }
    }

    public function renameFolder()
    {
        $this->checkToken();

        $newName = $this->input->getString('newName');
        $oldPath = $this->input->getString('oldPath');

        $newName = Folder::makeSafe($newName);

        if (!$newName || !$oldPath) {
            $this->response('error', 'empty');
        }

        if (!Folder::exists(JPATH_ROOT . $oldPath)) {
            $this->response('error', 'Folder not found');
        }

        $info = pathinfo($oldPath);
        $folder = JPATH_ROOT . $info['dirname'] . '/' . $newName;
        if (Folder::exists($folder)) {
            $this->response('error', 'Folder is already existed');
        }

        $result = rename( JPATH_ROOT . $oldPath, $folder);
        if ($result) {
            $folderPath = realpath($folder);
            $folderPath = str_replace(JPATH_ROOT, '', $folderPath);

            $this->response('data', array(
                'path' => $folderPath,
                'name' => $newName,
            ));
        } else {
            $this->response('error', 'rename error');
        }
    }

    public function deleteFolder()
    {
        $this->checkToken();

        $path = $this->input->getString('path');
        if (!$path) {
            $this->response('error', 'empty path');
        }

        if (Folder::exists(JPATH_ROOT . $path)) {
            if(Folder::delete(JPATH_ROOT . $path)) {
                $this->response('success', 'deleted');
            } else {
                $this->response('error', 'Delete failed');
            }
        } else {
            $this->response('error', 'Folder is not existed');
        }
    }

    public function renameFile()
    {
        $this->checkToken();

        $newName = $this->input->getString('newName');
        $oldPath = $this->input->getString('oldPath');

        $newName = File::makeSafe($newName);

        if (!$newName || !$oldPath) {
            $this->response('error', 'empty');
        }

        if (!File::exists(JPATH_ROOT . $oldPath)) {
            $this->response('error', 'File not found');
        }

        $info = pathinfo($oldPath);
        $file = JPATH_ROOT . $info['dirname'] . '/' . $newName;
        if (File::exists($file)) {
            $this->response('error', 'File is already existed');
        }

        $result = rename( JPATH_ROOT . $oldPath, $file);
        if ($result) {
            $filePath = realpath($file);
            $filePath = str_replace(JPATH_ROOT, '', $filePath);

            $this->response('data', array(
                'path' => $filePath,
                'name' => $newName,
            ));
        } else {
            $this->response('error', 'rename error');
        }
    }

    public function deleteFile()
    {
        $this->checkToken();

        $path = $this->input->getString('path');
        if (!$path) {
            $this->response('error', 'empty path');
        }

        if (File::exists(JPATH_ROOT . $path)) {
            if(File::delete(JPATH_ROOT . $path)) {
                $this->response('success', 'deleted');
            } else {
                $this->response('error', 'Delete failed');
            }
        } else {
            $this->response('error', 'File is not existed');
        }
    }

    public function checkToken($method = 'post', $redirect = false)
    {
        // sleep(3);
        if (!parent::checkToken($method, $redirect)) {
            $this->response('error', 'csrf token error');
        }
    }

    protected function response($type = 'success', $data)
    {
        die(@json_encode(array($type => $data)));
    }
}