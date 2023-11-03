import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

const Update = () => {
    const { id } = useParams();
    const users = useSelector(state => state.users);
    const existingUser = users.find(user => user.id == id) || {};

    const { name,email} = existingUser;

    const [userName, setUserName] = useState(name);
    const [userEmail, setUserEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) =>{
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: userName,
            email: userEmail
        }))
        navigate('/')
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <form onSubmit={handleUpdate}>
            <Link className=" border-b-2 w-10 fixed top-2 left-2" to='/' >Back</Link>
                <h3 className='text-3xl text-blue-600 font-bold mb-5 mt-5'>Update User</h3>
                <div>
                    <label className="text-xl font-medium mr-1" htmlFor="name">Name:</label>
                    <input className=" w-80 border-solid border p-1 rounded-md" type="text" name="name" placeholder="enter name" value={userName} onChange={e=>setUserName(e.target.value)} />
                </div>
                <br />
                <div>
                    <label className="text-xl font-medium mr-2" htmlFor="email">Email:</label>
                    <input className=" w-80 border-solid border p-1 rounded-md" type="email" name="email" placeholder="enter email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                </div> <br />
                <button className=" w-32 p-1 text-white rounded-xl bg-green-500 hover:shadow-green-400 hover:shadow-lg ease-in-out duration-300">Update</button>
            </form>
        </div>
    )
}

export default Update;
