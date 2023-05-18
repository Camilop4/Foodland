import React, {useState, useEffect} from "react";
import {useParams, NavLink, Link} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import Filters from "./Filters"
import Loader from "../Loader/Loader"
import ProductCard from "./productCard"
import swal from "sweetalert"

//IMPORT ACTIONS
import { handle_sorts, getByCategory, getAllProducts, serachFalse } from "../../redux/actions/productActions";
import { updateCart} from "../../redux/actions/cartActions";
//IMPORT LOCALSTORE
import useLocalStore from "../../hooks/useLocalStore";


const ProductsContainer = () => {

  /* =================== TOKEN USER ===================*/
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


  const { categoriesId } = useParams();

  /* IMPORT STATES */
  const {products, display, filterState, isSearch } = useSelector((state) => state.products);

  /* PAGINADO */
  const [numeroPagina, setNumeroPagina] = useState(1);

  const grupo = 6;
  const conteoFinal = numeroPagina * grupo;
  const conteoInicial = conteoFinal - grupo;


  const aux =
  products && products?.slice
      ? products?.slice(conteoInicial, conteoFinal)
      : [];

  const page = [];

  const pageNum = Math.ceil(products?.length / grupo);

  for (let i = 1; i <= pageNum; i++) {
    page.push(i);
  }

  // console.log(pageNum, "AAAAAAAA");

  /* FUNCION DE ORDENAMIENTO  */

  function handleSorts(e) {
    e.preventDefault();
    dispatch(handle_sorts(e.target.value))
  }

  /* DISPATCH PARA TRAER LOS PRODUCTOS */
  const dispatch = useDispatch();
  // ======== Traigo el LocalStore ====
  const [cart, setCart] = useLocalStore("Carrito", []);

  // ======= funcion add product =====
  const AddProductoToCart = (e, idProducto,data) => {
    e.preventDefault();
    const { id, name, price, image, description, slug } = data;
    const existingItem = cart.findIndex((item) => item.id === idProducto);
    // =============== Verifico si existe previamente ========
    if (existingItem !== -1) {
      // =========== Si existe sumo 1 a la cantidad pero no lo agrego al carrito =====
      cart[existingItem].quantity += 1;
      setCart(cart);
      dispatch(updateCart(cart))
      swal({
        text:"product added to cart!",
        icon: "success",
      });
    } else {
      setCart([
        ...cart,
        { id, name, price, image, description, quantity: 1, slug },
      ]);
      dispatch(updateCart([
        ...cart,
        { id, name, price, image, description, quantity: 1, slug },
      ]));
      swal({
        text:"product added to cart!",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    // si esta en true me despacha la accion que me trae los prod por
    if (filterState && !isSearch) {
      dispatch(getAllProducts());
      dispatch(getByCategory(categoriesId));  
       } else { dispatch (serachFalse())}
  }, [dispatch]);
if (userInfo?.isAdmin){
  return(<div className="productsContainer">
  <div className='select_and_breadcrumb'>
  <Link to="/">
          <button className="btnHome">BACK TO HOME</button>
        </Link>
  <div className="breadcrumb">
            <NavLink to="/">
              Categories  
              </NavLink>
              <p>/</p>
             <NavLink active="true" onClick={() => dispatch(getByCategory(categoriesId))} to={`/categories/${categoriesId}`}>
              {categoriesId} 
             </NavLink>        
  </div>
 <select className="selectInput" onChange={handleSorts} >
  <option value="">Ordenar por</option>
  <option value="asc">A-Z</option>
  <option value="desc">Z-A</option>
  <option value="higher_price">Mayor precio</option>
  <option value="lower_price">Menor precio </option>
  <option value="best_score">Mayor puntuado</option>
  <option value="worst_score">Menor puntuado </option>
 </select>

</div>
  <div className="filter_and_products">
  <div className="sidebar"> 
 <Filters/> 
  </div>
  <div className="CardContainerProd">
  <div className="products">
  {display ? (
    <Loader />
  ) : (        
      Array.isArray(aux) && aux[0].stock ? (
        aux.map((product) => {
          const id= product['_id'];
          return(
          <ProductCard
          key={id}
          id={id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
          rating={product.rating}
          numReviews={product.numReviews}
          slug={product.slug}
          stock={product.stock}
          active={product.active}
          funtionOnchange={AddProductoToCart}
          />
        )})
      ) : (
        <p>Sin productos</p>
      )  
  )} 
  </div>
  <div className="containerPaginated">

<button
  className="btnPag"
  onClick={() => setNumeroPagina(numeroPagina - 1)}
  disabled={numeroPagina === 1}
>
  Back
</button>
{page.map((page) => (
  <button
    key={page}
    className={`btnPag ${page === numeroPagina ? "active" : ""}`}
    onClick={() => setNumeroPagina(page)}
  >
    {page}
  </button>
))}
<button
  className="btnPag"
  onClick={() => setNumeroPagina(numeroPagina + 1)}
  disabled={numeroPagina === pageNum}
>
  Next
</button>
</div>
  </div>
  </div>
</div>

);
} else 
return (
    <div className="productsContainer">
      <div className='select_and_breadcrumb'>
      <div className="breadcrumb">
                <NavLink to="/">
                  Categories  
                  </NavLink>
                  <p>/</p>
                 <NavLink active="true" onClick={() => dispatch(getByCategory(categoriesId))} to={`/categories/${categoriesId}`}>
                  {categoriesId} 
                 </NavLink>        
      </div>
     <select className="selectInput" onChange={handleSorts} >
      <option value="">Ordenar por</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
      <option value="higher_price">Mayor precio</option>
      <option value="lower_price">Menor precio </option>
      <option value="best_score">Mayor puntuado</option>
      <option value="worst_score">Menor puntuado </option>
     </select>

    </div>
      <div className="filter_and_products">
      <div className="sidebar"> 
     <Filters/> 
      </div>
      <div className="CardContainerProd">
      <div className="products">
      {display ? (
        <Loader />
      ) : (        
          Array.isArray(aux) ? (
            aux?.map((e) => {
              const id= e['_id'];
              return(
              <ProductCard
              key={id}
              id={id}
              name={e.name}
              price={e.price}
              image={e.image}
              description={e.description}
              rating={e.rating}
              numReviews={e.numReviews}
              slug={e.slug}
              stock={e.stock}
              active={e.active}
              funtionOnchange={AddProductoToCart}
              />
            )})
          ) : (
            <p>Sin productos</p>
          )  
      )} 
      </div>
      <div className="containerPaginated">
    
    <button
      className="btnPag"
      onClick={() => setNumeroPagina(numeroPagina - 1)}
      disabled={numeroPagina === 1}
    >
      Back
    </button>
    {page.map((page) => (
      <button
        key={page}
        className={`btnPag ${page === numeroPagina ? "active" : ""}`}
        onClick={() => setNumeroPagina(page)}
      >
        {page}
      </button>
    ))}
    <button
      className="btnPag"
      onClick={() => setNumeroPagina(numeroPagina + 1)}
      disabled={numeroPagina === pageNum}
    >
      Next
    </button>
    </div>
      </div>
      </div>
    </div>
  
  );
};

export default ProductsContainer;