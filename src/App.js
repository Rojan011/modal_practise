import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList,setUsersList]=useState([]);
const addUserHandler=(uNaME,uAge)=>{
  setUsersList((prevUsersList)=>{
    return[...prevUsersList,{name:uNaME,age:uAge,id:Math.random().toString()}]
  })
}
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
