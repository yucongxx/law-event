import React from 'react';
import { Select, Input, Avatar } from 'antd';
import headLogo from '../../../common/assets/img/logo.png'
import queryString from 'query-string'
import { getLoginInfo } from '../../../../common/utils/http'
import { withRouter } from 'react-router'
import './index.less'

const { Option } = Select;
const { Search } = Input;

@withRouter
class ListHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue:'',
            isLogin:false,
            userName:''
        }
    }

    componentDidMount(){
        let { location:{ search } } = this.props
        const parseObj = queryString.parse(search)
        this.setState({
            inputValue:parseObj.inputValue
        })

        getLoginInfo().then(res=> {
            console.log('res',res)
            if(res.data.data){
                this.setState({
                    isLogin:true,
                    userName:res.data.data.nickname
                })
                localStorage.setItem('loginInfo',true)
            }
        })
    }

    contentSearch = (value) => {
        const { onEvent } = this.props
        onEvent('contentListSearch',value)
    }

    goHome = () => {
        this.props.history.push('/')
    }

    login = () => {
        window.location.href = 'http://www.goingai.com/api/oauth2/authorization/weixin'
    }

    changeValue = (e) =>{
        console.log(e)
        this.setState({
            inputValue:e.target.value
        })
    }

    render(){
        const { isLogin, userName, inputValue } = this.state
        const { searchValue } = this.props
        return(
            <div className="list-header">
                <div className="header-logo">
                    <a href="" onClick={this.goHome}>
                        <img src={headLogo}></img>
                    </a>
                </div>
                <div className="header-search">
                    <Select defaultValue="1" style={{ width: 120 }}>
                        <Option value="1">案例</Option>
                        {/* <Option value="2">律师</Option>
                        <Option value="3">法规</Option>
                        <Option value="4">知识</Option>
                        <Option value="5">请教</Option> */}
                    </Select>
                    <Search
                        placeholder="请搜索输入内容"
                        enterButton="搜索"
                        onSearch={(value) =>this.contentSearch(value)}
                        value={inputValue}
                        onChange={this.changeValue}
                    />
                </div>
                <div className="header-right">
                    {/* <div 
                        className="login-btn"
                        onClick={this.login}
                    >登录</div> */}
                    {
                        !isLogin ?
                        <div 
                            className="login-btn"
                            onClick={this.login}
                        >登录</div>
                        :
                       <div className="logined-status">
                            <span>{userName}</span>
                            <Avatar icon="user" />
                       </div>
                    }
                    {/* <div className="register-btn">注册</div> */}
                </div>
            </div>
        )
    }
}


export default ListHeader