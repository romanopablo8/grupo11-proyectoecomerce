import React, {Component}from "react";
import Genre from './Genre';

class GenresInDb extends Component {
constructor(props){
  super(props)
  this.state ={
  genreList : []
  }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/api/users/')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(genres =>{
      console.log(genres)
    this.setState({genreList: genres.users})
    })
    .catch(error => console.log(error))
    }
    
  

    render () {
      return (
        
      <React.Fragment>
      {/*<!- Categories in DB ->*/ }
      <div className="col-lg-6 mb-4"> 
      <div className="card shadow mb-4">
      <div className="card-header py-3"> 
      <h6 className="m-0 font-weight-bold text-gray-800" 
      onMouseOver={() => document.querySelector('#id-ok').classList.add('bg-secondary')} 
      onMouseOut={() => document.querySelector('#id-ok').classList.remove('bg-secondary')}>Genres in Data Base 2</h6> 
      </div>
      <div className="card-body " id = "id-ok">
      <div className="row">
       
        {
      this.state.genreList.map((genre, index)=>{
      return <Genre {...genre} key={index} />
      })     }
      </div>
      </div>
      </div>
      </div>
      
      </React.Fragment>
      )
}



}



export default GenresInDb;