
import { Fragment } from "react";
<script src="https://cdn.tailwindcss.com"></script>
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from "../features/userSlice";
const UserList = () =>{
    const users = useSelector(store =>store.users);
    const dispatch = useDispatch();
    const handleRemove = (id) =>{
        dispatch(deleteUser({id}))
    }
    

const renderTable = () => (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    WeekDay
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    Date Of Birth
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>(
        
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={user.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                </th>
                <td className="px-6 py-4">
                    {user.name}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>
                <td className="px-6 py-4">
                    {user.contact}
                </td>
                <td className="px-6 py-4">
                    {Array.isArray(user.weekday) ? user.weekday.join(',') : ''}
                </td>
                <td className="px-6 py-4">
                    {user.gender}
                </td>
                <td className="px-6 py-4">
                    {user.dob}
                </td>
                <td className="px-6 py-4">
                    <Link to={`edit/${user.id}`}><button type="button"  className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button></Link>
                
                   <button type="button"  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   onClick={()=>handleRemove(user.id)}>Delete</button>
                </td>
            </tr>
    
            ))}
            
    
        </tbody>
    </table>
</div>
 );
      

    return(
        <>
        <div className="no-user" >
          {users.length ? renderTable() : <p>No users</p>}
        </div>
        
        </>
    )
}

export default UserList;