import React from 'react'
import { List } from 'antd'
import './index.less'


class ListContent extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        const { searchResult, totalElementCount, onEvent } = this.props

        return (
            <div className="list-content-wrap">
                <div className="list-content-result">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                onEvent('changePage',page)
                            },
                            pageSize: 10,
                            total:totalElementCount
                        }}
                        bordered
                        dataSource={searchResult}
                        renderItem={(item,index) => (
                            <List.Item
                                key={index}
                            >
                                <div className="title" onClick={() => onEvent('jumpDetail',item)}>
                                    {item.anJianMingCheng}
                                </div>
                                <div className="info">
                                    <span>{item.faYuanMingCheng}</span>
                                    <span>{item.anHao}</span>
                                    <span>{item.faBuRiQi}</span>
                                </div>
                                {/* <div className="keywords">
                                    <span>【关键词】</span>
                                    <span>侵权行为</span>
                                </div> */}
                                {/* <div className="court-advice">
                                    <span>【法院观点】</span>
                                    <div dangerouslySetInnerHTML={{__html:item.courtViewpoint}}></div>
                                </div> */}
                                <div className="result-bingo">
                                <span>【判决结果】</span>
                                    <div>{item.panJueJieGuo}</div>    
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}


export default ListContent