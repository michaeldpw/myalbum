import React from 'react';

class PageNotFound extends React.Component{
    render(){
        return (
            <div className="container" style={{display:"flex", justifycontent:"center", alignItems:"center"}}>
                <img src='../../images/404.jpg' alt="..." style={{width:"200px", height:"200px",margin:"20px auto"}}/>
            </div>
        )
    }
}

export default PageNotFound;