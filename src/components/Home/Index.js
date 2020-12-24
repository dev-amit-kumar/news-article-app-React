import React, {Component} from 'react'
import {connect} from 'react-redux'
import {latestNews, articleNews, galleryNews} from '../../redux/actions'
import ArticleDisplay from './ArticleDisplay'
import LatestDisplay from './LatestDisplay'
import GalleryDisplay from './GalleryDisplay'


class Index extends React.Component{
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

export default connect(mapStateToProps)(Index)