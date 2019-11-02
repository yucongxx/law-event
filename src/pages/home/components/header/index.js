import React from 'react';
import {Icon, Avatar} from 'antd';
import { withRouter } from 'react-router'
import { getLoginInfo } from '../../../../common/utils/http'
import './index.less'

const imgSrc = {
    logo:require('../../../common/assets/img/logo.png')
}

@withRouter
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin:false,
            userName:''
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

    login = () => {
        window.location.href = 'http://www.goingai.com/api/oauth2/authorization/weixin'
    }

    render(){
        const { isLogin, userName } = this.state
        console.log(userName)
        return (
            <div className="header">
                <div className="header-left">
                    <div className="logo">
                        <img src={imgSrc.logo} alt="" />
                    </div>
                    <div className="location">
                        <Icon type="environment" theme="filled"/>
                        <span>北京</span>
                    </div>
                    <div className="products">
                        <a href="" target="_blank">企业服务</a>
                        <a href="" target="_blank">异地查档</a>
                        <a href="" target="_blank">案例APP</a>
                    </div>
                </div>
                <div className="header-right">
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


export default Header;