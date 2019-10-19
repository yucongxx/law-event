import React from 'react'
import { message, Spin } from 'antd'
import { searchQueryDetail } from '../../common/utils/http'
import queryString from 'query-string'
import ListHeader from '../search-list/components/list-header'
import DetailContent from './components/detail-content'
import Footer from '../home/components/footer'
import isEmpty from 'lodash/isEmpty'
import './index.less'


class ListDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            detailId:'',
            isLoading:true,
            resultData:{}
        }
    }

    componentDidMount(){
        let { location:{ search } } = this.props
        const parseObj = queryString.parse(search)
        this.setState({
            detailId: parseObj.detailId
        })

        this.reqSearch(parseObj)
    }

    reqSearch = (data) => {
        let postData = {
            detailId:data.detailId,
            
        }
        searchQueryDetail(postData).then(res => {
            if(!isEmpty(res.data)){
                const { data } = res.data
                console.log(data)
                const resultTitleData = data

                this.setState({
                    resultData:data,
                    isLoading:false
                })

            }
        }).catch(err => {
            console.log('报错提示', err)
            this.setState({
                isLoading:false
            })
            message.error(err.msg)
        })
    }


    onEvent = (key, params) => {
        switch(key){

        }
    }

    render() {
        const { resultData, isLoading } = this.state

        return (
            <React.Fragment>
                <div className="list-detail-wrap">
                    <Spin spinning={isLoading} tip="数据加载中，请稍后">
                        <div className="search-list-header">
                            <ListHeader onEvent={this.onEvent} />
                        </div>
                        <div className="search-list-content">
                            <DetailContent
                                resultData={resultData}
                                // totalElementCount={totalElementCount}
                                onEvent={this.onEvent}
                            />
                        </div>
                    </Spin>
                </div>
                <div className="home-footer">
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}


export default ListDetail