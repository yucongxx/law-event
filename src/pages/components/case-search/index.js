import React from 'react'
import { Input } from 'antd'
import './index.less'

const { Search } = Input

class CaseSearch extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:''
        }
    }

    searchCase = () =>{
        let { inputValue } = this.state
        console.log(inputValue)
    }

    changeValue= (inputValue) =>{
        this.setState({
            inputValue:inputValue.target.value
        })
    }

    render(){
        let { inputValue } = this.state

        return(
            <div>
                <Search
                    placeholder="请输入搜索的内容"
                    enterButton="开始搜索"
                    className="case-search"
                    value={inputValue}
                    onChange={this.changeValue}
                    onSearch={this.searchCase}
                />
            </div>
          
        )
    }
}

export default CaseSearch