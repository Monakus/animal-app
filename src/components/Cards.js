import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/ImageList';
import GridListTile from '@material-ui/core/ImageListItem';
import GridListTileBar from '@material-ui/core/ImageListItemBar';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 2000,
    height: 950,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Cards(props) {
  const classes = useStyles();

  const filteredData = tileData.filter((el) => {
    if (props.input === '') {
        return el;
    }else{
        return el.name.toLowerCase().includes(props.input)
    }
})

  return (
    <div className={classes.root}>
      <GridList rowHeight={300}  gap={10} cols={3} className={classes.gridList}>
        {filteredData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}