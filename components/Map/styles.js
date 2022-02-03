import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    paper: {
        padding: '10px', display:'flex', flexDirection: 'column', justifyContent:'center', width: '100px',
    }, 
    mapContainer: {
        height: '95vh', width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '30vh',
            display:'flex',
            position: 'absolute',
            bottom: '0'
        },
    },
    typography: {
        [theme.breakpoints.down('sm')]: {
            color: 'white',
            fontSize: '1em'
        },
    },
    markerContainer: {
        position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover':{zIndex:2}
    },
    pointer: {
        cursor: 'pointer'
    }
}))