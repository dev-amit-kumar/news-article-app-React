import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './Home/'
import NewsDetails from './NewsDetails'
import Header from './Header'
import Footer from './Footer'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Index}/>
            <Route exact path="/details/:id" component={NewsDetails}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing