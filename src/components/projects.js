import React ,{ Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div>
                    <div className="projects-grid">
                        <Cell col={4}>
                            {/* Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                                <CardText>
                                    This is my React first personal portfolio Website made in React environment, with React MDN
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                    <Button colored>CodePen</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* Project 2 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
                                <CardText>
                                    This is my React first personal portfolio Website made in React environment, with React MDN
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                    <Button colored>CodePen</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* Project 3 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
                                <CardText>
                                    This is my React first personal portfolio Website made in React environment, with React MDN
                                </CardText>
                                <CardActions border>
                                    <Button colored>GitHub</Button>
                                    <Button colored>CodePen</Button>
                                    <Button colored>Live Demo</Button>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </div>
                    <div className="projects-grid">
                        {/*Add more projects*/}
                    </div>
                </div>
            );
        }
        else if(this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Unity</h1>
                </div>
            );
        }
        else if(this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is JAVA SE</h1>
                </div>
            );
        }
        else if(this.state.activeTab === 3) {
            return (
                <div>
                    <h1>This is Laravel</h1>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Unity</Tab>
                    <Tab>JAVA SE</Tab>
                    <Tab>Laravel</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;