import React from 'react'
import { Tabs } from 'antd'
import CaseSearch from '../../../components/case-search'
import './index.less'

const { TabPane } = Tabs

const tabList = [
    {
        key:'1',
        name:'案例',
        children:props => <CaseSearch {...props}/>
    },
    {
        key:'2',
        name:'法规'
    },
    {
        key:'3',
        name:'律师'
    },
    {
        key:'4',
        name:'知识'
    },
    {
        key:'5',
        name:'请教'
    }
]

class Content extends React.Component{
    constructor(){
        super()
        this.state = {
            activeKey:'1'
        }
    }

    tabChange = () => {

    }

    onSearch = () => {

    }

    render(){
        return (
            <div className="content-body">
                <div className="first-content">
                    <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                        {
                            tabList.map(res => (
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
            </div>
        )
    }
}


export default Content