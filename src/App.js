import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import FullPost from './components/FullPost';
import PageNotFound from './components/PageNotFound';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { posts: [], commentsNo: [], selectedPostId: 0 };
    this.saveSelectedPostId = this.saveSelectedPostId.bind(this);
  }

  saveSelectedPostId(id) {
    this.setState(() => ({ selectedPostId: id }));
  }

  componentDidMount() {
    let numberOfComments = [];
    fetch('https://5ebd9842ec34e900161923e7.mockapi.io/post')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
      .then(() => this.state.posts.map(post => fetch(`https://5ebd9842ec34e900161923e7.mockapi.io/post/${post.id}/comments`)
        .then(response => response.json())
        .then(json => {
          numberOfComments.push(json.length);
          this.setState({ commentsNo: numberOfComments})
        })
      ))
  }

  render() {
    return ( 
      <BrowserRouter>
        <div className="bloggy-app">
          <h1>Bloggy v.01</h1>
          <Switch>
            <Route 
              path="/"
              exact={true}
              render={() => (
                <Posts 
                  posts={this.state.posts} 
                  saveSelectedPostId={this.saveSelectedPostId} 
                  commentsNo={this.state.commentsNo}
                />
              )}
            />
            <Route 
              path="/post/:id"
              render={() => (
                <FullPost 
                  obj={this.state.posts[this.state.selectedPostId - 1]} 
                />
              )} 
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
