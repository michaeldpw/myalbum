import React from 'react';

class Navbar extends React.Component {


    render(){
        return( 
            <div>
                <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/">我的相册</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="/">全部相册 <span className="sr-only">(current)</span></a></li>
                      <li><a href="/upload">上传</a></li>
                    </ul>
                  </div>
                </div>
              </nav>

            </div>
        )
       
    }
}

export default Navbar;