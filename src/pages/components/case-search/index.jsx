import React from 'react'
import { Input, Button,message } from 'antd'
import { withRouter } from 'react-router'
import { searchQuery } from '../../../common/utils/http'
import './index.less'

const { Search } = Input


@withRouter
class CaseSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    searchCase = () => {
        let { inputValue } = this.state
        if(!inputValue) {
            message.error('请输入查询内容')
            return
        }
        this.props.history.push(`/search-list?inputValue=${inputValue}`)
        // searchQuery(inputValue)
    }

    chartAnalyze = () => {
        let { inputValue } = this.state
        if(!inputValue) {
            message.error('请输入查询内容')
            return
        }
        this.props.history.push(`/chart-list?inputValue=${inputValue}`)
        
    }

    changeValue = (inputValue) => {
        this.setState({
            inputValue: inputValue.target.value
        })
    }

    render() {
        let { inputValue } = this.state

        return (
            <React.Fragment>
                <div className="case-search-wrap">
                    <Input
                        placeholder="清输入搜索的内容"
                        className="case-search-input"
                        value={inputValue}
                        onChange={this.changeValue}
                        onPressEnter={this.searchCase}
                    />
                    <Button
                        type="primary"
                        className="case-search-submit"
                        onClick={this.searchCase}
                    >开始检索</Button>
                    <Button
                        type="primary"
                        className="case-search-submit"
                        onClick={this.chartAnalyze}
                    >图表分析</Button>
                </div>
                <div className="search-bottom-content">
                    <span>已收录案例 75656730 篇，今日新增 89223 篇。</span>
                    {/* <a href="">点我检索「天同码」，首次使用免费</a> */}
                </div>
            </React.Fragment>


        )
    }
}

export default CaseSearch