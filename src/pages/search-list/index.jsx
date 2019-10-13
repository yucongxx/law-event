import React from 'react';
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import { searchQuery } from '../../common/utils/http'
import queryString from 'query-string'
import ListHeader from './components/list-header'
import ListContent from './components/list-content'
import TreeList from './components/tree-content'
import isEmpty from 'lodash/isEmpty'
import './index.less'

@withRouter
class SearchList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchValue:'',
            searchResult:[],
            totalElementCount:0,
            trfilterOptions:{},
            isLoading:true
        }
    }

    componentDidMount(){
        let { location:{ search } } = this.props
        const parseObj = queryString.parse(search)
        this.setState({
            searchValue:parseObj.inputValue
        })
        this.reqSearch(parseObj)
    }

    reqSearch = (data) => {
        let postData = {
            inputValue:data.inputValue,
            fromIndex:data.fromIndex || 1,
            
        }
        searchQuery(postData).then(res => {
            if(!isEmpty(res.data)){
                const { data } = res.data
                const searchResult = data && !isEmpty(data.searchResultPage) && data.searchResultPage.elements
                const totalElementCount = data && !isEmpty(data.searchResultPage) && data.searchResultPage.totalElementCount
                const filterOptions = data && !isEmpty(data.filterOptions) && data.filterOptions
                if(searchResult){
                    this.setState({
                        searchResult,
                        totalElementCount,
                        filterOptions,
                        isLoading:false
                    })
                }

            }
        })
    }

    onEvent = (key,params) => {
        switch(key){
            case 'changePage':
                const { searchValue } = this.state
                let searchData = {
                    inputValue:searchValue,
                    fromIndex:params
                }
                this.setState({
                    isLoading:true
                },()=>{
                    this.reqSearch(searchData)
                })
                
                break
            case 'contentListSearch':
                console.log(params)
                let contentListSearchData = {
                    inputValue:params,
                }
                this.setState({
                    isLoading:true
                },()=>{
                    this.reqSearch(contentListSearchData)
                })
                
                break
                default:
                break
        }
    }

    render(){
        // console.log(this.props)
        const { searchResult, totalElementCount, filterOptions,isLoading } = this.state

        return(
            <div className="search-list-wrap">
                <Spin spinning={isLoading} tip="数据加载中，请稍后">
                    <div className="search-list-header">
                        <ListHeader onEvent={this.onEvent} />
                    </div>
                    <div className="search-list-content">
                        <TreeList filterOptions={filterOptions} />
                        <ListContent searchResult={searchResult} totalElementCount={totalElementCount} onEvent={this.onEvent} />
                    </div>
                </Spin>
              
            </div>
        )
    }
}


export default SearchList