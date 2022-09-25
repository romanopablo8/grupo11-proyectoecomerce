//import React from 'react';
import React, {Component}from "react";
import MovieList from './MovieList';

class MoviesList extends Component {
	constructor(props){
	  super(props)
	  this.state ={
	  movList : []
	  }
	  }
	  
	  componentDidMount(){
		fetch('http://localhost:3000/api/products')
		.then(respuesta =>{
		return respuesta.json()
		})
		.then(movies =>{
		  console.log(movies)
		this.setState({movList:movies.data.products})
		})
		.catch(error => console.log(error))
		}
		
	  
	
		render () {
			
		  return (
			
		  <React.Fragment>
			    {/*<!-- PRODUCTS LIST -->*/}
				 {/*<!- Categories in DB ->*/ }
				<h1 className="h3 mb-2 text-gray-800"> Todos los productos de la base de datos</h1>
					
		 
		  <div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
							<tr>
<th>id</th>
<th>Nombre</th>
<th>Descripcion</th>
<th>Categoria</th>
<th>url</th>
</tr>
</thead>
<tfoot>
<tr>
<th>id</th>
<th>Nombre</th>
<th>Descripcion</th>
<th>Categoria</th>
<th>url</th>
</tr>
</tfoot>
<tbody>
								{
								this.state.movList.map( ( movie , i) => {
									return <MovieList { ...movie} key={i}/>
								})
								}
</tbody>									
								
							
							
							
						</table>
					</div>
				</div>
			</div>
		  </React.Fragment>
		  )
	}
	
	
	
	}


export default MoviesList;