import "./cards.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getByCategory, setProduct } from "../../redux/actions";
import { useParams } from "react-router-dom";
import Rating from "../Rating/rating";

const Filters = () => {
 

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  
  // filtrar por precio
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "min") {
      setMinPrice(value);
    } else if (name === "max") {
      setMaxPrice(value);
    }
    console.log("minPrice:", minPrice);
    console.log("maxPrice:", maxPrice);
  };


  // filtrar por rating
  const [rating, setRating] = useState(null); 

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    console.log("example", selectedRating)
  };
  

  
  const handleSubmit = () => {
    const filteredProducts = products.filter((product) => {
      return (
        product.price >= parseInt(minPrice) &&
        product.price <= parseInt(maxPrice) &&
        (rating === null || product.rating === rating)
      )
    });
    console.log(filteredProducts);
    dispatch(setProduct(filteredProducts)); 
    
  };

  return (
    <div>
    <fieldset>
      <label>Filter by price:</label>
      <div className="MinMax">
        $
        <input
          type="number"
          placeholder="Min"
          onChange={inputHandler}
          name="min"
        />{" "}
        -
        <input
          type="number"
          placeholder="Max" 
          onChange={inputHandler}
          name="max"
        />
      </div>
      <button type="submit" className="butonFilter" onClick={handleSubmit}>
        Filter
      </button>
    </fieldset>
  
    <fieldset>
      <label>Filter by rating:</label>
      <Rating onClick={handleRating} /> 
      <button type="submit" className="butonFilter" onClick={handleSubmit}>
        Filtrar
      </button>
    </fieldset>
  </div>
  );
};

export default Filters;
