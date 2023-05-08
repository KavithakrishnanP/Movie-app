import { Movie } from "./Movie";
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map(({ name, poster, rating, summary,trailer }, index) => <Movie
        name={name}
        poster={poster}
        rating={rating}
        summary={summary}
        trailer={trailer}
        id={index}
        // editButton={
        //   <IconButton
        //   onclick={()=>{}}
        //   className="movie-show-button"
        //   color="primary"
        //   arialabel="edit">
        //   <EditIcon/>
        //   </IconButton>
        //   } 
        //   deleteButton={
        //     <IconButton
        //     onclick={()=>{}}
        //     className="movie-show-button"
        //     color="primary"
        //     arialabel="delete">
        //     <DeleteIcon/>
        //     </IconButton>}
          />)}
    </section>
  );
}
