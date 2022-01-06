import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import Posts from './Posts'
import Section from './Section'

const Main = observer(() => {
    const { usersAll } = useContext(Context)

    return (
        <main>
            <Header />
            <div className={usersAll.isPostsVisible ? 'main-container' : "main-container justify"}>
                <Section />
                {usersAll.isPostsVisible ? <Posts /> : null}
            </div>
            <Footer />
        </main>
    )
})

export default Main
