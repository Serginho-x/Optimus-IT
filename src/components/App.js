import React, { Component } from "react";
import {connect} from 'react-redux';
import {getPosts, filterTag, getTags} from '../store/actions';
import {getVisiblePosts} from '../store/selectors'
import Post from './Post';
import Selector from './Selector';

import '../styles/App.css';

class App extends Component {      

    state = {
        options: [],
        selected: {label: "All", value: "All"}
    }

    async componentDidMount() {
        await this.props.getPosts();
        await this.props.getTags();
        const options = this.props.tags.map((tag) => ({label: tag, value: tag}))
        this.setState({
            options: options
        })
    }  

    onChange = (optionSelected) => {       
        const option =  optionSelected.value ? optionSelected.value : optionSelected
        this.props.filterTag(option);
        this.setState({
            selected: {...this.state.selected, label: option, value: option}
        })
    }

    render() {
        const {posts} = this.props;
        const {options, selected} = this.state;
        return (           
            <div className="postList">
                <h1>My Post Viewer!</h1>
                <div className="select">
                    <Selector 
                        options={options}
                        selected={selected}
                        onChange={this.onChange}                        
                    />
                </div>
                <button className="button" onClick={() => this.onChange("All")}>
                    Clear
                </button>
                {posts && posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div> 
        );
    }
}

const mapStateToProps = store => {
    return {
        tags: store.reducers.tags,
        posts: getVisiblePosts(store.reducers, store.reducers)   
    }
}

const mapDispatchToProps = dispatch => {
    return {
       filterTag: (tag) => dispatch(filterTag(tag)),
       getPosts: () => dispatch(getPosts()),
       getTags: (tag) => dispatch(getTags(tag))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)