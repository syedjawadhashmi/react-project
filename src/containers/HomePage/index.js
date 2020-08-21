import React, { Component } from 'react';
import "./index.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Grid, Paper, Box, Typography, IconButton, Dialog, DialogTitle, InputLabel, Select, MenuItem, FormControl, Button as MaterialButton, Avatar } from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import { Button, Input } from "../../Component";
import { AccessTime, Add, Close, Theaters } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';
import { SketchPicker } from 'react-color'

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
            add: false,
            value: 0,
            index: 0,
            team: 0,
            progress: 20,
            progress1: 10,
            addMemberModal: false,
            addTeamModal: false,
            email: '',
            role: 'Member',
            teamname: '',
            description: '',
            color: '',
            displayColorPicker: false,
            color: "#000",
            mode: 0,
            teamList: [
                {
                    name: 'Team 1',
                    description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
                    color: '#F83B65',
                    studioTime: 20,
                    recordStrangth: 40,
                    member: [
                        {
                            email: 'Member1@gmail.com',
                            role: 'Member',
                            invited: false
                        },
                        {
                            email: 'Admin@gmail.com',
                            role: 'Admin',
                            invited: false
                        },
                        {
                            email: 'Member1@gmail.com',
                            role: 'Member',
                            invited: true
                        },
                    ]
                },
                {
                    name: 'Team 2',
                    description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century.",
                    color: '#f18e8d',
                    studioTime: 30,
                    recordStrangth: 50,
                    member: [
                        {
                            email: 'Member3@gmail.com',
                            role: 'Member',
                            invited: false
                        },
                        {
                            email: 'Admin1@gmail.com',
                            role: 'Admin',
                            invited: false
                        },
                        {
                            email: 'Member4@gmail.com',
                            role: 'Member',
                            invited: true
                        },
                    ]
                },
                {
                    name: 'Team 3',
                    description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's ",
                    color: '#0f4c81',
                    studioTime: 40,
                    recordStrangth: 10,
                    member: [
                        {
                            email: 'Member11@gmail.com',
                            role: 'Member',
                            invited: false
                        },
                        {
                            email: 'Admin12@gmail.com',
                            role: 'Admin',
                            invited: false
                        },
                        {
                            email: 'Member21@gmail.com',
                            role: 'Member',
                            invited: true
                        },
                    ]
                },
            ]
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

    handleChangeState = (event, newValue) => {
        this.setState({ [event]: newValue });
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

    member = (members) => {
        return (
            <Grid item xs={12} md={4}>
                <Paper elevation={5} className={'paper request-paper'}>
                    <h4 className={'paper-heading'}>Members</h4>
                    {
                        members.map((item, index) => {
                            return (
                                <Paper elevation={5} style={{ marginBottom: 10 }} className={'paper'}>
                                    <Grid className={'request-inner'}>
                                        <img className={'logo-v'} src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                        <div item className={'heading-grid'}>
                                            <h6 className={'request-head'}>{item.email}</h6>
                                            <Grid item xs={12} className={'member-row'}>
                                                <p className={'request-subhead'}>{item.role}</p>
                                                <ArrowForwardIcon style={{ backgroundColor: '#F83B65' }} className={'request-order-arrow'} />
                                            </Grid>
                                            <p className={'invited'}>{item.invited && 'Invited'}</p>
                                        </div>
                                    </Grid>
                                </Paper>
                            )
                        })
                    }
                </Paper>
                <Button onClick={() => this.setState({ addMemberModal: true })} icon={<Add className={'add-icon'} />} title="Add Member" />
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

    selectedTeam = (item, index) => {
        const { team } = this.state;
        if (this.state.teamPanel === true && team === index + 1) {
            this.setState({ team: 0, teamPanel: false, index: index, add: false })
        } else if (index + 1 !== team) {
            this.setState({ team: index + 1, index: index, add: false })
        }
        else {
            this.setState({ teamPanel: true, team: index + 1, index: index, add: false })
        }
    }

    componentDidUpdate(props, state) {

        const { teamList, index, add } = this.state;
        const TeamList = teamList.length && teamList[index]
        if (state.progress !== TeamList.studioTime && !add) {
            this.setState({ progress: TeamList.studioTime, progress1: TeamList.recordStrangth })
        }

    }

    handleClose = (type) => {
        this.setState({ [type]: false })
    }

    addMember = () => {
        const { index, teamList, email, role } = this.state;
        teamList[index].member.push({ email: email, role: role, invited: true })
        this.setState({
            teamList: teamList,
            addMemberModal: false,
            email: '',
            role: 'Member'
        })
    }

    addTeam = () => {
        const { index, teamList, teamname, description, color, mode } = this.state;
        if (mode === 1) {
            const TeamList = teamList.length && teamList[index]
            TeamList.name = teamname;
            TeamList.description = description;
            TeamList.color = color;
            teamList[index] = TeamList
            this.setState({
                teamList: teamList, mode: 0,
                addTeamModal: false,
                teamname: '',
                description: '',
                color: '#000'
            })
        } else {
            teamList.push({
                name: teamname, description: description, color: color, studioTime: 10, recordStrangth: 20, member: [{
                    email: 'Admin@gmail.com',
                    role: 'Admin',
                    invited: false
                },]
            })
            this.setState({
                teamList: teamList,
                addTeamModal: false,
                teamname: '',
                description: '',
                color: '#000'
            })
        }
    }

    handleClickColor = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleCloseColor = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChangeColor = (color) => {
        this.setState({ color: color.hex })
    };

    teamEdit = (team) => {
        this.setState({
            teamname: team.name,
            description: team.description,
            color: team.color,
            addTeamModal: true,
            mode: 1
        })

    }

    render() {
        const { teamPanel, team, progress, progress1, teamList, index, addMemberModal, email, role, addTeamModal, teamname, description } = this.state;
        const TeamList = teamList.length && teamList[index]
        return (
            <Grid container className="home">
                <Grid md={12} className="homeLeft">
                    <Collapse in={teamPanel} style={{ marginTop: teamPanel ? 30 : 0 }} className={'panel'}>
                        <Paper elevation={0} className={'main'}>
                            <Grid className={'close-div'}>
                                <h5 className={'collepse-head'}>{TeamList.name}</h5>
                                <Grid className={'settings'}>
                                    <Button white={true} title="Settings" onClick={() => this.teamEdit(TeamList)} />
                                    <IconButton onClick={() => this.onClose()}>
                                        <Close className={'white-text close-icon'} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container spacing={3} className={'sections'}>
                                <Grid item xs={12} md={8} className={'welcomeGrid'}>
                                    <b className={'white-text'}>Description:</b>
                                    <p className={'normal-text-size white-text'}>{TeamList.description}</p>
                                    <Grid container>
                                        <AccessTime className={'arrow-icon'} /><p className={'white-text'}><b>Studio Time:</b> 43 (60)</p>
                                    </Grid>
                                    <Grid container>
                                        <div className={'linear-progress'}>
                                            <LinearProgressWithLabel className={'progress-bar'} value={progress} />
                                            <Add className={'white-text'} onClick={() => this.setState({ progress: this.state.progress >= 100 ? 100 : this.state.progress + 10, add: true })} />
                                        </div>
                                    </Grid>
                                    <Grid container>
                                        <Theaters className={'arrow-icon'} /><p className={'white-text'}><b>Record strangth(km):</b> 5/30</p>
                                    </Grid>
                                    <Grid container>
                                        <div className={'linear-progress'}>
                                            <LinearProgressWithLabel className={'progress-bar'} value={progress1} />
                                            <Add className={'white-text'} onClick={() => this.setState({ progress1: this.state.progress1 >= 100 ? 100 : this.state.progress1 + 10, add: true })} />
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
                                {this.member(TeamList.member)}
                            </Grid>
                        </Paper>
                    </Collapse>
                    <Grid className="headerInner">
                        {
                            teamList.map((item, index) => {
                                if (index > 0 && index < 5 && teamPanel) {
                                    return (
                                        <Grid className={`homeGrid ${index + 1 === team ? 'selected-team' : ''}`} style={{ backgroundColor: item.color }} onClick={() => this.selectedTeam(item, index)}>
                                            <img className="logo-v" src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                            <h5 className={'team'}>{item.name}</h5>
                                        </Grid>
                                    )
                                } else if (index === 0) {
                                    return (
                                        <Grid className={`homeGrid ${index + 1 === team ? 'selected-team' : ''}`} style={{ backgroundColor: item.color }} onClick={() => this.selectedTeam(item, index)}>
                                            <img className="logo-v" src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                            <h5 className={'team'}>{item.name}</h5>
                                        </Grid>
                                    )
                                }

                            })
                        }
                        {
                            teamPanel &&
                            <Grid
                                className={`homeGrid`}
                                style={{ backgroundColor: '#F83B65' }}
                                onClick={() => this.setState({ addTeamModal: true })}
                            >
                                <Add className={'add-icon'} />
                            </Grid>
                        }
                        <Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog
                    fullWidth={true}
                    maxWidth={'sm'}
                    onClose={() => this.handleClose('addMemberModal')} aria-labelledby="simple-dialog-title" open={addMemberModal}>
                    <DialogTitle id="simple-dialog-title">Add Members</DialogTitle>
                    <Grid xs={12} className={'addMemberDialog'}>
                        <Input
                            placeholder="Email"
                            name={'email'}
                            value={email}
                            onChange={this.handleChangeState}
                        />
                        <FormControl variant="outlined" className={'formControl'}>
                            <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={role}
                                onChange={(event) => this.handleChangeState('role', event.target.value)}
                                label="Role"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Member">Member</MenuItem>
                                <MenuItem value="Admin">Admin</MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={() => this.addMember()} title="Add Member" />
                    </Grid>
                </Dialog>
                <Dialog
                    fullWidth={true}
                    maxWidth={'sm'}
                    onClose={() => this.handleClose('addTeamModal')} aria-labelledby="simple-dialog-title" open={addTeamModal}>
                    <DialogTitle id="simple-dialog-title">Add Team</DialogTitle>
                    <Grid xs={12} className={'addMemberDialog'}>
                        <Input
                            placeholder="Team Name"
                            name={'teamname'}
                            value={teamname}
                            onChange={this.handleChangeState}
                        />
                        <Input
                            placeholder="Description"
                            name={'description'}
                            value={description}
                            onChange={this.handleChangeState}
                        />
                        <div className={'colorDiv'}>
                            <span className={'colorText'}>Select a color</span>
                            <div className={'swatch'} onClick={this.handleClickColor}>
                                <div className={'color'} style={{ background: this.state.color }} />
                            </div>
                            {this.state.displayColorPicker ? <div className={'popover'}>
                                <div className={'cover'} onClick={this.handleCloseColor} />
                                <SketchPicker color={this.state.color} onChange={this.handleChangeColor} />
                            </div> : null}

                        </div>
                        <Grid className={'iconGrid'}>
                            <Avatar alt="Remy Sharp" style={{ width: 100, height: 100, marginRight: 20, marginLeft: 20 }} src={this.state.icon} />
                            <React.Fragment>
                                <input
                                    accept="image/*"
                                    className={'input'}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    type="file"
                                // onChange={(e) => this.onSelectFile("light", e)}
                                />
                                <label htmlFor="raised-button-file">
                                    <MaterialButton
                                        variant="contained"
                                        component="span"
                                        color="primary"
                                        className={'dragbutton'}
                                    >
                                        Add Photo / Drag
                                    </MaterialButton>
                                </label>
                            </React.Fragment>

                        </Grid>
                        <Button onClick={() => this.addTeam()} title="Add Team" />
                    </Grid>
                </Dialog>
            </Grid >
        );
    }
}

export default (HomePage);