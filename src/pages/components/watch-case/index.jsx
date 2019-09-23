import React from 'react'
import { Tabs, Icon } from 'antd'
import './index.less'

const { TabPane } = Tabs;

const tabCaseList = [
    {

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