import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser, deleteUser, updateUser } from './components/Users';


function App() {
   const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [newUsername, setNewUsername] = useState("");


  return (
    <div className="App">
      hello
      <div className='add'>
        <input type="text" placeholder="Name...." onChange={(event)=> {setName(event.target.value)}}/>
        <input type="text" placeholder="UserName...." onChange={(event)=> {setUsername(event.target.value)}}/>
        <button onClick={() =>{dispatch(addUser({id: userList[userList.length -1].id+1, name , username}))}}> Add User</button>

      </div>
      <div className='display'>{userList.map((user)=>{
        return <div> 
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <input type="text" placeholder="New UserName...." 
        onChange={(event)=> {setNewUsername(event.target.value)}}
        />
        <button onClick={()=> {dispatch(updateUser({id: user.id, username: newUsername}))}}>update</button>
        <button onClick={()=> {dispatch(deleteUser({id: user.id}))}}>delete</button>
        </div>
      })}</div>
      </div>
  );
}

export default App;
