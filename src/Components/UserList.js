import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import UserProfile from './UserProfile'

const API_URL = "https://reqres.in/api/users?page";
function UserList() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then((data) => {
                setUsers(data.data)
                console.log("users data>>>>", users)

            })

    })

    return (
        <div>
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email_id</th>

                    </tr>
                    {users ? users.map((item) =>
                        <tr>
                            <td>
                                <Link to="/UserProfile" id={item.id}>
                                    {item.first_name} {item.last_name}
                                </Link>
                                <Route path="/UserProfile" exact component={UserProfile}></Route>
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    ) : ""
                    }
                </table>?

            </div>
        </div>
    )
}

export default UserList;