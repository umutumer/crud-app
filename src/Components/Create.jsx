import React, { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addUser({id: users[users.length -1].id + 1, name:name,email:email}))
        navigate('/')
    }

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <Link className=" border-b-2 w-10 fixed top-2 left-2" to='/' >Back</Link>
      <form onSubmit={handleSubmit}>
        <h3 className="text-center  font-bold  text-5xl text-blue-600 m-5">Add New User</h3>
        <div>
          <label className="text-xl font-medium mr-1" htmlFor="name">Name:</label>
          <input className=" w-80 border-solid border p-1 rounded-md" type="text" name="name" placeholder="enter name" onChange={e => setName(e.target.value) } />
        </div> <br />
        <div>
          <label className="text-xl font-medium mr-2" htmlFor="email">Email:</label>
          <input className=" w-80 border-solid border p-1 rounded-md" type="email" name="email" placeholder="enter email" onChange={e => setEmail(e.target.value) } />
        </div> <br />
        <button className=" w-32 p-1 text-white rounded-xl bg-green-500 hover:shadow-green-400 hover:shadow-lg ease-in-out duration-300">Submit</button>
      </form>
    </div>
  );
};

export default Create;
