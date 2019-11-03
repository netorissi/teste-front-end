export default theme => ({
    root: {
        margin: '10px auto',
        padding: 20
    },
    card: {
        maxWidth: 480
    },
    media: { 
        width: '100%',
        cursor: 'pointer',
        borderRadius: 3,
        maxHeight: 200,
        '&:hover': {
            boxShadow: '0px 7px 10px 0 rgba(0,0,0,0.25)'
        }
    },
    mediaDetail: {
        width: '960px', 
        height: '540px',
        [theme.breakpoints.down('md')]: {
            width: '640px', 
            height: '360px'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%', 
            minHeight: '100%'
        }
    },
    title: {
        margin: '10px auto',
        minHeight: 48,
        '& p': {
            fontSize: 16,
            fontWeight: 'bold',
        }
    },
    channel: {
        minHeight: 20,
        '& p': {
            fontSize: 14,
            fontWeight: 'bold',
            color: "#a2a2a2"
        }
    },
    description: {
        margin: '5px auto',
        minHeight: 80,
        '& p': {
            fontSize: 12,
            color: "#a2a2a2"
        }
    }
})