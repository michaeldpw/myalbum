import axios from 'axios';
import { GET_ALL_ALBUMS, UPLOAD_IMAGE } from './actionTypes'

export const getAllAlbumsAction = (data) => ({
    type: GET_ALL_ALBUMS,
    data
})

export const uploadImageAction = () => ({
    type: UPLOAD_IMAGE
})

export const getAllAlbums = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:5000/allalbums').then(res => {
            const data = res.data;
            const action = getAllAlbumsAction(data);
            dispatch(action);
        })
    }
}
export const handleUpload = () => {
    return (dispatch) => {
        axios.post('http://127.0.0.1:5000/upload').then(res => {
            const action = uploadImageAction();
            dispatch(action);
        })
    }
}