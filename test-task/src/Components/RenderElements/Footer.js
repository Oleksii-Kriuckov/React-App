import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'

const Footer = observer(() => {
    const { pages } = useContext(Context)
    const { usersAll } = useContext(Context)

    const increment = () => {
        if (pages.page < 3) {
            pages.setPage(pages.page + 1)
            usersAll.setIsPostsVisible(false)
        }
    }

    const decrement = () => {
        if (pages.page > 1) {
            pages.setPage(pages.page - 1)
            usersAll.setIsPostsVisible(false)
        }
    }

    return (
        <div>
            <footer>
                <button onClick={decrement} >{'<'}<span>Previous</span></button>
                <button onClick={increment} ><span>Next</span>{'>'}</button>
            </footer>
            <button
                className='arrowButton left'
                onClick={decrement}
                onTouchEnd={decrement}
            >
                {'<'}
            </button>
            <button
                className='arrowButton right'
                onClick={increment}
                onTouchEnd={increment}
            >
                {'>'}
            </button>
        </div>
    )
})

export default Footer
