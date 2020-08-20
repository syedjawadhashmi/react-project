import React, { Component } from 'react';
import "./index.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Grid, Paper, Box, Typography, IconButton } from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import { Button } from "../../Component";
import { AccessTime, Add, Close, Theaters } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center" style={{ width: '100%' }}>
            <Box width="100%" style={{ width: '100%' }} mr={1}>
                <LinearProgress classes={{ barColorPrimary: 'bar-style' }} className={'bar-style'} variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography className={'white-text'} variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamPanel: false,
            member: false,
            value: 0,
            team: 0,
            progress: 20,
            progress1: 10
        }
    }

    componentWillReceiveProps(props, state) {
        if (state) {
            this.setState({ member: state.member })
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    transition = () => {
        this.setState({ teamPanel: !this.state.teamPanel })
        setTimeout(() => {
            this.setState({ member: !this.state.member })
            return
        }, 1000);
    }

    onClose = () => {
        this.setState({ teamPanel: false })
    }

    member = () => {
        return (
            <Grid item xs={12} md={4}>
                <Paper elevation={5} className={'paper request-paper'}>
                    <h4 className={'paper-heading'}>Members</h4>
                    {
                        [1, 2, 3, 4].map((item, index) => {
                            return (
                                <Paper elevation={5} style={{ marginBottom: 10 }} className={'paper'}>
                                    <Grid className={'request-inner'}>
                                        <img className={'logo-v'} src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                        <div item className={'heading-grid'}>
                                            <h6 className={'request-head'}>Member {item}</h6>
                                            <Grid item xs={12} className={'member-row'}>
                                                <p className={'request-subhead'}>Lorem ipsum dolor sit amet</p>
                                                <ArrowForwardIcon style={{ backgroundColor: '#F83B65' }} className={'request-order-arrow'} />
                                            </Grid>
                                            {
                                                item === 3 &&
                                                <p className={'invited'}>Invited</p>
                                            }
                                        </div>
                                    </Grid>
                                </Paper>
                            )
                        })
                    }
                </Paper>
                <Button onClick={() => console.log('')} icon={<Add className={'add-icon'} />} title="Add Member" />
            </Grid>
        )
    }
    edition = () => {
        return (
            <Grid item xs={12} md={12} style={{ width: '100%' }}>
                <Paper elevation={5} className={'paper edition'}>
                    <h4 className={'paper-heading'}>Face Edition </h4>
                    <Grid container justify="space-between">
                        <b>Studio Time:</b>
                        <p>60 hourly +</p>
                    </Grid>
                    <Grid container justify="space-between">
                        <b>Renews:</b>
                        <p>10 days</p>
                    </Grid>
                    <Grid container justify="space-between">
                        <b>Input:</b>
                        <p>2 +</p>
                    </Grid>
                    <Grid container justify="space-between">
                        <b>Pakages:</b>
                        <p>600 min</p>
                    </Grid>
                    <Grid container justify="space-between">
                        <b>Remarks:</b>
                        <p>never</p>
                    </Grid>
                </Paper>
            </Grid>
        )
    }

    selectedTeam = (item) => {
        const { team } = this.state;
        if (this.state.teamPanel === true && team === item) {
            this.setState({ team: 0, teamPanel: false })
        } else if (item !== team) {
            this.setState({ team: item })
        }
        else {
            this.setState({ teamPanel: true, team: item })
        }
    }

    render() {
        const { teamPanel, team, progress, progress1 } = this.state;
        return (
            <Grid container className="home">
                <Grid md={12} className="homeLeft">
                    <Collapse in={teamPanel} style={{ marginTop: teamPanel ? 30 : 0 }} className={'panel'}>
                        <Paper elevation={0} className={'main'}>
                            <Grid className={'close-div'}>
                                <h5 className={'collepse-head'}>{'Team ' + team}</h5>
                                <IconButton onClick={() => this.onClose()}>
                                    <Close className={'white-text close-icon'} />
                                </IconButton>
                            </Grid>
                            <Grid container spacing={3} className={'sections'}>
                                <Grid item xs={12} md={8} className={'welcomeGrid'}>
                                    <b className={'white-text'}>Description:</b>
                                    <p className={'normal-text-size white-text'}> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                    <Grid container>
                                        <AccessTime className={'arrow-icon'} /><p className={'white-text'}><b>Studio Time:</b> 43 (60)</p>
                                    </Grid>
                                    <Grid container>
                                        <div className={'linear-progress'}>
                                            <LinearProgressWithLabel className={'progress-bar'} value={progress} />
                                            <Add className={'white-text'} onClick={() => this.setState({ progress: this.state.progress >= 100 ? 100 : this.state.progress + 10 })} />
                                        </div>
                                    </Grid>
                                    <Grid container>
                                        <Theaters className={'arrow-icon'} /><p className={'white-text'}><b>Record strangth(km):</b> 5/30</p>
                                    </Grid>
                                    <Grid container>
                                        <div className={'linear-progress'}>
                                            <LinearProgressWithLabel className={'progress-bar'} value={progress1} />
                                            <Add className={'white-text'} onClick={() => this.setState({ progress1: this.state.progress1 >= 100 ? 100 : this.state.progress1 + 10 })} />
                                        </div>
                                    </Grid>

                                    <Grid container>
                                        <p className={'white-text'}><b>Members:</b> 4</p>
                                    </Grid>
                                    <Grid container>
                                        <p className={'white-text'}><b>Recordings:</b> 20</p>
                                    </Grid>
                                    {this.edition()}
                                </Grid>
                                {this.member()}
                            </Grid>
                        </Paper>
                    </Collapse>
                    <Grid className="headerInner">
                        {
                            [1, 2, 3, 4].map((item, index) => {
                                if (item > 3 && teamPanel) {
                                    return (
                                        <Grid className={`homeGrid ${item === team ? 'selected-team' : ''}`}>
                                            <Add className={'add-icon'} />
                                        </Grid>
                                    )
                                } else if (item > 1 && teamPanel) {
                                    return (
                                        <Grid className={`homeGrid ${item === team ? 'selected-team' : ''}`} onClick={() => this.selectedTeam(item)}>
                                            <img className="logo-v" src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                            <h5 className={'team'}>{'Team ' + (item)}</h5>
                                        </Grid>
                                    )
                                } else if (item === 1) {
                                    return (
                                        <Grid className={`homeGrid ${item === team ? 'selected-team' : ''}`} onClick={() => this.selectedTeam(item)}>
                                            <img className="logo-v" src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                            <h5 className={'team'}>{'Team ' + (item)}</h5>
                                        </Grid>
                                    )
                                }
                            })
                        }
                        <Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default (HomePage);