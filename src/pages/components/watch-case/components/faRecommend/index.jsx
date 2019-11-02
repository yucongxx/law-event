import React from 'react'
import { Tabs, Icon, Button } from 'antd'
import './index.less'

class FaRecommend extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listArr:[
                {
                    key:1
                },
                {
                    key:2
                },
                {
                    key:3
                },
                {
                    key:4
                },
                {
                    key:5
                }
            ]
        }
    }

    getRecommendCase = (data) => {

        return data.map((item,index) => {
            return (
                <div className="recommend-case" key={index}>
                    <div className="case-left">
                        <p className="case-title">
                            <a href="">原告泉州海日星工艺美术有限公司诉被告中荷（上海）货运代理有限公司厦门分公司海上货运代理...</a>
                        </p>
                        <div className="case-params">
                            <span>厦门海事法院</span>
                            <span>（2014）厦海法商初字第27号</span>
                            <span>2014-03-20</span>
                        </div>
                        <div className="case-keywords">
                            <span>【关键词】</span>
                            <span>货运代理合同</span>
                        </div>
                    </div>
                    <div className="case-right">
                        <div className="attribute-tag">
                            <span>民事</span>
                        </div>
                        <div className="attribute-tag">
                            <span>一审</span>
                        </div>
                        <div className="attribute-tag">
                            <span>判决</span>
                        </div>
                    </div>
                </div>
            )
        })

        
    }

    render(){
        const { listArr } = this.state

        return(
            <div className="recommend-case-wrap">
               <div className="recommend-case-content">
                  {
                      this.getRecommendCase(listArr)
                  }
                  <div className="footer-change-btn">
                    <Button type="primary" >换一换</Button>
                  </div>
               </div>
            </div>
        )
    }
}

export default FaRecommend