import React, { useState, useContext, useEffect, useMemo} from 'react'
import { Form, FormControl } from "react-bootstrap"
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import UserList from '../API'

const Header = observer(() => {
    const [searchName, setSearchName] = useState('')
    const [usersArray, setUsersArray] = useState([])
    const { usersAll } = useContext(Context)
    const { pages } = useContext(Context)

    async function fetchUsers() {
        const responce = await UserList.getUsers(10,1);
        setUsersArray(responce.data)
        const totalCount = responce.headers['x-total-count']
        pages.setTotalPage(Math.ceil(totalCount / 4))
    }
    useEffect(() => {
        fetchUsers()
    }, [pages.page])

    function sortUsers() {
        usersAll.setUsers(usersAll.users.sort((a, b) => a['name'].localeCompare(b['name'])))
    }

    const searchedCards = useMemo(() => {
        if (searchName) {
            console.log(usersAll.currentArray)
            usersAll.setIsPostsVisible(false)
            usersAll.setUsers(usersArray)
            return usersAll.setUsers(usersAll.users.filter(card => card.name.toLowerCase().includes(searchName.toLowerCase())))
        } else {
            return usersAll.setUsers(usersAll.currentArray)
        }
    }, [searchName])


    return (
        <header>
            <button onClick={sortUsers} onTouchEnd={sortUsers}>Sort by name</button>

                <input
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    type="search"
                    className="form"
                    placeholder="Search"
                />
            
        </header>

    )
})

export default Header
