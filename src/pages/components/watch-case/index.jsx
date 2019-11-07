import React from 'react'
import { Tabs, Icon } from 'antd'
import FaRecommend from './components/faRecommend'
import './index.less'

const { TabPane } = Tabs;

const tabCaseList = [
    {
        key:'1',
        name:'viewcount最多的案例',
        children:props => <FaRecommend {...props}/>
    },
    {
        key:'2',
        name:'法院最新'
    },
    {
        key:'3',
        name:'指导案例'
    },
    {
        key:'4',
        name:'公报案例'
    }
]

class WatchCase extends React.Component{
    render(){
        return(
            <div className="watch-case-tab-wrap">
                <Tabs defaultActiveKey="1">
                    {
                        tabCaseList.map(res => (
                            <TabPane tab={res.name} key={res.key} className="default" >
                                {res.children && res.children({
                                    onSearch: this.onSearch,
                                    // triangleIcon: true,
                                    // form: this.props.form
                                })}
                            </TabPane>
                        ))
                    }
                </Tabs>

            </div>
        )
    }
}

export default WatchCase