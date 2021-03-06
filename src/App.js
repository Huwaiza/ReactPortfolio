import React from 'react';
import './App.css';
import Main from './components/main';
import {Layout , Header ,Navigation , Drawer,Content } from 'react-mdl';
import {Link} from 'react-router-dom';

function App() {
  return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>} scroll>
                    <Navigation>
                        <Link  to="/resume">Resume</Link>
                        <Link  to="/projects">Projects</Link>
                        <Link  to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
                    <Navigation>
                        <Link  to="/resume">Resume</Link>
                        <Link  to="/projects">Projects</Link>
                        <Link  to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
  );
}

export default App;
