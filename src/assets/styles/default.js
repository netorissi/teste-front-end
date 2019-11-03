export default theme => ({
    main: {
        justifyContent: 'center',
    },
    root: {
        width: '100%',
        maxWidth: 1080,
        position: 'absolute',
        transition: 'all 0.5s linear',
        padding: 10,
        marginTop: -27.5,
    },
    inputCenter: {
        top: '50%'
    },
    inputTop: {
        top: 20
    },
    areaVideos: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    textField: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(2)
    },
    videoThumb: {
        width: 320,
        height: 180
    },
    btnTop: {
        position: 'fixed',
        right: 20,
        bottom: 20
    }
})