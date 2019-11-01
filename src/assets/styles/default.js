export default theme => ({
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
    },
    root: {
        maxWidth: 1080,
        transition: 'transform 0.5s linear',
    },
    textField: {
        width: '100%',
    },
    pd2: {
        paddingLeft: theme.spacing(1.3),
        paddingRight: theme.spacing(1.3)
	},
    button: {
        marginTop: theme.spacing(2)
    },
    videoThumb: {
        width: 320,
        height: 180
    }
})