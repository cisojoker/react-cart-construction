 // App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/footer.js";
import Additem from "./components/Additem.js";
function App() {
  const initialProductList = [
    {
      price: 100000,
      name: "iphone pro",
      quantity: 0,
    },
    {
      price: 1234658,
      name: "realme pro",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(initialProductList);
  const [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalamount = totalAmount;
    newtotalamount += newProductList[index].price;
    newProductList[index].quantity++;
    setProductList(newProductList);
    settotalAmount(newtotalamount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalamount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalamount -= newProductList[index].price;
    }

    setProductList(newProductList);
    settotalAmount(newtotalamount);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    settotalAmount(0);
  };
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newtatalamount = totalAmount;
    newtatalamount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    settotalAmount(newtatalamount);
  };

  const additem = (name, price) => {
    let newproductlist = [...productList];
    newproductlist.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newproductlist);
  };
  return (
    <>
      <Navbar />
      <main className="container mt-2">
        <Additem additem={additem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
