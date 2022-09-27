import React, { Component } from "react";
//import Genre from './Genre';

class GenresInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genreList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((genres) => {
        console.log(genres);
        this.setState({ genreList: genres.data.countByCategory });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        {/*<!- Categories in DB ->*/}
        <div className="">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                className="m-0 font-weight-bold text-gray-800"
                onMouseOver={() =>
                  document.querySelector("#id-ok").classList.add("bg-secondary")
                }
                onMouseOut={() =>
                  document
                    .querySelector("#id-ok")
                    .classList.remove("bg-secondary")
                }
              >
                Categorias con totales en base de datos
              </h6>
            </div>
            <div className="card-body " id="id-ok">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                      lentes niños : {this.state.genreList.chicos}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                      Gafas de Sol : {this.state.genreList.GafasdeSol}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                      lentes : {this.state.genreList.lentes}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                      Deportivas : {this.state.genreList.Deportivas}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GenresInDb;
