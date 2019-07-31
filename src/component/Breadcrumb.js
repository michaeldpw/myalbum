import React from 'react';

export default class Breadcrumb extends React.Component{
    render(){
        return (
            <ol className="breadcrumb">
                <li><a href="/">全部相册</a></li>
                <li><a href="">{this.props.path}</a></li>
            </ol>
        )
    }
}