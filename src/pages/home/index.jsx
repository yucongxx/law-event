import React from 'react';
import Header from './components/header'



class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page">
                <div className="header">
                    <Header />
                </div>
            </div>
        )
    }
}


export default HomePage;