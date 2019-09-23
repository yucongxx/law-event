import React from 'react'
import { Input, Button } from 'antd'
import './index.less'

const { Search } = Input

class CaseSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    searchCase = () => {
        let { inputValue } = this.state
        console.log(inputValue)
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
                    {/* <Search
                    placeholder="请输入搜索的内容"
                    enterButton="开始搜索"
                    className="case-search"
                    value={inputValue}
                    onChange={this.changeValue}
                    onSearch={this.searchCase}
                /> */}
                    <Input
                        placeholder="清输入搜索的内容"
                        className="case-search-input"
                        value={inputValue}
                        onChange={this.changeValue}
                    />
                    <Button
                        type="primary"
                        className="case-search-submit"
                        onClick={this.searchCase}
                    >开始检索</Button>
                    <Button
                        type="primary"
                        className="case-search-submit"
                        onClick={this.searchCase}
                    >图表分析</Button>
                </div>
                <div className="search-bottom-content">
                    <span>已收录案例 75656730 篇，今日新增 89223 篇。</span>
                    <a href="">点我检索「天同码」，首次使用免费</a>
                </div>
            </React.Fragment>


        )
    }
}

export default CaseSearch