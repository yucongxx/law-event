import React from 'react';
import { withRouter } from 'react-router'
import { Spin, message } from 'antd'
import { searchQuery } from '../../common/utils/http'
import queryString from 'query-string'
import ListHeader from '../search-list/components/list-header'
import Footer from '../home/components/footer'
import EchartsContent from './charts-content'
import isEmpty from 'lodash/isEmpty'
import './index.less'

@withRouter
class ChartAnalyzeList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:true
        }
    }

    onEvent = (key,params) => {
        switch(key){
            case 'searchCharts':
                this.setState({
                    isLoading:false
                })
                break
            default:
                break
        }
    }

    render(){
        // console.log(this.props)
        const { isLoading } = this.state

        return(
            <React.Fragment>
                <div className="chart-list-wrap">
                    <Spin spinning={isLoading} tip="数据加载中，请稍后">
                        <div className="search-list-header">
                            <ListHeader onEvent={this.onEvent} />
                        </div>
                        <div className="chart-list-content">
                           <EchartsContent onEvent={this.onEvent} />
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


export default ChartAnalyzeList