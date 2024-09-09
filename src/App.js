import React, {useState} from "react";
import ProductList from "./Components/ProductList/ProductList";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/FilterProduct";

let products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 12,
    stock: 3
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
    stock: 5
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
    stock: 7
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
    stock: 9
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
    stock: 11
  },
];


function App() {

  const [newProductList, setnewProductList] = useState(products);
  const [filter, setFilter] = useState('All')

  const createProduct = (product) => {
    product.pID = newProductList.length + 1;
    setnewProductList([product, ...newProductList]);
  }

  let newFilteredList = newProductList.filter((index) => {
    if(filter === 'Available') return index.isAvailable === true;
    else if (filter === 'Unavailable') return index.isAvailable === false;
    else return index;
  })

  const filterChangeHandler = (e) => {
      setFilter(e.target.value);
  }

  return (
    <div className="bg-gradient-to-bl from-gray-300 via-green-800 to-gray-300 h-max">
      <CreateProduct createProduct={createProduct} />
      <FilterProduct filterChangeHandler={filterChangeHandler} />
      <ProductList newProductList={newFilteredList} />
    </div>
  );
}

export default App;
