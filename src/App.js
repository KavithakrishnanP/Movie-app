
import './App.css';
import { MovieList } from './MovieList';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {  Switch, Route, Redirect, useParams} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {useHistory} from 'react-router-dom';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';



export default function App() {
  console.log("Hi");
  const INITIAL_MOVIES=[
   {name: "The Avengers", 
   poster:"https://w0.peakpx.com/wallpaper/632/50/HD-wallpaper-poster-of-avengers-endgame-movie-thumbnail.jpg",
  rating:8,
  summary:"Marvel's The Avengers or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"},
   {name: "Iron Man 2",
   poster:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
    rating:7,
    summary:"Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures .",
  trailer:"https://www.youtube.com/embed/BoohRoVA9WQ"},
   {name:"Interstellar", 
   poster:"https://i.pinimg.com/736x/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg",
   rating:8.6,
   summary:"A film that explores the psychological and emotional state of a man whose life revolves around his family, 'Interstellar' is a thrilling and thought-provoking .",
  trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"},
   {name:"Ratatouille",
   poster:"https://lumiere-a.akamaihd.net/v1/images/p_ratatouille_19736_0814231f.jpeg",
rating:8,
summary:"Ratatouille is a 2007 American computer-animated comedy-drama film produced by Pixar Animation Studios and released by Walt Disney Pictures",
trailer:"https://www.youtube.com/embed/NgsQ8mVkN8w"},
{name:"Jai Bhim",
poster:"https://wallpapercave.com/wp/wp10188321.jpg",
rating:8.8,
summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. So as to find her husband and seek justice for them, as their voice, a High Court advocate rises in support. ",
trailer:"https://www.youtube.com/embed/Gc6dEDnL8JA"},
   {name:"Baahubali",
   poster:"https://wallpapercave.com/wp/wp1851897.jpg", 
   rating:8, 
   summary:"Part of a tribe living around the province of Mahismathi, save a drowning infant, little do they know the background of the infant or what the future holds for him. The kid grows as a free-spirit wanting to explore the mountains and in the process learns of his roots ",
   trailer:"https://www.youtube.com/watch?v=sOEg_YZQsTI"},
   {name: "No Country for Old Men", 
   poster:"https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg",
  rating:8.2,
  summary:"No Country for Old Men is a 2005 novel by American author Cormac McCarthy, who had originally written the story as a screenplay. The story occurs in the vicinity of the Mexico–United States border in 1980 and concerns an illegal drug deal gone awry in the Texas desert back country.",
trailer:"https://www.youtube.com/embed/38A__WT3-o0"},
  ];

  const[movies, setMovies]=useState(INITIAL_MOVIES);
  const history= useHistory();
  const [mode, setMode]= useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return(
    
   <ThemeProvider theme={theme}>
    <Paper elevation={4} 
    style={{borderRadius:"0px",minHeight:"100vh"}}>
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
        <Button variant="text" color="inherit" onClick={()=> history.push('/')}>Home</Button>
        <Button variant="text" color="inherit" onClick={()=> history.push('/movies')}>Movies</Button>
        <Button variant="text" color="inherit" onClick={()=> history.push('/add-movies')}>Add Movies</Button>
       
        <Button  
        startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        style={{marginLeft:"auto"}}
        variant="text" color="inherit" 
        onClick={()=> setMode(mode==="light"?"dark":"light")}>
         {mode==="light"?"Dark":"Light"} mode </Button>
</Toolbar>
      </AppBar>
       {/* <nav>
       <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
       <Link to="/add-movies">Add Movies</Link>
       </nav> */}
       <Switch>
        <Route path="/films">
          <Redirect to="/movies"/>
        </Route>
         <Route path="/movies/:id">
          <MovieDetails movies={movies}/>
         </Route>
         <Route path="/movies">
           <MovieList movies={movies}/>
         </Route>
         <Route path="/add-movies">
         <AddMovie movies={movies} setMovies={setMovies}/>
         </Route>
        <Route exact path="/"><Welcome/></Route>
        <Route path="**"><NotFound/></Route>
       </Switch> 
      {/* <AddMovie movies={movies} setMovies={setMovies}/>
<MovieList movies={movies}/> */}

</div>
</Paper>
</ThemeProvider>
  );
}

function MovieDetails({movies}){
  const {id} =useParams();
  const movie= movies[id];
  console.log(movie);
  const styles={
    color:movie.rating <8 ?"crimson":"green",
    fontWeight:"bold",
  }

  return(
    <div className="movie-detail-container">   
    <iframe width="100%" height="500"
     src={movie.trailer}
     title="Youtube video player" 
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
  <div className="movie-specs">
    <h3 className="movie-name"> {movie.name}</h3>
    <p className='movie-rating' style={styles}>
      ⭐{movie.rating}</p>
  </div>  
  <p className='movie-summary' >{movie.summary}</p>
 </div>);
}


function NotFound(){
  return(
  <div className="not-found-container">
    <h3>Not Found 404</h3>
   <img 
   className="not-found-img"
    src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
  alt="404 error"/>
  </div>
  );
}
function Welcome(){
  return <h3 className="home-detail">Welcome to my Movie App😊</h3>
}

function AddMovie({movies,setMovies}){
const [name,setName]= useState("");
const [poster,setPoster]= useState("");
const [rating,setRating]= useState("");
const [summary,setSummary]= useState("");
const [trailer,setTrailer]= useState("");

const addMovie=()=> {
  console.log("Adding Movies...",name, poster, rating, summary, trailer);
  const newMovie={
     name,
     poster, 
     rating, 
     summary,
     trailer};
     console.log(newMovie);
     setMovies([...movies,newMovie]);
};

  return(
  <div className="add-movie-form">
  <TextField 
  value={name}
  onChange={(event)=>setName(event.target.value)}
  label="Name"
  variant="standard"  />
  <TextField
  value={poster}
  onChange={(event)=>setPoster(event.target.value)}
  label="Poster"
  variant="standard" />
  <TextField 
  value={rating}
  onChange={(event)=>setRating(event.target.value)}
  label="Rating"
  variant="standard"  />
  <TextField
  value={summary}
  onChange={(event)=>setSummary(event.target.value)}
  label="Summary"
  variant="standard"  />
  <TextField
  value={trailer}
  onChange={(event)=>setTrailer(event.target.value)}
  label="Trailer"
  variant="standard"  />
  <Button onClick={addMovie} variant="outlined">Add Movie</Button>
  
</div>)
}
// function AddColor(){
//  const [color,setColor]=useState("red");
//  const styles={backgroundColor:color};

//  const [colors,setColors]=useState(["teal","orange"]);
//  return(
//   <div>
//     <input
//     value={color}
//     onChange={(event)=>setColor(event.target.value)}
//     style={styles}
//     placeholder="Enter a Color"></input>
    
//     <Button variant="outlined" onClick={()=> setColors([...colors,color])}>Add</Button>
//     {colors.map((clr,index)=>
//     <ColorBox key={index} color={clr}/>)}
//   </div>
//  );
// }

// function ColorBox({color}){
//   const styles={
//     backgroundColor: color, 
//       height:"25px", 
//       width: "250px",
//     marginTop:"10px"};
//     return <div style={styles}>

//     </div>
//   }

  