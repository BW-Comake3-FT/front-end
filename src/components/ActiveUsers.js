import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../css/activeusers.css';

const url = 'https://reqres.in/api/users?page'

const ActiveUsers = (resource) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        axios.get('https://reqres.in/api/users?page')
            .then(res => {
                console.log(res)
                setUsers(res.data.data)
            })
            .catch(err => {
                // debugger
            })
    }

    useEffect(() =>{
        getUsers()
    }, [])

    console.log(users.data,"this or something")

    return (
        <div className="active">
            <h1>my active projects</h1>
                <div>
                   {users.map(user => {
                       console.log(user, 'this is the user')
                       return(
                           <div key={user.id}>
                               <h2>{user.email}</h2>
                               <h2>{user.firstname}</h2>
                               <h2>{user.lastname}</h2>
                           </div>
                       )
                   })} 
                </div>
        </div>
    )
}

export default ActiveUsers