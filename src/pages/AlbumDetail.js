import React from 'react'
import Breadcrumb from '../component/Breadcrumb';
import axios from 'axios';
import { connect } from 'react-redux';
import ImageArea from '../component/ImageArea';
import PageNotFound from '../pages/PageNotFound';
import { getAllAlbums } from '../actions/actionCreators'

class AlbumDetail extends React.Component{

    state = {
        images:[]
    }

    componentDidMount(){
        this.props.getAllAlbums();
        const albumName = this.props.match.params.albumname;
        console.log(albumName);
        axios.get("http://127.0.0.1:5000/" + albumName)
            .then(res => {
                //console.log(res.data);
                this.setState({
                    images: res.data
                })
            })
    }


    render(){
        
        return (
            <div className="container">
                {
                    this.props.albums
                        .indexOf(this.props.match.params.albumname) > -1 ? 
                        <div>
                            <Breadcrumb path={this.props.match.params.albumname}/>
                            <ImageArea images={this.state.images} albumName={this.props.match.params.albumname}/>
                        </div>
                        : 
                        <div>
                        <PageNotFound />
                        {this.props.match.params.albumname}
                        </div>
                }
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDetail);