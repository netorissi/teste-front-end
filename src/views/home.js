import React, { Component } from 'react';
import axios from 'axios';
import { 
    withStyles,
    Grid,
    TextField,
    InputAdornment,
    IconButton 
} from '@material-ui/core';
import style from '../assets/styles/default';
import { MdSearch } from 'react-icons/md';

const URL_1 = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=20&q=';
const URL_2 = '&key=AIzaSyAH3AcuuFSQPCGGM3sa7n44_I_SBSsyTlo';

class Home extends Component {

    state = {
        textFilter: '',
        currentPosition: 0,
        inputMove: false,
        videos: null,
        pageToken: null,
        loadingScroll: false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll, false);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }

    onScroll = async () => {
        const { pageToken } = this.state;

        if (pageToken) {
            const pageInitial = document.getElementById("mainVideos");
            const pageInitialOffset = pageInitial 
                ? (pageInitial.offsetTop + pageInitial.clientHeight) 
                : 0;

            if ((window.innerHeight + window.pageYOffset) >= (pageInitialOffset  + 130)) {
                this.setState({ loadingScroll: true });
                
                setTimeout(async () => {
                    this.searchApi();
                }, 500);
            }
        }
	}

    filterChange = event => this.setState({ textFilter: event.target.value });

    moveInput = () => {
        const elementH = document.getElementById("form-move").offsetTop - 80;
        const currentPosition = elementH * -1;
        this.setState({ currentPosition, inputMove: true });
    }

    sendForm = event => {
        const { inputMove } = this.state;
        event.preventDefault();
        if (!inputMove) this.moveInput();
        this.searchApi();
    }

    searchApi = async () => {
        const { textFilter, videos, pageToken } = this.state;

        if (textFilter) {
            
            const textFormat = textFilter.replace(" ", '+');

            let URL_YOUTUBE = `${URL_1}${textFormat}${URL_2}`;
            if (pageToken) URL_YOUTUBE = `${URL_1}${textFormat}&pageToken=${pageToken}${URL_2}`;

            await axios.get(URL_YOUTUBE)
            .then(resp => {
                const data = resp.data;
                const pageToken = data.nextPageToken;
                let newVideos = videos || [];
                console.log(data.items.length)
                
                if (data.items.length > 0) 
                    newVideos.push(data.items);

                this.setState({ 
                    pageToken, 
                    videos: newVideos, 
                    loadingScroll: false 
                });
            })
            .catch(error => {
                console.log('DEU RUIM:', error)
            })
        }
    }

    render() {

        const { classes } = this.props;
        const { textFilter, currentPosition, videos } = this.state;
        console.log(videos)

        return (
            <Grid container className={classes.main}>
                <Grid 
                id="form-move"
                item 
                xs={12}
                className={classes.root} 
                style={{ transform: `translateY(${currentPosition}%)` }}>
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
                {videos && (
                    <Grid item xs={12} id="mainVideos">

                    </Grid>
                )}
            </Grid>
        );
    }

}

export default withStyles(style)(Home);