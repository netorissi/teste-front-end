import React from 'react';
import { Grid, Typography, withStyles, Button } from '@material-ui/core';

import style from '../assets/styles/videoView';
import { textUnescape } from '../helpers/formatters';

const VideoView = props => {

    const { videoCurrent, videoDetail, classes } = props;

    return (
        <Grid item md={4} sm={6} xs={12} className={classes.root}>
            <Grid container className={classes.card}>

                <Grid item xs={12}>
                    <img 
                    src={videoCurrent.snippet.thumbnails.medium.url} 
                    alt ="" 
                    className={classes.media}
                    onClick={() => videoDetail(videoCurrent.id.videoId)}
                    />
                </Grid>

                <Grid item xs={12} className={classes.title}>
                    <Typography variant="body2">
                        {textUnescape(videoCurrent.snippet.title)}
                    </Typography>
                </Grid>

                <Grid item xs={12} className={classes.channel}>
                    <Typography variant="body2">
                        {textUnescape(videoCurrent.snippet.channelTitle)}
                    </Typography>
                </Grid>
                
                <Grid item xs={12} className={classes.description}>
                    <Typography variant="body2">
                        {textUnescape(videoCurrent.snippet.description)}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        onClick={() => videoDetail(videoCurrent.id.videoId)}
                    >
                        Detalhes do video
                    </Button>
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(VideoView);