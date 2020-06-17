import React, { useState, useEffect } from 'react';

const API_URL = "https://reqres.in/api/users?page";
const UserProfile = (props) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then((data) => {
                setUsers(data.data)
                //console.log("users data>>>>", users)
            })

    })

    return (
        <div>
            {users ? users.map((item) =>
                <div>
                    <div>
                        Name: {item.first_name} {item.last_name}
                    </div>
                    <div>
                        Email_id: {item.email}
                    </div>
                    <div>
                        <img src={item.avatar} alt = "Profile pic not found" />
                    </div>
                </div>

            ) : ""
            }
        </div>

    )
}


export default UserProfile;