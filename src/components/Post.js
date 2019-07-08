import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';

class Post extends Component {

    render() {      
        const {post} = this.props;        
        return (
            <> 
                <div className="post">
                    <div className="title">{post.title}</div>
                   <div className="description">{post.description}</div>                    
                    <div className="post-footer">
                        <div className="tag-container">
                            {post.tags && post.tags.map((tag, index) => (
                                <div className="tag" key={index}>
                                    {tag}
                                </div>
                            ))}
                        </div> 
                        <Link to={{pathname: `/${post.id}`}}> 
                            <span className="show-details">
                                Show details
                            </span>
                        </Link>
                    </div>                            
                </div>                           
            </>
        );
    }
}

export default Post