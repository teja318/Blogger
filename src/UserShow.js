import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const UserShow = (props) => {
    const {id} = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const result = response.data
            setUser(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const result = response.data
            setPosts(result)
        })
        .catch((error) => {
            alert(error.message)
        })
    }, [id])

    return (
        <div>
            <h2>USER NAME : {user.name && user.name.toUpperCase()}</h2>
            <h3>POSTS WRITTEN BY USER</h3>
            <ul>
                {posts.map(post =>{
                    return <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                })}
            </ul>
        </div>
    )
}
export default UserShow