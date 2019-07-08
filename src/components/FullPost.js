import React, { Component } from "react";
import {connect} from 'react-redux';
import {showModal, fetchFullPost} from '../store/actions';
import ModalAuthor from './ModalAuthor';
import '../styles/App.css';

class FullPost extends Component {

    componentDidMount() {        
        let search = this.props.location.pathname.slice(1);
        this.props.fetchFullPost(search);
    }

    render() {
        const {fullPost, showModal} = this.props;        
        return (            
            <div className="fullList">
            <ModalAuthor/>   
            <div className="post">
                <div className="title">{fullPost.title}</div>                   
                    <div className="full-description">{fullPost.fullDescription}</div>
                    <div className="footer-details">
                        <div className="author" 
                            onClick={() => showModal({
                                open: true,
                                author: fullPost.author,
                                phone: fullPost.phone                                
                            })}
                        >{fullPost.author}</div>
                        <div className="date">{fullPost.date}</div>
                    </div> 
                    <div className="post-footer">
                        <div className="tag-container">
                            {fullPost.tags && fullPost.tags.map((tag, index) => (
                                <div className="tag" key={index}>
                                    {tag}
                                </div>
                            ))}
                        </div>                         
                    </div> 
                    <div className="fullList-footer">
                        <div className="back-button" >
                            <a href="/">Back</a>  
                        </div>
                    </div>                    
                </div>      
            </div> 
        );
    }
}

const mapStateToProps = store => {
    return {
        fullPost: store.reducers.fullPost,       
    }
}

const mapDispatchToProps = dispatch => {
    return {
       showModal: (modalProps) => dispatch(showModal(modalProps)),  
       fetchFullPost: (id) => dispatch(fetchFullPost(id))     
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FullPost)