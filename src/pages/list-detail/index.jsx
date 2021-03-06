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
        this.timer = null
        this.state = {
            detailId:'',
            isLoading:true,
            resultData:{},
            caseData:{},
            caseTitle:'',
            keyWords:''
        }
    }

    componentDidMount(){
        let { location:{ search } } = this.props
        const parseObj = queryString.parse(search)

        this.loginCheck(parseObj)
        this.reqSearch(parseObj)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    loginCheck = (parseObj) => {
        let isLogin  = localStorage.getItem('loginInfo')

        if(!isLogin){
            message.error('请先登录')
            this.timer = setTimeout(()=> {
                window.location.href = 'http://www.goingai.com/api/oauth2/authorization/weixin'
            },1000)
            return 
        }
        this.setState({
            detailId: parseObj.detailId
        })

    }

    reqSearch = (data) => {
        let postData = {
            detailId:data.detailId,
            
        }
        searchQueryDetail(postData).then(res => {
            
            if(!isEmpty(res.data)){
                const { data, code, msg } = res.data

                if(code === 500) {
                    this.setState({
                        isLoading:false
                    })
                    message.error(msg)
                    return
                }
                // console.log(data)
                if(data){
                    const title = data && data['基本信息'].案件名称
                    const keyWords = data && data['基本信息'].关键词
    
                    this.setState({
                        resultData:data,
                        caseTitle:title,
                        keyWords,
                        isLoading:false
                    })
                }

               

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
            case 'contentListSearch':
                if(!params){
                    message.error('请输入查询内容')
                    return
                }
                this.props.history.push(`/search-list?inputValue=${params}`)
                break
                default:
                break
        }
    }

    render() {
        const { resultData, isLoading, caseTitle, keyWords } = this.state

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
                                caseTitle={caseTitle}
                                keyWords={keyWords}
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