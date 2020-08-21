import React from 'react';
import { Grid, Paper } from "@material-ui/core";
import './index.css'

const Edition = () => {
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


export default Edition;