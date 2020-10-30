import React, {Fragment} from 'react';

import {Card} from '../components/Card/card.js'

const API = process.env.API;


class List extends React.Component {
    constructor() {
        super();
        this.state= {
            data: [],
            searchTerm: '',
            loading: true
        }
    
        this.handleSubmit= this.handleSubmit.bind(this);
    }

   async componentDidMount () {
        const res= await fetch(`${API}&s=godfather`)
        const resJson= await res.json();
        this.setState({data: resJson['Search'], loading: false})
        
    }

    async handleSubmit(e) {
        e.preventDefault();
        const $mess = document.querySelector("#message")
        
        if(!this.state.searchTerm){
            $mess.textContent= "No hay resultados"
        } else{

            
            const res= await fetch(`${API}&s=${this.state.searchTerm}`)
            const response = await res.json();
            if(!response['Search']) return $mess.textContent= "No hay resultados";
            this.setState({data: response['Search'], searchTerm: ''})
            $mess.textContent=''
        }
          
    }

        render(){
            const {data, loading} = this.state; 

            if(loading) {
                return <h4 className="text-light">Loading...</h4>
            } 

         return (   
            <>
                    <div className="row">
                        <div className="col-md-4 offset-md-4 p-4 mt-2 mb-4">
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                    type="text"
                                    className= "form-control"
                                    placeholder="Search..."
                                    onChange= {e => this.setState({searchTerm: e.target.value})}
                                    autoFocus 
                                    value={this.state.searchTerm}
                                />
                            </form>
                            <span className="text-white" id="message"></span>
                        </div>
                    </div>
           
                    <div className="row">
                
                    {
                    data.map(movie =>{
                        return  <Card movie={movie} key={movie.imdbID}/>
                    })
                    }
                
                     </div>
            </>
         )
        }
}


export default List