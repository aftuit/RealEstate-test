import React, { useEffect, useState } from 'react'
import TableItem from './TableItem'
import Loader from './Loader'
import UsersService from '../service/users'
const Home = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const response = await UsersService.getUsers();
                const data = await response;
                setUsers(data)
                setLoading(false);
            } catch (error) {
                alert(error)
            }
        }
        getUsers()
    }, [])

    function searchInUsers(arr, value) {
        value = String(value).toLowerCase();
        return arr.filter(o =>
            Object.entries(o).some(entry =>
                String(entry[1]).toLowerCase().includes(value)
            )
        );
    }

    return (
        <div className='container'>

            <div className="py-4 d-flex">
                <div className="px-2 py-0 bg-light rounded rounded-pill bg-dark shadow-sm overflow-hidden w-50">
                    <div className="input-group bg-transparent d-flex align-items-center">
                        <input
                            value={search}
                            onChange={(evt) => setSearch(evt.target.value)}
                            type="text"
                            placeholder="What're you searching for?"
                            aria-describedby="button-addon1"
                            className="w-75 px-2 py-3 search-input bg-transparent border-0" />
                        <div className="input-group-append ms-auto">
                            <span id="button-addon1" className="d-block text-white w-25 me-2"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <button className='btn text-white ms-auto d-block'>
                    Total users: {searchInUsers(users, search)?.length}
                </button>
            </div>

            <div className='list-wrap p-2'>
                {loading &&
                    <Loader />}
                <table className="table table-striped table-dark ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Job Area</th>
                            <th scope="col">Email</th>
                            <th scope="col">Country</th>
                            <th scope="col">Subscription</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchInUsers(users, search).map(user => {
                                return <TableItem user={user} key={user.id} />
                            })
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Home