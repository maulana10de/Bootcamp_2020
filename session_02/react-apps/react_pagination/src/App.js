import React from 'react';
import axios from 'axios';
import './App.css';
import { Posts } from './components/Posts';
import { Pagination } from './components/Pagination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10,
    };
  }

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState({ posts: res.data, loading: false });
    };
    getPosts();
  }

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPosts = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.posts.slice(
      indexOfFirstPosts,
      indexOfLastPost
    );

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    return (
      <div className='container my-5'>
        <h1>My Blog</h1>
        <Posts posts={currentPosts} loading={this.state.loading} />
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.posts.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default App;
