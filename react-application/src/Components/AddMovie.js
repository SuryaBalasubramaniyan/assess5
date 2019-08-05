import React from 'react';
import  axios from 'axios';
import { Button, Form } from 'react-bootstrap';
export default class AddMovie extends React.Component{
    constructor(){
        super();
       
        this.onSubmit= this.onSubmit.bind(this);
    }

    

    onSubmit(e) {
        e.preventDefault();
        
        axios.post(`http://localhost:8000/apiRoutes/movies`, {
            _id : this.id.value,
            movieName:this.movieName.value,
            genre:this.genre.value,
            rating:this.rating.value

        })
        .then(res => {
             console.log(res)
        })
        .catch(error => {
             console.log(error)
        })
    }
            

    componentDidMount(){
       // const id=this.props.match.params.id;
       //console.log(` id is $id}`)
        console.log(`Component is mounted on the DOM`);
        
    }
    render(){
        return(
            <div>
                ENTER THE  DETAILS
                <Form>
  <Form.Group controlId="formBasicId">
    <Form.Label>Id</Form.Label>
    <Form.Control type="text" placeholder="Enter id" ref={(c) => this.id = c} name="Id"/>
  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" ref={(c) => this.movieName = c} name="movieName"/>
  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Label>Genre</Form.Label>
    <Form.Control type="text" placeholder="Enter genre" ref={(c) => this.genre = c} name="genre"/>
  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" placeholder="Enter rating" ref={(c) => this.rating = c} name="rating"/>
  </Form.Group>
         
            <Button type="submit"  onClick={this.onSubmit} >Save</Button>
            </Form>
            </div>
        )
    }
}