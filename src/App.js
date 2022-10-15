import './App.css';
import {Container, Paper,Typography} from '@mui/material';
import {app, analytics} from './firebase.config'

console.log('Here is the app:',app)
console.log('Here is the analytics:',analytics)

function App() {
  const styles = {
    Container: {
      height:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },
    FlexBox:{
      display:'flex',
      flexDirection:'column',
      gap:2,
      padding:5
    }
  }
  return (
    <Container sx={styles.Container}>
      <Paper sx={styles.FlexBox} elevation={10}>
        <Typography variant="h1">Naked React with MUI</Typography>
        <Typography variant="h3">React without the crap!</Typography>
        <code><a target="_blank" href="https://digyt.co">Made with love by Digyt</a></code>
      </Paper>
    </Container>
  );
}

export default App;
