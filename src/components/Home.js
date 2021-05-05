import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function Home() {
   
    return (
        <div>
            <div className='separator'></div>
            <Container maxWidth='sm'>
                <div className='separator'></div>
                <Typography variant='body1'>
                    <p>This is our potato client! &#x1f954;</p>
                </Typography>
            </Container>
        </div>
    )
}