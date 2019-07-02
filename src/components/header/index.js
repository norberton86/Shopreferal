import React from 'react'
import './header.scss'

import {connect} from 'react-redux'
import {fetchPosts} from '../../redux/actions/AsyncAction'

class Header extends React.Component{
    
    constructor(props){
       super(props)
    }

    componentWillMount()
    {
        this.props.fetchPosts()
    }
    
    
    render() {
    
        const{posts} = this.props

        return (
          <div>
            <h1> Post </h1>
            {posts.map(post=>(
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                            )
            )}
          </div>
        )
      }
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost:state.posts.item
})


const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        //create: post => dispatch(createPost(post))//action with parameters
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Header)