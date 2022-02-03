import {alpha, makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=> ({
    appBar:{
        backgroundColor: 'white',
        height: '140px'
    },
    logo: {
        width: '100px',
        height: '50px',
    },
    title: {
        display: 'flex',
        marginTop:'20px',
        fontFamily: 'Secular One',
        color: 'teal',
        letterSpacing: '.1em',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    },
    subtitle: {
        display: 'flex',
        marginTop:'20px',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            fontSize: '1rem'
        },
    },
    box:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: "black",
        
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {backgroundColor: alpha(theme.palette.common.white, 0.25)},
        marginRight: theme.spacing(2),
        marginLeft: 0,
        marginTop:'20px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {marginLeft: theme.spacing(3), width:"auto"},
    }, 
    searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute',pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent:'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1,1,1,0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%',[theme.breakpoints.up('md')]: {width: '20ch'}
    },
    toolbar: {
        display: 'flex', justifyContent: 'space-between', flexDirection: 'column'
    }

}))