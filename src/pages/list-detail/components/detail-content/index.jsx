import React from 'react'
import { List } from 'antd'
import './index.less'


class DetailContent extends React.Component {
    // constructor(props){
    //     super(props)
    // }


    render() {

        return (
            <div className="detail-content-wrap">
               <div className="detail-content">
                   <div>
                        <div className="detail-title">
                            <h4>巴彦淖尔市宝丰源小额贷款有限责任公司与孙守军、刘某等民间借贷纠纷一审民事判决书</h4>
                        </div>
                        <div className="detail-des">
                            <div className="des-left">
                                <div>【关键词】</div>
                                <div>【文书来源】</div>
                            </div>
                            <div className="des-right">
                                <div>民间借贷</div>
                                <div>中国裁判文书网</div>
                            </div>
                        </div>
                        <div className="basic-info">
                            <div className="info-title">基本信息</div>
                            <div className="info-title-content">
                              <div className="content-clomn">
                                <div className="info-title-left">审理法院：</div>
                                <div className="info-title-right">临河区人民法院11111111111111111111111111111111111111111111111</div>
                              </div>
                               <div className="content-clomn">
                                    <div className="info-title-left">案号：</div>
                                    <div className="info-title-right">临河区人民法院</div>
                               </div>
                               <div className="content-clomn">
                                    <div className="info-title-left">案件类型：</div>
                                    <div className="info-title-right">临河区人民法院</div>
                               </div>
                                <div className="content-clomn">
                                    <div className="info-title-left">案由：</div>
                                    <div className="info-title-right">临河区人民法院</div>
                                </div>
                                <div className="content-clomn">
                                    <div className="info-title-left">法官：</div>
                                    <div className="info-title-right">临河区人民法院</div>
                                </div>
                                <div className="content-clomn">
                                    <div className="info-title-left">审理程序：</div>
                                    <div className="info-title-right">临河区人民法院</div>
                                </div>
                            </div>
                            <div className="info-title second-margin">文书正文</div>
                            <div className="info-title-content">
                                <div className="content-title">当事人信息</div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}


export default DetailContent