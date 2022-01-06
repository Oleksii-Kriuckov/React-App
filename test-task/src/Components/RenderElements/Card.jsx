import React, { useContext, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'


const Card = observer(({ children, id, ...props }) => {
    const { usersAll } = useContext(Context)
   
    
    const showPosts = () => {
        usersAll.setIsPostsVisible(true)
        usersAll.setUserId(id)
        console.log(usersAll.isPostsVisible)
    }
    
    return (
        <div {...props} className={usersAll.isPostsVisible ? 'card_small' : 'cards'}>
            {children}
            <button className='cardBtn' onClick={showPosts} onTouchEnd={showPosts}>Show all posts</button>
        </div>
    )
})

export default Card
