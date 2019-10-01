import React from 'react'
import { Tabs } from 'antd'
import logoSrc from '../../../common/assets/img/logo.png'
import './index.less'



class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            rightList:[
                {
                    key:'1',
                },
                {
                    key:'2',
                  
                },
                {
                    key:'3',
                  
                },
                {
                    key:'4',
                  
                },
            ]
        }
    }

    getlinkRightList = (data) => {

        return data.map((item,index) => {
            return (
                <div className="list">
                    <div className="title">公司介绍</div>
                    <div className="link">
                        <a href="">关于案读</a>
                    </div>
                    <div className="link">
                        <a href="">媒体报道</a>
                    </div>
                    <div className="link">
                        <a href="">工作机会</a>
                    </div>
                </div>
            )
        })
       
    }

    render(){
        const { rightList } = this.state

        return (
            <div className="footer-wrap">
               <div className="footer-content">
                   <div className="link-container">
                        <div className="link-left">
                            <img className="logo" src={logoSrc} />
                            <div>更聪明的检索工具</div>
                        </div>
                        <div className="link-right">
                            {
                                this.getlinkRightList(rightList)
                            }
                          
                        </div>
                   </div>
                   <div className="bottom">
                       <div className="friend-links">
                           友情链接：
                            <div className="friend-link">
                                <a href="">中国裁判书网</a>
                            </div>
                            <div className="friend-link">
                                <a href="">最高人民法院</a>
                            </div>
                            <div className="friend-link">
                                <a href="">百获网</a>
                            </div>
                       </div>
                       <div className="copy-right">

                       </div>
                   </div>
               </div>
            </div>
        )
    }
}


export default Footer