import React from 'react';
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import './index.less'


class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page">
                <div className="home-header">
                    <Header />
                </div>
                <div className="home-content">
                    <Content />
                </div>
                <div className="home-footer">
                    <Footer />
                </div>
            </div>
        )
    }
}


export default HomePage;