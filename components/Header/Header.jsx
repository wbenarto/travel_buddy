import { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Script from 'next/script'
import useStyles from './styles'

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();

    return (
        <div>

            <AppBar className={classes.appBar} position='static'>
                <Toolbar className={classes.toolbar}>

                    <Typography variant='h4' className={classes.title}>
                        Travelly
                    </Typography>
                    <Box className={classes.box}>
                        <Typography variant='h6' className={classes.subtitle}>
                            Where to now..?
                        </Typography>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                            </div>
                        </Autocomplete>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header