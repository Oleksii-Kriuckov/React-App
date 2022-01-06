import React, { useEffect, useState, useContext, useRef } from 'react'
import Card from './Card'
import UserList from '../API';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'


const Section = observer(() => {
    const { pages } = useContext(Context)
    const { usersAll } = useContext(Context)
    const [limit, setLimit] = useState(4)

    async function fetchUsers() {
        const responce = await UserList.getUsers(limit, pages.page);
        usersAll.setUsers(responce.data)
        usersAll.setCurrentArray(responce.data)
        
        const totalCount = responce.headers['x-total-count']
        pages.setTotalPage(Math.ceil(totalCount / limit))
    }

    useEffect(() => {
        fetchUsers()
    }, [pages.page])


    return (
        <section >
            {usersAll.users.map(user =>
                <Card id={user.id} key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                    <span>{user.id}</span>
                    <span>{user.phone}</span>
                </Card>
            )}
        </section>
    )
})

export default Section
