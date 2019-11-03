import React, { Component } from 'react';
import axios from 'axios';

// ## --------- CONFIG --------- ## //
import history from '../config/history';

// ## --------- HELPER --------- ## //
import { numberLong } from '../helpers/formatters';

// ## --------- STYLES --------- ## //
import style from '../assets/styles/videoDetail';

// ## --------- ICONS --------- ## //
import { MdThumbUp, MdThumbDown, MdVisibility, MdChevronLeft } from 'react-icons/md';

// ## --------- MATERIAL-UI --------- ## //
import { Grid, withStyles, Button, Typography } from '@material-ui/core';

// ## --------- ROUTES --------- ## //
import { DETAIL_URL, STATISTICS_URL, KEY_URL } from '../routes/names';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoDetail: null,
            checkVideo : true
        }

        const { videoId } = props.match.params;
        if (videoId)
            this.searchVideo(videoId);
    }

    searchVideo = videoId => {
        const URL_FULL = DETAIL_URL + videoId + STATISTICS_URL + KEY_URL;
        axios.get(URL_FULL)
        .then(resp => {
            const data = resp.data;
            const videoDetail = data.items[0];
            
            if (videoDetail)
                this.setState({ videoDetail });
        })
        .catch(() => {
            this.setState({ checkVideo: false });
        })
    }

    render() {

        const { videoDetail, checkVideo } = this.state;
        const { classes } = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid item xs={12} style={{ maxWidth: 960 }}>
                
                    {videoDetail && checkVideo && (
                        <Grid container style={{ margin: '20px auto' }}>
                        
                            <Grid item xs={12} className={classes.title}>
                                {videoDetail.snippet.title}
                            </Grid>

                            <Grid item xs={12}>
                                <iframe
                                title={videoDetail.snippet.title}
                                src={`https://www.youtube.com/embed/${videoDetail.id}`}
                                frameBorder="0"
                                allowFullScreen
                                className={classes.mediaDetail}
                                />
                            </Grid>

                            <Grid item xs={12} style={{ margin: 10 }}>
                                <Grid container>
                                    <Grid item xs={8} className={classes.channel}>
                                        {videoDetail.snippet.channelTitle}
                                    </Grid>
                                    <Grid item xs={2} className={classes.info}>
                                        <MdThumbUp/> {numberLong(videoDetail.statistics.likeCount)}
                                    </Grid>
                                    <Grid item xs={2} className={classes.info}>
                                        <MdThumbDown/> {numberLong(videoDetail.statistics.dislikeCount)}
                                    </Grid>
                                    <Grid item xs={12} className={classes.description}>
                                        {videoDetail.snippet.description}
                                    </Grid>

                                    <Grid item xs={12} className={classes.info}>
                                        <MdVisibility/> {numberLong(videoDetail.statistics.viewCount)}
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => history.goBack()}
                                >
                                    <MdChevronLeft/> Voltar
                                </Button>
                            </Grid>

                        </Grid>

                    )}

                    {!checkVideo && (
                        <Grid item xs={12} style={{ textAlign: 'center' }}>
                            <Typography
                            variant="body2"
                            color="textSecondary"
                            >
                                Ocorreu um erro inesperado. Por favor, tente novamente!
                            </Typography>
                            <Button
                                variant="outlined"
                                color="secondary"
                                className={classes.button}
                                onClick={() => history.goBack()}
                            >
                                <MdChevronLeft/> Voltar
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(style)(Detail);