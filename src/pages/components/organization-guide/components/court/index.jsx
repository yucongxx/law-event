import React from 'react'
import { Tabs, Icon, Button } from 'antd'
import './index.less'

class Court extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listArr: [
                {
                    key: 1
                },
                {
                    key: 2
                },
                {
                    key: 3
                },
                {
                    key: 4
                },
                {
                    key: 5
                },
                {
                    key: 6
                },
                {
                    key: 7
                },
                {
                    key: 8
                },
                {
                    key: 9
                }
            ]
        }
    }

    getCourtListContent = (data) => {
        return data.map((item, index) => {
            return (
                <div className="court-list-content" key={index}>
                    <div className="list-title">
                        最高人民法院
                    </div>
                    <ul className="list-basic-info">
                        <li>
                            <span title="地址：北京市东城区东交民巷27号">地址：北京市东城区东交民巷27号</span>
                        </li>
                        <li>
                            <span title="邮编：100745">邮编：100745</span>
                        </li>
                        <li>
                            <span title="联系方式：010-85120527">联系方式：010-85120527</span>
                        </li>
                        <li>
                            <span>
                                网址：
                                <a href="http://www.court.gov.cn">http://www.court.gov.cn</a>
                            </span>
                        </li>
                    </ul>
                </div>
            )
        })
    }


    render() {
        const { listArr } = this.state

        return (
            <div className="court-list-wrap">
               <div className="court-list">
                {
                    this.getCourtListContent(listArr)
                }
               </div>
            </div>
        )
    }
}

export default Court