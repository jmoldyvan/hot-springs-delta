import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {

  let phrases = [`Welcome!`, `Thanks For Waiting!`, `Have a Lot To Load`, `Almost Done!`, `Finishing Up!`, `Thank You and Enjoy!`]
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (index == phrases.length - 1) return
    setTimeout(() => {
      setIndex(index + 1)
    }, 20000);
  }, [index])

  return (
    <div className='grid place-items-center h-screen'>
      <Box    
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"     
          
          sx={{    position: 'relative'  }}>
          <Typography sx={{ position: 'absolute'}} variant="caption" component="div" color="text.secondary">
          {phrases[index]}
        </Typography>
        <CircularProgress size='20rem' />
      </Box>
   
    </div>
 );
}