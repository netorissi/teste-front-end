export default theme => ({
    root: {
        margin: '10px auto',
        padding: 10,
        justifyContent: 'center'
    },
    mediaDetail: {
        width: '960px', 
        height: '540px',
        [theme.breakpoints.down('sm')]: {
            width: '100%', 
            maxHeight: '480px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%', 
            maxHeight: '270px'
        }
    },
    title: {
        margin: '5px auto',
        fontSize: 18,
        fontWeight: 'bold',
    },
    channel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        margin: '10px auto',
        fontSize: 14,
        color: "#a2a2a2"
    }
    ,
    info: {
        fontSize: 14,
        fontWeight: 'bold',
        '& svg': {
            marginBottom: -2
        }
    }
})