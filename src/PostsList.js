import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const PostsList = (props) => {
    const [posts, setPosts] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(9)
    useEffect(() => {
        // axios.get('http://jsonplaceholder.typicode.com/posts')
        // .then((response) => {
        //     const result = response.data
        //     setPosts(result)
        // })
        // .catch((error) => {
        //     alert(error.message)
        // })
        fetch(`http://jsonplaceholder.typicode.com/posts`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setPosts(result)
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.msg)
        })
    },[])
    const pagination = () => {
        return posts.filter((post, i) => {
            return (i >= start && i <= end)
        })
    }
    const nextPage = () => {
        setStart(start + 10)
        setEnd(end + 10)
    }
    //console.log(pagination())
    return(
        <div>
            <h1> Posts List - {posts.length}</h1>
            <ol>
                {
                    pagination().map((post,i) =>{
                        return <li key={i}> <Link to={`/posts/${post.id}`}> {post.title} </Link> </li>
                    })
                }
            </ol>
            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}
export default PostsList