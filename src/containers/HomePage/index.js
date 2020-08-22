import React, { useState, useEffect } from 'react';
import "./index.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {
    Grid,
    Paper,
    Box,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    InputLabel,
    Select,
    MenuItem,
    FormControl,
    Button as MaterialButton,
    Avatar,
    CircularProgress
} from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import { Button, Input, Edition } from "../../Component";
import { AccessTime, Add, Close, Theaters } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';
import { SketchPicker } from 'react-color'

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center" style={{ width: '100%' }}>
            <Box width="100%" style={{ width: '100%' }} mr={1}>
                <LinearProgress classes={{ barColorPrimary: 'bar-style' }} className={'bar-style'} variant="buffer"  variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography className={'white-text'} variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function HomePage() {
    const [state, setState] = useState({
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
        color: '#000',
        displayColorPicker: false,
        mode: 0,
        icon: '',
        hover: false,
        loading: false,
    })
    const [teamList, setTeamList] = useState([
        {
            name: 'Team 1',
            description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
            color: '#F83B65',
            studioTime: 20,
            recordStrangth: 40,
            member: [
                {
                    email: 'john@gmail.com',
                    role: 'Member',
                    invited: false
                },
                {
                    email: 'elena@gmail.com',
                    role: 'Manager',
                    invited: false
                },
                {
                    email: 'smith@gmail.com',
                    role: 'Operator',
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
                    email: 'john@gmail.com',
                    role: 'Member',
                    invited: false
                },
                {
                    email: 'elena@gmail.com',
                    role: 'Manager',
                    invited: false
                },
                {
                    email: 'smith@gmail.com',
                    role: 'Operator',
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
                    email: 'john@gmail.com',
                    role: 'Member',
                    invited: false
                },
                {
                    email: 'elena@gmail.com',
                    role: 'Manager',
                    invited: false
                },
                {
                    email: 'smith@gmail.com',
                    role: 'Operator',
                    invited: true
                },
            ]
        },
    ])

    useEffect(() => {
        console.log("member changed!");
    }, [state.member]);

    const handleChangeState = (event, newValue) => {
        setState({ ...state, [event]: newValue });
    };


    const onClose = () => {
        setState({ ...state, teamPanel: false })
    }

    const allmember = (members) => {
        return (
            <Grid item xs={12} md={4}>
                <Paper elevation={5} className={'paper request-paper'}>
                    <h4 className={'paper-heading'}>Members</h4>
                    {
                        members.map((item, index) => {
                            return (
                                <Paper elevation={5} style={{ opacity: item.invited ? 0.5 : 1, marginBottom: 10 }} className={'paper'}>
                                    <Grid className={'request-inner'}>
                                        <img className={'logo-v'} src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                        <div item className={'heading-grid'}>
                                            <h6 className={'request-head'}>{item.email}</h6>
                                            <Grid item xs={12} className={'member-row'}>
                                                <p className={'request-subhead'} style={{
                                                    backgroundColor: item.role === "Manager" ? "#F83B65" : item.role === "Operator" ? "rgba(248, 59, 101, 0.5)" : 'transparent',
                                                    color: item.role === "Member" ? "#000" : '#fff',
                                                }}>{item.role}</p>
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
                <Button onClick={() => setState({ ...state, addMemberModal: true })} icon={<Add className={'add-icon'} />} title="Add Member" />
            </Grid>
        )
    }


    const selectedTeam = (item, index) => {
        if (state.teamPanel === true && state.team === index + 1) {
            setState({
                ...state,
                team: 0,
                teamPanel: false,
                index: index,
                add: false
            })
        } else if (index + 1 !== state.team) {
            setState({
                ...state,
                team: index + 1,
                index: index,
                add: false
            })
        }
        else {
            setState({
                ...state,
                team: index + 1,
                teamPanel: true,
                index: index,
                add: false
            })
        }
    }

    useEffect(() => {
        const TeamList = teamList.length && teamList[state.index]
        if (state.progress !== TeamList.studioTime && !state.add) {
            setState({ ...state, progress: TeamList.studioTime, progress1: TeamList.recordStrangth })
        }

    }, [teamList, state.index, state.add])

    const handleClose = (type) => {
        setState({ ...state, [type]: false })
    }

    const addMember = () => {
        setState({ ...state, loading: true })
        setTimeout(() => {
            setState({ ...state, loading: false })
            teamList[state.index].member.push({ email: state.email, role: state.role, invited: true })
            setTeamList(teamList)
            setState({
                ...state,
                addMemberModal: false,
                email: '',
                role: 'Member'
            })
        }, 2000);
    }

    const addTeam = () => {
        setState({ ...state, loading: true })
        setTimeout(() => {
            if (state.mode === 1) {
                const TeamList = teamList.length && teamList[state.index]
                TeamList.name = state.teamname;
                TeamList.description = state.description;
                TeamList.color = state.color;
                teamList[state.index] = TeamList
                setTeamList(teamList)
                setState({
                    ...state,
                    mode: 0,
                    addTeamModal: false,
                    teamname: '',
                    description: '',
                    color: '#000'
                })
            } else {
                teamList.push({
                    name: state.teamname, description: state.escription, color: state.olor, studioTime: 10, recordStrangth: 20, member: [{
                        email: 'Operator@gmail.com',
                        role: 'Operator',
                        invited: false
                    },]
                })
                setTeamList(teamList)
                setState({
                    ...state,
                    addTeamModal: false,
                    teamname: '',
                    description: '',
                    color: '#000'
                })
            }
        }, 2000);
    }

    const handleClickColor = () => {
        setState({
            ...state,
            displayColorPicker: !state.displayColorPicker
        })
    };

    const handleCloseColor = () => {
        setState({
            ...state,
            displayColorPicker: false
        })
    };

    const handleChangeColor = (color) => {
        setState({
            ...state,
            color: color.hex
        })
    };

    const teamEdit = (team) => {
        setState({
            ...state,
            teamname: team.name,
            description: team.description,
            color: team.color,
            addTeamModal: true,
            mode: 1
        })
    }

    const toggleHover = () => {
        setState({
            ...state,
            hover: !state.hover
        })
    }

    const TeamList = teamList.length && teamList[state.index]
    return (
        <Grid container className="home">
            <Grid md={12} className="homeLeft">
                <Collapse in={state.teamPanel} style={{ marginTop: state.teamPanel ? 30 : 0 }} className={'panel'}>
                    <Paper elevation={0} className={'main'}>
                        <Grid className={'close-div'}>
                            <Grid item xs={6} className={'heading'}>
                                <h5 className={'collepse-head'}>{TeamList.name}</h5>
                            </Grid>
                            <Grid className={'settings'}>
                                <Button white={true} title="Settings" onClick={() => teamEdit(TeamList)} />
                                <IconButton onClick={() => onClose()}>
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
                                        <LinearProgressWithLabel className={'progress-bar'} value={state.progress} />
                                        <Add className={'white-text'} onClick={() => {
                                            setState({
                                                ...state,
                                                progress: state.progress >= 100 ? 100 : state.progress + 10,
                                                add: true
                                            })
                                        }} />
                                    </div>
                                </Grid>
                                <Grid container>
                                    <Theaters className={'arrow-icon'} /><p className={'white-text'}><b>Record strangth(km):</b> 5/30</p>
                                </Grid>
                                <Grid container>
                                    <div className={'linear-progress'}>
                                        <LinearProgressWithLabel className={'progress-bar'} value={state.progress1} />
                                        <Add className={'white-text'} onClick={() => {
                                            setState({
                                                ...state,
                                                progress1: state.progress1 >= 100 ? 100 : state.progress1 + 10,
                                                add: true
                                            })
                                        }} />
                                    </div>
                                </Grid>

                                <Grid container>
                                    <p className={'white-text'}><b>Members:</b> 4</p>
                                </Grid>
                                <Grid container>
                                    <p className={'white-text'}><b>Recordings:</b> 20</p>
                                </Grid>
                                <Edition />
                            </Grid>
                            {allmember(TeamList.member)}
                        </Grid>
                    </Paper>
                </Collapse>
                <Grid className="headerInner">
                    {
                        teamList.map((item, index) => {
                            if (index > 0 && index < 5 && state.teamPanel) {
                                return (
                                    <Grid className={`homeGrid ${index + 1 === state.team ? 'selected-team' : ''}`} style={{ backgroundColor: index + 1 === state.team ? item.color : '#707070', filter: index + 1 === state.team ? 'grayscale(0%)' : 'grayscale(100%)' }} onMouseEnter={toggleHover} onMouseLeave={toggleHover} onClick={() => selectedTeam(item, index)}>
                                        <img className="logo-v" src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                        <h5 className={'team'}>{item.name}</h5>
                                    </Grid>
                                )
                            } else if (index === 0) {
                                return (
                                    <Grid className={`homeGrid ${index + 1 === state.team ? 'selected-team' : ''}`} style={{ backgroundColor: index + 1 === state.team ? item.color : '#707070', filter: index + 1 === state.team ? 'grayscale(0%)' : 'grayscale(100%)' }} onClick={() => selectedTeam(item, index)}>
                                        <img className="logo-v" src={'https://i.imgur.com/zLCYdR9.jpg'} alt="" />
                                        <h5 className={'team'}>{item.name}</h5>
                                    </Grid>
                                )
                            }

                        })
                    }
                    {
                        state.teamPanel &&
                        <Grid
                            className={`homeGrid`}
                            style={{ backgroundColor: '#707070', filter: 'grayscale(100%)' }}
                            onClick={() => setState({ ...state, addTeamModal: true })}
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

                onClose={() => handleClose('addMemberModal')} aria-labelledby="simple-dialog-title" open={state.addMemberModal}>
                <Grid className={'member-modal'}>
                    {
                        state.loading ?
                            <CircularProgress color="secondary" />
                            :
                            <React.Fragment>
                                <DialogTitle id="simple-dialog-title">Add Members</DialogTitle>
                                <Grid xs={12} className={'addMemberDialog'}>
                                    <Input
                                        placeholder="Email"
                                        name={'email'}
                                        value={state.email}
                                        onChange={handleChangeState}
                                    />
                                    <FormControl variant="outlined" className={'formControl'}>
                                        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={state.role}
                                            onChange={(event) => handleChangeState('role', event.target.value)}
                                            label="Role"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value="Member">Member</MenuItem>
                                            <MenuItem value="Manager">Manager</MenuItem>
                                            <MenuItem value="Operator">Operator</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Button onClick={() => addMember()} title="Add Member" />
                                </Grid>
                            </React.Fragment>
                    }
                </Grid>
            </Dialog>
            <Dialog
                fullWidth={true}
                maxWidth={'sm'}

                onClose={() => handleClose('addTeamModal')} aria-labelledby="simple-dialog-title" open={state.addTeamModal}>
                <Grid className={'team-modal'}>
                    {
                        state.loading ?
                            <CircularProgress color="secondary" />
                            :
                            <React.Fragment>
                                <DialogTitle id="simple-dialog-title">{state.mode === 1 ? "Update" : "Add"} Team</DialogTitle>
                                <Grid xs={12} className={'addMemberDialog'}>
                                    <Input
                                        placeholder="Team Name"
                                        name={'teamname'}
                                        value={state.teamname}
                                        onChange={handleChangeState}
                                    />
                                    <Input
                                        placeholder="Description"
                                        name={'description'}
                                        value={state.description}
                                        onChange={handleChangeState}
                                    />
                                    <div className={'colorDiv'}>
                                        <span className={'colorText'}>Select a color</span>
                                        <div className={'swatch'} onClick={handleClickColor}>
                                            <div className={'color'} style={{ background: state.color }} />
                                        </div>
                                        {state.displayColorPicker ? <div className={'popover'}>
                                            <div className={'cover'} onClick={handleCloseColor} />
                                            <SketchPicker color={state.color} onChange={handleChangeColor} />
                                        </div> : null}

                                    </div>
                                    <Grid className={'iconGrid'}>
                                        <Avatar alt="Remy Sharp" style={{ width: 100, height: 100, marginRight: 20, marginLeft: 20 }} src={state.icon} />
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
                                    <Button onClick={() => addTeam()} title={`${state.mode === 1 ? "Update" : "Add"} Team`} />
                                </Grid>
                            </React.Fragment>
                    }
                </Grid>
            </Dialog>
        </Grid >
    );
}

export default (HomePage);