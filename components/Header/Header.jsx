import { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Script from 'next/script'

import useStyles from './styles'

const Header = ({ onPlaceChanged, onLoad }) => {
    const classes = useStyles();

    return (
        <>
            <Script src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`} strategy="beforeInteractive" />

            <AppBar className={classes.appBar} position='static'>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h5' className={classes.title}>
                        Travel Buddy
                </Typography>
                    <Box className={classes.box}>
                        <Typography variant='h6' className={classes.title}>
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
        </>
    )
}

export default Header