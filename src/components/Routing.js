import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from './Home/Index'
import NewsDetails from './Details/NewsDetails'
import GalleryDetails from './Details/GalleryDetails'
import Header from './Header'
import Footer from './Footer'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Index}/>
            <Route exact path="/details/:id" component={NewsDetails}/>
            <Route exact path="/gdetails/:id" component={GalleryDetails}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing