import React from 'react'
// import { List } from 'antd'
import './index.less'


class DetailContent extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    getBasicInfo = () => {
        const { resultData } = this.props
        let baseInfo = resultData["基本信息"]
        let baseArr = []
        for(let key in baseInfo){
            baseArr.push({
                key,
                content:baseInfo[key]
            })
        }

        return baseArr && baseArr.map((item,index) => {
            return (
                <div className="info-title-content" key={index}>
                    <div className="content-clomn">
                        <div className="info-title-left">{item.key}: </div>
                        <div className="info-title-right">{item.content}</div>
                    </div>
                </div>
            )
        })
       
    }

    getWritContent = () => {
        const { resultData } = this.props
        let baseInfo = resultData["文书正文"]
        let baseArr = []
        for(let key in baseInfo){
            baseArr.push({
                key,
                content:baseInfo[key]
            })
        }

        return baseArr && baseArr.map((item,index) => {

            return (
                <React.Fragment key={index}>
                    <div className="content-title">{item.key}</div>
                    <div className="content-suggest">
                    &nbsp;&nbsp;{item.content.join('\n')}
                    </div>
                   
                </React.Fragment>
            )
        })
    }

    render() {
        const { resultData, caseTitle, keyWords } = this.props

        return (
            <div className="detail-content-wrap">
               <div className="detail-content">
                   <div>
                        <div className="detail-title">
                            <h4>{caseTitle}</h4>
                        </div>
                        <div className="detail-des">
                            <div className="des-left">
                                <div>【关键词】</div>
                                <div>【文书来源】</div>
                            </div>
                            <div className="des-right">
                                <div>{keyWords ? keyWords.join(' / ') : '-'}</div>
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
                                {
                                    this.getWritContent()
                                }
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}


export default DetailContent