import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const UsersList = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        // axios.get('http://jsonplaceholder.typicode.com/users')
        // .then((response) => {
        //     const result = response.data
        //     setUsers(result)
        // })
        // .catch((error) => {
        //     alert(error.message)
        // })
        fetch(`http://jsonplaceholder.typicode.com/users`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            setUsers(result)
        })
        .catch(error => {
            console.error('Error:', error);
            alert(error.msg)
        })
    },[])
    return(
        <div>
            <h1> Users List - {users.length}</h1>
            <ol>
                {
                    users.map((user) =>{
                        return <li key={user.id}> <Link to={`/users/${user.id}`}> {user.name} </Link> </li>
                    })
                }
            </ol>
        </div>
    )
}
export default UsersList