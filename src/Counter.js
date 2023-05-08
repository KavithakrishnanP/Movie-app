import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const incrementLike=()=> setLike(like + 1)
  return (
    <div className="counter-container">
      <IconButton 
      className="likes-dislikes"
       onClick={incrementLike} 
       aria-label="delete"
       color="primary"
       >
          <Badge badgeContent={like} color="primary">
          👍
        </Badge>
        </IconButton>

        
       
      <IconButton 
      className="likes-dislikes" 
      color="error"
      onClick={() => setDislike(dislike + 1)}
      aria-label="delete"
      >
         <Badge badgeContent={dislike} color="error">
         👎
        </Badge>
         </IconButton>
  
    </div>

  );
}


