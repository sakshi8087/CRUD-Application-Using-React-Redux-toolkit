
import './App.css'

import {Routes, Route} from 'react-router-dom';
import UserList from './Component/UserList';
import Registration from './Component/Form';
import EditUser from './features/EditUser';


function App(){

  return (
    <>
    <div className='App'>
     <Routes>
       <Route path='/' element={<Registration/>}/>
       <Route path="/UserList" element={<UserList/>}/>
       <Route path="/UserList/edit/:id" element={<EditUser/>}/>
     </Routes>
    
      </div>
    </>
  );

  }
export default App
