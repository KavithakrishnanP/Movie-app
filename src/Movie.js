import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory} from 'react-router-dom';

export function Movie({ name, poster, rating, summary,id , editButton, deleteButton}) {
  const [show, setShow] = useState(true);
  const history= useHistory();

  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold",
  };
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster"/>
      <CardContent>
      
      <div className="movie-specs">
        <h1 className="movie-name"> {name}

        <IconButton 
        onClick={() => {
          console.log(id);
          history.push("/movies/"+id)
        }}
         className="movie-show-button" 
         color="primary"
         aria-label="more-info"
        >
          <InfoIcon/>
</IconButton>
        <IconButton 
        onClick={() => 
          setShow(!show)}
         className="movie-show-button" 
         color="primary"
         aria-label="hide"
        >
           {show ? <ExpandLessIcon/>:<ExpandMoreIcon/> } 
           
</IconButton>
</h1>
        <p className='movie-rating' style={styles}>
          ⭐{rating}</p>
      </div>  
      <p className='movie-summary' style={summaryStyles}>{summary}</p>
     <CardActions>
      <Counter /> {editButton} {deleteButton}
      </CardActions>
      </CardContent>
    </Card>
  );
}
