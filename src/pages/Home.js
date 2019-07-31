import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';
import { getAllAlbums } from '../actions/actionCreators'
import { connect } from 'react-redux';


class Home extends React.Component{

    componentDidMount(){

        this.props.getAllAlbums();
        //console.log(this.props.albums);
    }

    render(){
        return (
            <div className="container">
                <Breadcrumb path=""/>
                <div className="row">
                {
                    this.props.albums.map((item, index)=>{
                        return (
                            <Link to={`/${item}`} key={index}>
                                <div className="col-xs-6 col-md-3">
                                    <a href="#" className="thumbnail">
                                        <img src="images/folder.jpg" alt="..." />    
                                    </a> 
                                    <h4>{item}</h4>
                                </div>
                            </Link>
                        )
                    })
                }
               </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);