import React from "react";
import { Movies } from "../components/Movies"
import { Search } from "../components/search";
import { Placeholder } from "../components/placeholder";
class Main extends React.Component{
        state = {
            movies:[],
        };

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=88ba74f5&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({movies:data.Search}));
    }

    searchMovies = (str) =>{
        fetch(`http://www.omdbapi.com/?apikey=88ba74f5&s=${str}`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }
    render() {
        const {movies} = this.state;
        
        return <main className = "contaner content">
            <Search searchMovies={this.searchMovies} />
            {
                movies.length?(
                    <Movies movies = {this.state.movies}/>
                ) :  <Placeholder/>
            
            }
        </main>
    }
}   

export { Main };