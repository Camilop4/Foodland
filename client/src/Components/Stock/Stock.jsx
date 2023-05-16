import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

import "./Stock.css"

const Stock = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const productList = products.AllProducts.products;

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const maxPages = 10; // Número máximo de páginas a mostrar en la paginación

  // Calcular índices de productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(productList?.length / productsPerPage);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Botones para ir a la página siguiente y anterior
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Botones para ir a la primera y última página
  const goToFirstPage = () => {
    setCurrentPage(1);
  };
  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  // Calcular el número de páginas a mostrar en la paginación
  const paginationPages = [];
  const paginationStart = Math.max(currentPage - Math.floor(maxPages / 2), 1);
  const paginationEnd = Math.min(paginationStart + maxPages - 1, totalPages);
  for (let i = paginationStart; i <= paginationEnd; i++) {
    paginationPages.push(i);
  }

  return (
    <div className="stockList">
      <table>
        <thead>
          <tr>
            <th className="thStock1">Name</th>
            <th className="thStock2">Category</th>
            <th className="thStock2">Stock</th>
            <th className="thStock2">Brand</th>
            <th className="thStock2">Price</th>
            <th className="thStock3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts?.map((p) => (
            <tr key={p._id}>
              <td className={p.active ? "" : "inactive"}>{p.name}</td>
              <td className={p.active ? "" : "inactive"}>{p.category}</td>
              <td className={p.active ? "" : "inactive"}>{p.stock}</td>
              <td className={p.active ? "" : "inactive"}>{p.brand}</td>
              <td className={p.active ? "" : "inactive"}>usd${p.price}</td>
              <td>
                <Link to={`/editproduct/${p._id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     {/* Paginado */}
<div className="pagination">

<button onClick={goToPreviousPage} disabled={currentPage === 1}>
      Prev
    </button>
    <button onClick={goToFirstPage} disabled={currentPage === 1}>
First
</button>
    {paginationPages.map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={currentPage === page ? "active" : ""}
      >
        {page}
      </button>
    ))}
<button onClick={goToLastPage} disabled={currentPage === totalPages}>
      Last
    </button>
    <button onClick={goToNextPage} disabled={currentPage === totalPages}>
      Next
    </button>

    
  </div>
</div>
);
};

export default Stock;
