
 
 //const URL = 'https://api.themoviedb.org/3';


const getMovieById = async (page=1,path) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDczYTQ5MjYwMmVlZTUzZjIyNWUzNzkxNmU0Y2ZiNiIsInN1YiI6IjY0Y2Q1ZjNjODI4OWEwMDBhZWQzOTYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LrBGD1a1taq_NnfCraryrWLCuTmKWuGko00Bk7DXGW4'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response =>{return response.json()})
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
getMovieById()
export default  getMovieById ;
