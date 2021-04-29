import React,{useState, useEffect} from 'react' 
import axios from 'axios'
import {Link} from 'react-router-dom'
const PostShow = (props) => {
    //console.log(props)
    const { id } = props.match.params
    const [userPost, setUserPost] = useState([])
    const [name, setName] = useState("")
    const [comments, setComment] = useState([])
    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        // .then((response) => {
        //     const result = response.data[0]
        //     //console.log(response.data)
        //     setUserPost(result)
        // }) 
        // .catch((err) => {
        //     alert(err.message)
        // })
        // axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        // .then((response) => {
        //     const result = response.data
        //     setComment(result)
        // })
        // .catch((err) => {
        //     alert(err.message)
        // })
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success post:', result);
            setUserPost(result[0])
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.msg)
        })
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setComment(result)
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.msg)
        })
    }, [id])
    useEffect(() => {
        if (userPost.userId) {
            // axios.get(`https://jsonplaceholder.typicode.com/users/${userPost.userId}`)
            // .then((response) => {
            //     const result = response.data.name
            //     //console.log(result)
            //     setName(result)
            // })
            // .catch((err) => {
            //   alert(err.message)
            // })
            fetch(`https://jsonplaceholder.typicode.com/users/${userPost.userId}`, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success username:', result);
                setName(result.name)
            })
            .catch(error => {
                console.error('Error:', error);
                alert(error.msg)
            })
        }
    }, [userPost.userId])
    return (
        <div>
            <h2>USER NAME: {name}</h2>
            <h2>TITLE: {userPost.title}</h2>
            <h2>BODY: </h2>
                {userPost.body}
            <hr />
            <h1>COMMENTS</h1>
            <ul>
                {
                    comments.map((com) => {
                        return <li key={com.id}>{com.body}</li>
                    })
                }
            </ul>
            <hr />
            <Link to={`/users/${userPost.userId}`}>More posts of author: {name}</Link>
        </div>
    )
}
export default PostShow