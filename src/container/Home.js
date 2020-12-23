import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {latestNews, articleNews} from '../actions/actionFile'
import ArticleDisplay from '../components/Home/articleDisplay'
import LatestDisplay from '../components/Home/latestDisplay'

class Home extends React.Component{
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata = {this.props.dataList.latestNews} />
                <ArticleDisplay adata = {this.props.dataList.articleNews} />
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        dataList: state.article
    }
    
}

export default connect(mapStateToProps)(Home)