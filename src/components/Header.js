import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  defaultHref: {
    color: 'white',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Animal Database
          </Typography>
          <a href="https://zoo.wroclaw.pl/zwierzeta" className={classes.defaultHref}>
            <Tooltip
              title={<h2>The images of animals and their names were taken from the Wroclaw Zoo's site. Click this info icon to get redirected.</h2>}>
              <InfoIcon />
            </Tooltip>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}