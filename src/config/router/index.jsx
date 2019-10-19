import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../../pages/home'
import SearchLsit from '../../pages/search-list'
import ListDetail from '../../pages/list-detail'

function render() {
    return (
        <React.Fragment>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/search-list' component={SearchLsit}></Route>
            <Route exact path='/list-detail' component={ListDetail}></Route>
        </React.Fragment>
     
       
    )
}

export default render();
