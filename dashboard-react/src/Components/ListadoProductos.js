import React from "react";

import { useState, useEffect } from "react";
function ListadoProductos() {
  const [id, setid] = useState(1);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchvalor() {
    const response = await fetch("http://localhost:3000/api/users/");
    const json = await response.json();
    console.log(json);
    setid(json.data.count);
  }

  async function fetchProduct(id) {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/users/" + id);
    const json = await response.json();
    console.log(json);
    setProduct(json.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchvalor();
    fetchProduct(id);

    console.log("se ha ejecutado el hook");
  }, [id]);

  if (!product) {
    return "loading...";
  }
  console.log(product);

  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}

      {/*<!-- Content Row Last Movie in Data Base -->*/}

      {/*<!-- Last Movie in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Ultimo usuario de la base de datos
            </h5>
          </div>
          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <div>
              {
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      style={{ width: 40 + "rem" }}
                      src={product.foto_perfil}
                      alt=" Star Wars - Mandalorian "
                    />
                  </div>

                  <p>Nombre : {product.firstname}</p>
                  <p>Apellido : {product.lastname}</p>
                  <p>Correo :{product.email}</p>
                  <p>id : {product.id}</p>

                  <a
                    className="btn btn-danger"
                    target="_blank"
                    rel="nofollow"
                    href="/"
                  >
                    View movie detail
                  </a>
                </div>
              }
            </div>
          )}
        </div>
      </div>
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}

export default ListadoProductos;
