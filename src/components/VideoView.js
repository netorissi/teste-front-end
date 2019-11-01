import React from 'react';
import { Grid, Typography, withStyles, Button } from '@material-ui/core';

import style from '../assets/styles/default';
import { textUnescape } from '../helpers/formatters';

const VideoView = props => {

    const { videoCurrent, videoDetail, classes } = props;

    return (
        <Grid item xs={4} style={{ padding: 20 }}>
            <Grid container style={{ maxWidth: 480 }}>

                <Grid item xs={12}>
                    <img 
                    src={videoCurrent.snippet.thumbnails.high.url} 
                    alt ="" 
                    style={{ width: '100%', maxHeight: 200 }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body1">
                        {textUnescape(videoCurrent.snippet.title)}
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body2">
                        {textUnescape(videoCurrent.snippet.channelTitle)}
                    </Typography>
                </Grid>
                
                <Grid item xs={12}>
                    {textUnescape(videoCurrent.snippet.description)}
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