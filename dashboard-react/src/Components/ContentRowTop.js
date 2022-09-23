import React from 'react';
//import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

import {useState, useEffect} from 'react';
function ContentRowTop() {
	
	const [id, setid] = useState(1);
	const [product, setProduct] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchvalor() {
		  const response = await fetch('http://localhost:3000/api/products/');
		  const json = await response.json();
		  console.log(json);
		  setid(json.data.count);
		   		}
		
	async function fetchProduct(id) {
		
		setIsLoading(true);
		  const response = await fetch('http://localhost:3000/api/products/'+id );
		  const json = await response.json();
		  console.log(json);
		   setProduct(json.data);
		setIsLoading(false);
		}
		  
	    useEffect(() => {
		fetchvalor()
		fetchProduct(id);
		
		console.log('se ha ejecutado el hook');
	  }, [id]);
	
	  if (!product) {
		return "loading...";
	  }
	  console.log(product);

   
  


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
				
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
					
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={product.image} alt=" Star Wars - Mandalorian "/>
									</div>
									{isLoading ? ( <div>Loading ...</div> ) : (<p>{}</p>)}
									<p>{product.descripcion}</p>
									<p>{product.price}</p>
									<p>{product.reference}</p>
									<p>{product.id}</p>
									
								
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;