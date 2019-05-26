import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Huwaiza Tahir</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            • Finest in JAVA SE programming language I have done data structures and handled website back end
                            with java also
                            <br/>
                            • Effective in debugging and good at logic building
                            <br/>
                            • Currently working in AI and robotics project in ROS Melodic
                            <br/>
                            • Execution of many projects in university like Railway management system, game
                              in JAVA Android Development is also my keen interest.
                            <br/>
                            • Command in SQL and My SQL databases
                            <br/>
                            • Learning React JS and Node JS
                            <br/>
                            • Hands on experience in Arduino
                            <br/>
                            • Working on Project in Unity Development in C sharp
                            <br/>
                            • Experience in Software engineering Diagrams and tools
                            <br/>
                            • Enrolled in graphics designing and freelancing course on digiskills.pk

                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Green Town, Lahore Pakistan</p>
                        <h5>Phone</h5>
                        <p>(+92) 332-6643730</p>
                        <h5>Email</h5>
                        <p>muhammadhuwaiza@gmail.com</p>
                        <h5>Web</h5>
                        <a href="http://www.huwaizatahir.cf" rel ="noopener noreferrer" target="_blank">www.huwaizatahir.cf</a>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2016}
                            endYear={2020}
                            schoolName="COMSATS Lahore"
                            schoolDescription="Currently i am doing BS(CS) from one of the best Pakistan IT university, have done intermediate in Pre-engineering Doing Cs is best thing happened the exposure i got is wonderful knowing thick and thin of computer has widen my horizon."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear={2017}
                            jobName="Internship Experience"
                            jobDescription="Getting work is not a easy that's why doing freelancing was not enough, getting the experience of industry was the most helpful thing for me. More exposure the better it is"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="java SE"
                            progress={75}
                        />
                        <Skills
                            skill="javascript"
                            progress={70}
                        />
                        <Skills
                            skill="Unity"
                            progress={55}
                        />
                        <Skills
                            skill="Laravel"
                            progress={70}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills
                            skill="SQl"
                            progress={65}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={45}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
