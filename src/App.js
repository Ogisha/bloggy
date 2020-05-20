import React from 'react';
import './App.scss';
import Posts from './components/Posts';
import FullPost from './components/FullPost';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { posts: [], commentsNo: [] };
  }
  componentDidMount() {
    var newOne = [];
    fetch('https://5ebd9842ec34e900161923e7.mockapi.io/post')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
      /*.then(json => this.state.posts.map(post => {
        fetch(`https://5ebd9842ec34e900161923e7.mockapi.io/post/${post.id}/comments`)
        .then(response => response.json())
        .then(json => {
          newOne.push(json.length);
          this.setState({ commentsNo: newOne})
        })
      }))*/
  }

  render() {
    return ( 
      <div className="bloggy-app">
        <h1>Bloggy v.01</h1>
       {/* <Posts posts={this.state.posts} commentsNo={this.state.commentsNo}/>*/}
       <FullPost posts={this.state.posts} />
      </div>
    )
  }
}

export default App;
