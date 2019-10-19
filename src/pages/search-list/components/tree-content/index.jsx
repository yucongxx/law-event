import React from 'react'
import { Tree } from 'antd'
import isEmpty from 'lodash/isEmpty'
import './index.less'

const { TreeNode } = Tree

class TreeList extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    getTreeList = (data) => {
        let dataList = []

        for(let key in data){
            dataList.push (
                <TreeNode title={key} className="tree-list-content">
                    {
                        !isEmpty(data[key]) && data[key].map((item, index) => {

                            return (
                                <TreeNode title={item}></TreeNode>
                            )
                        })
                    }
                </TreeNode>
            )
        }

        return dataList
    }


    render() {
        const { filterOptions } = this.props
        // console.log(filterOptions)

        return (
            <div className="tree-list-wrap">
                {
                    !isEmpty(filterOptions) &&
                    <Tree 
                        defaultExpandAll
                    >
                        {
                            this.getTreeList(filterOptions)
                        }
                    </Tree>
                }
              
            </div>
        )
    }
}


export default TreeList