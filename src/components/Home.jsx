import React from 'react'
import Plans from './Plans.jsx'
import Footer from './Footer.jsx'
import Layout from './Layout.jsx'

const Home = () => {
    return (
        <>
            <Layout/>
            <div className='w-full pb-10'>
                <h1 className='text-center md:text-4xl text-2xl font-bold md:my-16 my-10'>Plans So Far</h1>
                <Plans />
            </div>
            <Footer />

        </>
    )
}

export default Home