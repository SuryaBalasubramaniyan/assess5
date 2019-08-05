import React,{Component} from 'react';

export default class SingleCard extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="card" style={{width: 18 +'rem', margin: 10+'px'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.genre}</p>
                    <p className="card-text">{this.props.rating}</p>
                    
                </div>
            </div>
        );
    }
}