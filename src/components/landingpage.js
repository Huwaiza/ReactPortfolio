import React ,{ Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render() {
        return (
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png "
                            alt="Avatar" className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p className="p1">Unity | Laravel | JAVA SE | C++ | React Js | Node Js | Express JS| HTML/CSS | Bootstrap | SQL </p>
                            <p className="p2">Machine Learing (Python) | MongoDB</p>
                            <div className="social-links">
                                {/*Linked inn*/}
                                <a href="https://pk.linkedin.com/in/huwaiza-tahir-80092a147" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/*Github*/}
                                <a href="https://github.com/Huwaiza" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                {/*Upwork*/}
                                <a href="https://www.upwork.com/freelancers/~017561727b75f6aed8" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-link" aria-hidden="true"/>
                                </a>

                                {/*youtube*/}
                                <a href="https://www.youtube.com/channel/UCixuJgxwcZgCvqMvJgWN49w?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;