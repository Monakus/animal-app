import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header'
import Cards from './components/Cards'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
  },
}));

function App(){
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <TextField 
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search for animals..."
            />
        </div>
        <Cards input={inputText}/>
      </div>
    );
}

export default App;
