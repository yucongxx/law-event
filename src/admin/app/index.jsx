import React from 'react'
import { withRouter } from 'react-router'
import router from '../../config/router'


@withRouter
class App extends React.Component{

    render() {
        return (
            <div className="app">
                {router}
            </div>
        )
    }
}

export default App