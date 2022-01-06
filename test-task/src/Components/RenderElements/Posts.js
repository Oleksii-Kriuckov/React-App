import React, { useState, useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { CloseButton } from 'react-bootstrap'
import UserList from '../API';


const Posts = observer(() => {
    const { usersAll } = useContext(Context)
    const [limit, setLimit] = useState(3)
    const [posts, setPosts] = useState([])


    async function fetchPosts() {
        const responce = await UserList.getUserPosts(usersAll.userId, limit);
        setPosts(responce.data)
        console.log(usersAll.userId)
    }

    useEffect(() => {
        fetchPosts()
    }, [usersAll.userId])

    const hidePosts = () => {
        usersAll.setIsPostsVisible(false);
        console.log(usersAll.isPostsVisible)
    }
    return (
        <div className='posts'>
            <CloseButton variant="white" onClick={hidePosts} />
            <div className='wrapper'>
                {posts.map(user =>
                    <div key={user.id}>
                        <h3>{user.title}</h3>
                        <p>{user.body}</p>
                        <hr />
                    </div>
                )}
            </div>
        </div>
    )
})

export default Posts
