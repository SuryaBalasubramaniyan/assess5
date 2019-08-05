import React from 'react';
import SingleCard from './SingleCard';
import  axios from 'axios';
export default class MovieDetails extends React.Component{
    constructor(){
        super();
        this.state={
            movie:[]
        }
       
        this.onSubmit= this.onSubmit.bind(this);
    }

    

    onSubmit(e) {
        e.preventDefault();
        let id = this.id.value;
        console.log(`id is ${id}`);
        axios.get(`http://localhost:8000/apiRoutes/movies/${id}`)
        .then(res=>res.data)
        .then(data=>data.data)
        .then(data=>
            
           this.setState({
               movie:data,
               isLoading:false
           })
            )
    }

    componentDidMount(){
       // const id=this.props.match.params.id;
       //console.log(` id is $id}`)
        console.log(`Component is mounted on the DOM`);
        
    }
    render(){
        return(
            <div>
            <form>
            ENTER ID: <input type="text"  ref={(c) => this.id = c} name="title" />
            </form>
            <button className="btn btn-primary" type="button" onClick={this.onSubmit} >Save</button>
            
                    {
                        <div className={this.props.shouldHide ? 'hidden' : ''}>
                        <SingleCard 
                              id={this.state.movie._id} 
                              title={this.state.movie.movieName} 
                              genre={this.state.movie.genre}
                              rating={this.state.movie.rating}
                               />
                               </div>
                    }
              
            </div>
        )
    }
}