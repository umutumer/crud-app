import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(deleteUser({id: id}))
    }
    return (
        <div className='flex flex-col w-full'>
            <h2 className='text-center  font-bold  text-5xl text-blue-600 m-5'>Crud App</h2>
            <Link to="/create" className=' m-2 bg-green-500 w-20 h-full text-center text-white rounded-md text-lg hover:shadow-green-400 hover:shadow-lg ease-in-out duration-300 hover:text-xl hover:w-24  mb-5'>Create +</Link>
            <table>
                <thead>
                    <tr className=' border-b text-left'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr className=' border-b' key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className=' bg-red-600 mr-2 p-1 rounded-md text-white text-sm' to={`/edit/${user.id}`}>Edit</Link>
                                <button className=' bg-green-600 mr-2 p-1 rounded-md text-white text-sm' onClick={() => handleDelete(user.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
