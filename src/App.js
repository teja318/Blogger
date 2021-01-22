import React from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import UsersList from './UsersList'
import UserShow from './UserShow'
import PostsList from './PostsList'
import PostShow from './PostShow'
const App = (props) => {
  return (
    <div>
      
      <Link to='/'>Home</Link><b>|</b>
      <Link to='/users'>Users</Link><b>|</b>
      <Link to='/posts'>Posts</Link>

      <Route path='/' component={Home} />
      <Route path='/users' component={UsersList} exact={true}/>
      <Route path='/users/:id' component={UserShow} />
      <Route path='/posts' component={PostsList} exact={true}/>
      <Route path='/posts/:id' component={PostShow} />

    </div>
  )
} 
export default App