import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const PostsList = (props) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const result = response.data
            setPosts(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    },[])
    return(
        <div>
            <h1> Posts List - {posts.length}</h1>
            <ol>
                {
                    posts.map((post) =>{
                        return <li key={post.id}> <Link to={`/posts/${post.id}`}> {post.title} </Link> </li>
                    })
                }
            </ol>
        </div>
    )
}
export default PostsList