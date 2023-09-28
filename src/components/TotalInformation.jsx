import React from 'react'
import Title from './Title'
import InputField from '../ui-components/InputField'
import SelectField from '../ui-components/SelectField'
const TotalInformation = ({ user }) => {
    return (
        <div className='mt-4 pb-4'>
            <Title title={'Общая информация'} />
                <InputField label={"Има"} defaulValue={user.firstName} name={"firstName"} />
                <InputField label={"Фамилия"} defaulValue={user.lastName} name={"lastName"} />
                <InputField label={"Возраст"} defaulValue={user.age} name={"age"} />
                <div className="mt-4">
                    <SelectField bg={true} />
                </div>
                <div className="row mt-4">
                    <div className="col-6">
                        <Title title={'Работа'} />
                        <InputField label={"Должность"} defaulValue={user.jobTitle} name={"jobTitle"} />
                        <InputField label={"Место работы"} defaulValue={user.jobArea} name={"jobArea"} />
                        <InputField label={"Электронная почта:"} defaulValue={user.email} name={"email"} />
                        <InputField label={"Тел:"} defaulValue={user.phonenumber} name={"phonenumber"} />
                    </div>
                    <div className="col-6">
                        <Title title={'Домашний адрес'} />
                        <InputField label={"Страна"} defaulValue={user.country} name={"country"} />
                        <InputField label={"Город"} defaulValue={user.city} name={"city"} />
                        <InputField label={"Область"} defaulValue={user.state} name={"state"} />
                        <InputField label={"Адрес"} defaulValue={user.address} name={"address"} />
                    </div>
                </div>
        </div>
    )
}

export default TotalInformation