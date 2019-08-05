import React from 'react';
import Card from './Card';
import { Redirect } from 'react-router-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import  axios from 'axios';
export default class Main extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[],
            movies2:[]
        }
        this.selectedMovie= this.selectedMovie.bind(this);
    }

    selectedMovie({id,title,genre,rating}){
        this.setState({
            movies:[{
                id:id,
                movieName:title,
                genre:genre,
                rating:rating
            }]}
        )
    }

    componentDidMount(){
        console.log(`Component is mounted on the DOM`);
        axios.get('http://localhost:8000/apiRoutes/movies/')
        .then(res=>res.data)
        .then(data=> data.data)
        .then(data=>
            
           this.setState({
               movies2:data,
               movies:data,
               isLoading:false
           })
            );
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {
                        
                        this.state.movies.map((movie,index) => <Card 
                                                key={index}
                                                id={movie._id} 
                                                title={movie.movieName} 
                                                genre={movie.genre}
                                                rating={movie.rating}
                                                selectedMovie={this.selectedMovie} />)
                    }
               </div>
            </div>
        )
    }
}