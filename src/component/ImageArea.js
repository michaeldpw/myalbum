import React from 'react';

class ImageArea extends React.Component{
    render(){
        return (
            <React.Fragment>
                {
                    this.props.images.map((item, index) => {
                        return (
                            <div className="col-xs-6 col-md-3" key={index}>
                                <a href="" className="thumbnail">
                                    <img src={`http://127.0.0.1:5000/${this.props.albumName}/${item}`} alt="..." />    
                                </a> 
                                <h4>{item}</h4>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default ImageArea;