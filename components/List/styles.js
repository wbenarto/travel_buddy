import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    formControl: {
        margin: theme.spacing(1), minWidth:120, marginBottom: '30px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    loading: {
        height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    container: {
        padding: '25px',
        [theme.breakpoints.down('sm')]: {
            height: '60vh',
            overflow: 'scroll'
        },
        "& h4" : {
            fontSize: '1.5rem'
        }
    }, 
    marginBottom: {
        marginBottom: '30px'
    },
    list: {
        height: '65vh', overflow: 'auto',
    }

}))