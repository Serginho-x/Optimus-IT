import React, { Component } from "react";
import axios from 'axios';
import '../styles/App.css';

class Post extends Component {

    state = {
        isShowDetails: false,
        details: {}
    }

    onShowDetails = async() => {        
        const response = await axios.get('http://localhost:8080/' + `src/db/post-${this.props.post.id}.json`);
        this.setState({
            details: response.data,
            isShowDetails: !this.state.isShowDetails
        })
    }    

    render() {
        const {isShowDetails, details} = this.state;        
        const {post} = this.props;        
        return (
            <> 
                <div className="post">
                    <div className="title">{post.title}</div>
                    {!isShowDetails && <div className="description">{post.description}</div> } 
                    {isShowDetails && 
                        <> 
                            <div className="full-description">{details.fullDescription}</div>
                            <div className="footer-details">
                                <div className="author" onClick={() => alert("smtgfdh")}>{details.author}</div>
                                <div className="date">{details.date}</div>
                            </div>                            
                        </>
                     }
                    <div className="post-footer">
                        <div className="tag-container">
                            {post.tags.map((tag, index) => (
                                <div className="tag" key={index}>
                                    {tag}
                                </div>
                            ))}
                        </div>                                
                        <span className="show-details" onClick={() => this.onShowDetails()}>
                            {isShowDetails ? "Hide details" : "Show details"}
                        </span>
                    </div>                            
                </div>                           
            </>
        );
    }
}


export default Post