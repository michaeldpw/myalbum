import React from 'react';
import { connect } from 'react-redux';
import { getAllAlbums, handleUpload } from '../actions/actionCreators';

class Upload extends React.Component{


    state = {
        isEmpty: true
    }
    componentDidMount(){
        this.props.getAllAlbums();
    }

    render(){
        return (
            <div className="container">
             <form style={{width:'40%'}} method="post" action="http://127.0.0.1:5000/upload" encType="multipart/form-data">
                <div className="form-group">
                    <label>选择文件夹</label>
                    <select className="form-control" name="folder">
                        {
                            this.props.albums.map((item, index) => {
                                return <option key={index}>{item}</option>
                            })
                        }     
                    </select>
                </div>
                
                <div className="form-group">
                    <label>File input</label>
                    <input type="file" name="image" ref="fileinput" required />
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-default"
                >Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.reducer.albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAlbums(){
            dispatch(getAllAlbums());
        },
        handleUpload(){
            dispatch(handleUpload());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);