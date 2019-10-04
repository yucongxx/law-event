import React from 'react'
import { List, Avatar, Icon } from 'antd'
import './index.less'


const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: '',
        title: `冰锐实业（广东）有限公司与海南椰岛（集团）股份有限公司、文昌市椰岛实业有限公司等侵害商标权纠纷管辖民事裁定书 ${i}`,
        description:
            '本院认为，海南椰岛公司以文昌椰岛公司、朱兴忠、基正公司、韦廷建、冰锐公司、韦廷希为被告提起本案诉讼，主张上述被告共同侵害商标权，且文昌椰岛公司、朱兴忠生产加工侵权产品。因此根据海南椰岛公司的诉讼主张，...',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}


class ListContent extends React.Component {
    render() {

        return (
            <div className="list-content-wrap">
                <div className="list-content-result">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        bordered
                        dataSource={listData}
                        renderItem={item => (
                            <List.Item
                                key={item.title}
                            >
                                <div className="title">
                                    <a href={item.href}>
                                        {item.title}
                                    </a>
                                </div>
                                <div className="info">
                                    <span>海南省高级人民法院</span>
                                    <span>(2017）琼民辖终31号之一</span>
                                </div>
                                <div className="keywords">
                                    <span>【关键词】</span>
                                    <span>侵权行为</span>
                                </div>
                                <div className="court-advice">
                                    <span>【法院观点】</span>
                                    <div>本院认为，海南椰岛公司以文昌椰岛公司、朱兴忠、基正公司、韦廷建、冰锐公司、韦廷希为被告提起本案诉讼，主张上述被告共同侵害商标权，且文昌椰岛公司、朱兴忠生产加工侵权产品。因此根据海南椰岛公司的诉讼主张1111111111111</div>
                                </div>
                                <div className="result-bingo">
                                <span>【结果命中】</span>
                                    <div>联合公司向一审法院起诉请求：1、判令陈琼兴立即搬离海口市盐灶一横路2号（原地址盐灶一横路46号）平-107号房；2、判令陈琼兴向联合公司支付自2013年9月至2016年5月房租每平方米15元、每月1020</div>    
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