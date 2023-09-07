import React, { useEffect,useState } from "react";
import axios from "axios";

function UserList(){
    const [userList, setUserlist] = useState([]);

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => console.log(response))
        .then((result) => result.data)
        .then((data) => setUserlist([...data]))
        .catch((error) => console.log(error))
    
    }, [userList])
    console.log(userList);

    return(
        <div>
            <h1>Users List</h1>
            {userList.map((user) => (
                <div>
                    <ul>
                        
          <li>{user.name}</li>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.address.street}</li>
          <li>{user.address.suite}</li>
          <li>{user.address.city}</li>
          <li>{user.address.zipcode}</li>
          <li>{user.address.geo.lat}</li>
        
                    </ul>
                </div>
           ))}
        </div>
    );
}

export default UserList;