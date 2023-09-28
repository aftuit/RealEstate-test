import React from 'react';
import UsersService from '../service/users';
import { useNavigate } from 'react-router-dom'
const TableItem = ({ user }) => {

    const navigate = useNavigate();

    const editHandler = (id) => {
        navigate(`/users/${id}`)
    }

    const deleteHandler = async(id) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await UsersService.deleteUser(id);
            navigate(`/`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <tr>
            <th scope="row">{user.firstName?.[0] + "." + user.lastName}</th>
            <td>{user.jobArea}</td>
            <td>{user.email}</td>
            <td>{user.country}</td>
            <td>{user.subscribed ?
                <span className='bg-success p-1 rounded'>Subscribed</span>
                : <span className='bg-danger p-1 rounded'>Unsubscribed</span>}
            </td>
            <td>
                <button data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete" type='button' className='btn btn-danger me-1' onClick={() => deleteHandler(user.id)}><i className="fa-solid fa-trash"></i></button>
                <button data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit" type='button' className='btn btn-success' onClick={() => editHandler(user.id)}><i class="fa-solid fa-pencil"></i></button>
            </td>
        </tr>
    )
}

export default TableItem