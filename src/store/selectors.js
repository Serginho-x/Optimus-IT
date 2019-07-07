import { createSelector } from 'reselect';

export const getPosts = (state) => state.posts;
export const getFilterTag = (state) => state.filterTag;

export const getVisiblePosts = createSelector(
    [getPosts, getFilterTag],
    (posts, filter) => {
    switch (filter) {
      case "All":
        return posts;   
      case filter:
        return posts.filter(post => post.tags.includes(filter));      
      default:
        return posts;
    }
  }
);