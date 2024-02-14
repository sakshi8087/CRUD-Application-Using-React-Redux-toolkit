import { Card, Typography } from "@material-tailwind/react";

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const UserList = () =>{
    const users = useSelector(store =>store.users)
    console.log(users);

    const renderTable= () =>(

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>gender</th>
                    <th>DOB</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
             {users.map((user) => (
                 <tr  key={user.id}>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td>
                 <td>{user.contact}</td>
                 <td>{user.gender}</td>
                 <td>{user.dob}</td>
                  
                 <td>
                     <Link to='/edit'>
                     <button type="button">Edit</button>
                     </Link>
 
                     <button type="button">Delete</button>
                 </td>
              
             </tr>
             ))}
    
            </tbody>
            </table>
        
    )

    return(
        <>
        <div className="no-user" >
          {users.length ? renderTable() : <p>No users</p>}
        </div>
        
        </>
    )
}

export default UserList;