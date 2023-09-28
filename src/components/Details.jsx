import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import SelectField from '../ui-components/SelectField'
import InputField from '../ui-components/InputField'
import Title from './Title'
import TotalInformation from './TotalInformation'
import Loader from './Loader'
import UsersService from '../service/users'
const Details = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUserDetail = async () => {
            setLoading(true);
            try {
                const response = await UsersService.getUserDetail(id);
                const data = await response;
                setUser(data)
                setLoading(false);
            } catch (error) {
                alert(error)
            }
        }
        getUserDetail()
    }, [id])

    const submitHandler = async(evt) => {
        evt.preventDefault();
        const data = evt.target.elements;
        const body = {
            id: user.id,
            firstName: data.firstName.value,
            lastName: data.lastName.value,
            jobTitle: data.jobTitle.value,
            jobArea: data.jobArea.value,
            age: data.age.value,
            address: data.address.value,
            country: data.country.value,
            city: data.city.value,
            state: data.state.value,
            email: data.email.value,
            phonenumber: data.phonenumber.value,
            keyword: data.keyword.value,
            subscribed: user.subscribed,
            prefix: user.prefix,
            suffix: user.suffix,
        }
        try {
            setLoading(true);
			const response = await UsersService.editUser(id, body);
            console.log(response);
            setLoading(false);
			navigate('/');
		} 
        catch (error) {
            alert(error)
		}
    }

    return (
        <div className='container'>
            {
                loading && <Loader /> 
            }
                    <form onSubmit={submitHandler}>
                        <div className="d-flex justify-content-between align-items-center py-4">
                            <p><Link to="/" className='text-white-50 m-0 p-0'>Список профилей</Link><span className='d-inline-block mx-2'>/</span><span>{`${user.firstName} ${user.lastName}`}</span></p>
                            <button className='btn text-white px-4' type='submit'>СОХРАНИТЬ</button>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src="https://www.freeiconspng.com/thumbs/account-icon/account-icon-33.png" alt="" className='w-50 border mx-auto d-block' />
                                <div className="d-flex mt-3 justify-content-center">
                                    <i className="fa-solid fa-star" style={{ color: "#d4b802" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#d4b802" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#d4b802" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#8c8c8c" }}></i>
                                    <i className="fa-solid fa-star" style={{ color: "#8c8c8c" }}></i>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="profile">
                                    <Title title="Профиль" />
                                    <SelectField name={'prefix'} option={user.prefix} />
                                    <div className='d-flex align-items-center mt-2'>
                                        <div className="w-75">
                                            <InputField dashed={true} label={"Кодовая фраза"} defaulValue={user.keyword} name={"keyword"} />
                                        </div>
                                        <div className='w-25 d-flex align-items-center'>
                                            <input type="checkbox" id='check' style={{ width: '18px', height: '18px' }} className='bg-transparent me-1' />
                                            <label htmlFor="check">Кодовая фраза</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TotalInformation user={user}/>
                    </form>
        </div>
    )
}

export default Details