import React from 'react'
import Plans from './Plans.jsx'
import Footer from './Footer.jsx'
import Layout from './Layout.jsx'

const Home = () => {
    return (
        <>
            <Layout/>
            <div className='w-full pb-10'>
                <h1 className='text-center text-4xl font-bold md:my-20 my-10'>Plans So Far</h1>
                <Plans />
            </div>
            <Footer />

        </>
    )
}

export default Home