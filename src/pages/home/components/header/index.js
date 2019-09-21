import React from 'react';
import {Icon} from 'antd';
import './index.less'

const imgSrc = {
    logo:require('../../../common/assets/img/logo.png')
}

class Header extends React.Component{
    render(){
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
                    <div className="login-btn">登录</div>
                    <div className="register-btn">注册</div>
                </div>
            </div>
        )
    }
}


export default Header;