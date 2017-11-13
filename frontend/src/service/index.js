import axios from 'axios';

const serverHost = 'http://localhost:8080';

const service = {

    getFolders: function(){
        return axios.get(serverHost+'/folders');
    },
    getFoldersByParentId: function(parentId){
        return axios.get(serverHost+'/folder/parent/'+parentId);
    },
    createFolder: function(data){
        return axios.post(serverHost+'/folder', data);
    },
    deleteFolder: function(folderId){
        return axios.delete(serverHost+'/folder/'+folderId);
    },
    getFiles: function(){
        return axios.get(serverHost+'/files');
    },
    uploadFile: function(data){
        return axios.post(serverHost+'/file', data);
    },
    getFilesByParentId: function(parentId){
        return axios.get(serverHost+'/file/parent/'+parentId);
    },
    deleteFile: function(fileId){
        return axios.delete(serverHost+'/file/'+fileId);
    }

}

export default service;