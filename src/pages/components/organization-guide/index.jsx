import React from 'react'
import { Tabs, Icon } from 'antd'
import Court from './components/court'
import './index.less'

const { TabPane } = Tabs;

const tabCaseList = [
    {
        key:'1',
        name:'法院',
        children:props => <Court {...props}/>
    }
]

class OrganizationGuide extends React.Component{
    render(){
        return(
            <div className="organization-guide-tab-wrap">
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

export default OrganizationGuide