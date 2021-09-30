import React, { Component } from 'react'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export class Footer extends Component {
    render() {
        return (
            <div>
                <Typography variant="h4" component="h3">
                    &copy; ASAC 2021
                </Typography>
            </div>
        )
    }
}

export default Footer
