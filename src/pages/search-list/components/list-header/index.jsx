import React from 'react';
import { Select, Input, Avatar } from 'antd';
import headLogo from '../../../common/assets/img/logo.png'
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
            isLogin:false
        }
    }

    componentDidMount(){
        getLoginInfo().then(res=> {
            console.log('res',res)
            if(res.data.data){
                this.setState({
                    isLogin:true,
                    userName:res.data.data.name
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

    render(){
        const { isLogin } = this.state
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
                        <Option value="2">律师</Option>
                        <Option value="3">法规</Option>
                        <Option value="4">知识</Option>
                        <Option value="5">请教</Option>
                    </Select>
                    <Search
                        placeholder="请搜索输入内容"
                        enterButton="搜索"
                        onSearch={(value) =>this.contentSearch(value)}
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
                            <span>案读</span>
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