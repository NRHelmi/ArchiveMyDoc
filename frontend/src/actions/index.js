export const SET_FOLDERS = 'SET_FOLDERS';
export const SET_FILES   = 'SET_FILES';

export function setFolders(folders) {
    return {
        type: SET_FOLDERS,
        folders
    }
}

export function setFiles(files) {
    return {
        type: SET_FILES,
        files
    }
}
