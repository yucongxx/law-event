import React from 'react';
import ListHeader from './components/list-header'
import ListContent from './components/list-content'
import './index.less'


class SearchList extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <div className="search-list-wrap">
              <div className="search-list-header">
                    <ListHeader />
              </div>
              <div className="search-list-content">
                    <ListContent />
              </div>
            </div>
        )
    }
}


export default SearchList