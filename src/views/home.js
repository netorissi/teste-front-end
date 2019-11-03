import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import clsx from 'clsx';

// ## --------- ACTIONS --------- ## //
import * as acVideos from '../actions/videos';

// ## --------- COMPONENTS --------- ## //
import VideoView from '../components/VideoView';

// ## --------- MATERIAL-UI --------- ## //
import { 
    withStyles,
    Grid,
    TextField,
    InputAdornment,
    IconButton, 
    Fab,
    Typography
} from '@material-ui/core';

// ## --------- ICONS --------- ## //
import { MdSearch, MdArrowUpward, MdSentimentDissatisfied } from 'react-icons/md';

// ## --------- ROUTES --------- ## //
import * as routes from '../routes/names';

// ## --------- STYLES --------- ## //
import style from '../assets/styles/default';

class Home extends Component {

    state = {
        textFilter: '',
        inputMove: false,
        activeFilter: false,
        activeButtonTop: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, false);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }

    onScroll = async () => {
        const { pageToken } = this.props.videos;
        const { dispatch } = this.props;

        if (pageToken) {
            const pageInitial = document.getElementById("mainVideos");
            const pageInitialOffset = pageInitial 
                ? (pageInitial.offsetTop + pageInitial.clientHeight) 
                : 0;

            if (window.pageYOffset >= (window.innerHeight / 2))
                this.setState({ activeButtonTop: true })
            else
                this.setState({ activeButtonTop: false })

            if ((window.innerHeight + window.pageYOffset) >= (pageInitialOffset))
                await dispatch(acVideos.getVideos());
        }
	}

    filterChange = event => this.setState({ textFilter: event.target.value });

    moveToTop = () => window ? window.scrollTo(0, 0) : false;

    sendForm = async event => {
        event.preventDefault();
        const { dispatch } = this.props;
        const { inputMove, textFilter, activeFilter } = this.state;
        const filter = textFilter.replace(" ", "+");

        if (!inputMove)
            this.setState({ inputMove: true });

        await dispatch(acVideos.getVideos(filter));

        if (!activeFilter)
            setTimeout(() => this.setState({ activeFilter: true }), 1000);
    }

    videoDetail = videoId => {
        const { history } = this.props;
        if (videoId)
            history.push(`${routes.VIDEO_DETAIL}/${videoId}`);
    }

    render() {

        const { classes } = this.props;
        const { videos } = this.props.videos;
        const { textFilter, inputMove, activeFilter, activeButtonTop } = this.state;
        const videosLength = videos.length || 0;

        return (
            <Grid container className={classes.main}>
                <Grid 
                id="form-move"
                item 
                xs={12}
                className={clsx(classes.root, {
					[classes.inputTop]: (videosLength > 0 || inputMove),
					[classes.inputCenter]: (videosLength === 0)
				})}
                >
                    <form onSubmit={this.sendForm} style={{ width: '100%' }}>
                        <TextField
                        autoFocus
                        className={classes.textField}
                        value={textFilter}
                        placeholder="Pesquisar"
                        margin="normal"
                        variant="outlined"
                        onChange={this.filterChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        title="Buscar"
                                        onClick={this.sendForm}
                                    >
                                        <MdSearch/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        />
                    </form>
                </Grid>
                {videos && videos.length > 0 && (
                    <Grid item xs={12} id="mainVideos" className={classes.areaVideos}>
                        <Grid container style={{ maxWidth: 1280 }}>
                            {videos.map((video, i) => (
                                <VideoView
                                key={i}
                                videoCurrent={video}
                                videoDetail={this.videoDetail}
                                />
                            ))}
                        </Grid>
                        {activeButtonTop && (
                            <Fab 
                            size="small"
                            color="secondary"
                            className={classes.btnTop}
                            onClick={this.moveToTop}
                            >
                                <MdArrowUpward/>
                            </Fab>
                        )}
                    </Grid>
                )}
                {videos && videos.length === 0 && activeFilter && (
                    <Grid item xs={12} className={classes.areaVideos}>
                        <Grid container style={{ maxWidth: 1280 }}>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <MdSentimentDissatisfied size={70} color="#a2a2a2"/>
                                <Typography
                                variant="body2"
                                color="textSecondary"
                                >
                                    Não encontramos nenhum resultado!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
	videos: state.rdVideos
});

export default withRouter(connect(mapStateToProps)(withStyles(style)(Home)));