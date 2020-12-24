import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectedGallery} from '../../redux/actions';

class NewsDetails extends Component{
    componentDidMount(){
        this.props.dispatch(selectedGallery(this.props.match.params.id))
    }

    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span style={{color: 'black', fontSize: '12px'}}><b>Artcile By:</b>{data.artist}</span>
                            <div className="tags">
                                <span>
                                    <i className="fa fa-eye"></i>
                                    {data.views}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up"></i>
                                    {data.likes[0]}
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-down"></i>
                                    {data.likes[1]}
                                </span>
                            </div>
                            {
                                data.images.map((image, idx) => {
                                    return(
                                        <div key={idx}>
                                            <img src={`/images/galleries/${image.img}`} alt='data' style={{width: '200px'}}/>
                                            <span>{image.desc}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderDetails(this.props.galleryList)}
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        galleryList: state.gallery
    }
}

export default connect(mapStateToProps)(NewsDetails)