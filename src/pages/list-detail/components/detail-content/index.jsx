import React from 'react'
// import { List } from 'antd'
import './index.less'


class DetailContent extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    getBasicInfo = () => {
        const { resultData, caseData } = this.props
        const fayuanName = resultData.faYuan && resultData.faYuan.mingCheng
        const anyou = caseData.anYou && caseData.anYou[0] && caseData.anYou[0]['二级案由']

        return (
            <div className="info-title-content">
                <div className="content-clomn">
                    <div className="info-title-left">审理法院：</div>
                    <div className="info-title-right">{fayuanName}</div>
                </div>
                <div className="content-clomn">
                    <div className="info-title-left">案号：</div>
                    <div className="info-title-right">{caseData.anHao}</div>
                </div>
                <div className="content-clomn">
                    <div className="info-title-left">案件类型：</div>
                    <div className="info-title-right">{caseData.leiXing}</div>
                </div>
                <div className="content-clomn">
                    <div className="info-title-left">案由：</div>
                    <div className="info-title-right">{anyou}</div>
                </div>
                <div className="content-clomn">
                    <div className="info-title-left">法官：</div>
                    <div className="info-title-right">{resultData.shenPanZhang}</div>
                </div>
                <div className="content-clomn">
                    <div className="info-title-left">审理程序：</div>
                    <div className="info-title-right">{resultData.shenPanChengXu}</div>
                </div>
            </div>
        )
    }

    render() {
        const { resultData, caseData } = this.props

        return (
            <div className="detail-content-wrap">
               <div className="detail-content">
                   <div>
                        <div className="detail-title">
                            <h4>{caseData.mingCheng}</h4>
                        </div>
                        <div className="detail-des">
                            <div className="des-left">
                                <div>【关键词】</div>
                                <div>【文书来源】</div>
                            </div>
                            <div className="des-right">
                                <div>{resultData.guanJianZi ? resultData.guanJianZi.join(' / ') : '-'}</div>
                                <div>中国裁判文书网</div>
                            </div>
                        </div>
                        <div className="basic-info">
                            <div className="info-title">基本信息</div>
                            {
                                this.getBasicInfo()
                            }
                            <div className="info-title second-margin">文书正文</div>
                            <div className="info-title-content">
                                <div className="content-title">本院认为</div>
                                <div className="content-suggest">
                                    {resultData.liYou}
                                </div>
                                <div className="content-title">审判结果</div>
                                <div className="content-suggest">
                                    {resultData.panJueJieGuo}
                                </div>
                                <div className="content-title">审判人员</div>
                                <div className="content-suggest">
                                    {resultData.shenPanRenYuan}
                                </div>
                                <div className="content-title">书记员</div>
                                <div className="content-suggest">
                                    {resultData.shuJiYuan}
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}


export default DetailContent