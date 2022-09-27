import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect, useRef } from "react";

function ContentRowTop() {
  const [product, setproduct] = useState([]);
  const [product1, setproduct1] = useState([]);
  const [product2, setproduct2] = useState([]);
  const [product4, setproduct4] = useState([]);
  useEffect(() => {
    // declare the async data fetching function
    fetch("http://localhost:3000/api/products/total")
      .then((response) => response.json())
      .then((data) => {
        setproduct1(data.meta.total);
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setproduct2(data.data.count);
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => {
        setproduct4(data.data.count);
      })
      .catch((error) => console.log(error));

    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setproduct(data.data.countByCategory);
      })
      .catch((error) => console.log(error));
  }, []);

  let productInDataBase = {
    color: "primary",
    titulo: "Total de productos",
    valor: product2.toString(),
    icono: "fas fa-film",
  };

  let amount = {
    color: "success",
    titulo: "Total de usuarios",
    valor: product4.toString(),
    icono: "fas fa-award",
  };

  let user = {
    color: "warning",
    titulo: "Total de categorías",
    valor: product1.toString(),
    icono: "fas fa-user",
  };

  let cardProps = [productInDataBase, amount, user];

  return (
    <div className="row">
      {cardProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowTop;
