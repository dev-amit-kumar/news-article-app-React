import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {latestNews, articleNews, galleryNews} from '../actions/actionFile'
import ArticleDisplay from '../components/Home/ArticleDisplay'
import LatestDisplay from '../components/Home/LatestDisplay'
import GalleryDisplay from '../components/Home/GalleryDisplay'


class Home extends React.Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata = {this.props.dataList.latestNews} />
                <ArticleDisplay adata = {this.props.dataList.articleNews} />
                <GalleryDisplay gdata = {this.props.galleryList.galleryNews} />
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        dataList: state.article,
        galleryList: state.gallery
    }
    
}

export default connect(mapStateToProps)(Home)