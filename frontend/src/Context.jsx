// import { useEffect } from "react";
// import { createContext, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// // const axios from 'axios'
// import axios from "axios";
// // import React, { useContext } from 'react'

// const MainContext = createContext();
// function Context(props) {
//   const [Categories, setCategories] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [products, setProducts] = useState([]);
//   const API_BASE_URL = "http://localhost:5000";
//   const CATEGORY_URL = "/category";
//   const COLOR_URL = "/color";
//   const PRODUCT_URL = "/product";
//   const ADMIN_URL = "/admin";
//   const USER_URL = "/user";

//   useEffect(() => {
//     getCategory();
//     getProduct();
//     getColors();
//   }, []);

//   const notify = (msg, flag) =>
//     toast(msg, { type: flag ? "success" : "error" });

//   function getCategory(id = null) {
//     let URL = API_BASE_URL + CATEGORY_URL;
//     if (id != null) {
//       URL += `/${id}`;
//     }

//     axios
//       .get(URL)
//       .then((response) => {
//         if (response.data.flag === 1) {
//           const sortedCategories = [...response.data.categorise].sort((a, b) =>
//             a.name.localeCompare(b.name)
//           );
//           setCategories(sortedCategories);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         setCategories([]);
//       });
//   }

//   // function getCategory(id = null) {
//   //     let URL = API_BASE_URL + CATEGORY_URL;
//   //     //http://localhost:5000/category/id
//   //     if (id != null) {
//   //         URL += `/${id}`

//   //     }

//   //     axios.get(URL).then(
//   //         (response) => {
//   //             if (response.data.flag === 1) {
//   //                 setCategories(response.data.categorise)
//   //                 // console.log(response.data.categorise);
//   //             }
//   //         }
//   //     ).catch(
//   //         (error) => {
//   //             setCategories([]);
//   //         }
//   //     )
//   // }

//   function getColors(id = null) {
//     let URL = API_BASE_URL + COLOR_URL;
//     //http://localhost:5000/category/id
//     if (id != null) {
//       URL = URL + `/${id}`;
//     }
//     axios
//       .get(URL)
//       .then((response) => {
//         if (response.data.flag === 1) {
//           setColors(response.data.colors);
//         }
//       })
//       .catch((error) => {
//         setColors([]);
//       });
//   }

//   function getProduct(
//     id = null,
//     limit = 0,
//     categorySlug = null,
//     colorSlug = null,
//     minPrice = null,
//     maxPrice = null
//   ) {
//     // console.log(limit, "limit");

//     let URL = API_BASE_URL + PRODUCT_URL;
//     //http://localhost:5000/category/id
//     if (id != null) {
//       URL = URL + `/${id}`;
//     }
//     const query = new URLSearchParams();

//     query.append("limit", limit);
//     if (categorySlug) {
//       query.append("categorySlug", categorySlug);
//     }
//     if (colorSlug) {
//       query.append("colorSlug", colorSlug);
//     }
//     if (minPrice) {
//       query.append("minPrice", minPrice);
//     }
//     if (maxPrice) {
//       query.append("maxPrice", maxPrice);
//     }

//     axios
//       .get(URL + "?" + query)
//       .then((response) => {
//         if (response.data.flag === 1) {
//           setProducts(response.data.products);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         setProducts([]);
//       });
//   }

//   return (
//     <MainContext.Provider
//       value={{
//         API_BASE_URL,
//         CATEGORY_URL,
//         ADMIN_URL,
//         notify,
//         getCategory,
//         Categories,
//         COLOR_URL,
//         getColors,
//         colors,
//         PRODUCT_URL,
//         getProduct,
//         products,
//         USER_URL,
//       }}
//     >
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick={false}
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//       {props.children}
//     </MainContext.Provider>
//   );
// }

// export default Context;
// export { MainContext };

import { useEffect, createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const MainContext = createContext();

function Context(props) {
  const [Categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [products, setProducts] = useState([]);

  // ✅ THEME TOGGLE STATE
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const API_BASE_URL = "http://localhost:5000";
  const CATEGORY_URL = "/category";
  const COLOR_URL = "/color";
  const PRODUCT_URL = "/product";
  const ADMIN_URL = "/admin";
  const USER_URL = "/user";

  useEffect(() => {
    getCategory();
    getProduct();
    getColors();
  }, []);

  const notify = (msg, flag) =>
    toast(msg, { type: flag ? "success" : "error" });

  function getCategory(id = null) {
    let URL = API_BASE_URL + CATEGORY_URL;
    if (id != null) {
      URL += `/${id}`;
    }

    axios
      .get(URL)
      .then((response) => {
        if (response.data.flag === 1) {
          const sortedCategories = [...response.data.categorise].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCategories(sortedCategories);
        }
      })
      .catch((error) => {
        console.log(error);
        setCategories([]);
      });
  }

  function getColors(id = null) {
    let URL = API_BASE_URL + COLOR_URL;
    if (id != null) {
      URL += `/${id}`;
    }
    axios
      .get(URL)
      .then((response) => {
        if (response.data.flag === 1) {
          setColors(response.data.colors);
        }
      })
      .catch(() => {
        setColors([]);
      });
  }

  function getProduct(
    id = null,
    limit = 0,
    categorySlug = null,
    colorSlug = null,
    minPrice = null,
    maxPrice = null
  ) {
    let URL = API_BASE_URL + PRODUCT_URL;
    if (id != null) URL += `/${id}`;

    const query = new URLSearchParams();
    query.append("limit", limit);
    if (categorySlug) query.append("categorySlug", categorySlug);
    if (colorSlug) query.append("colorSlug", colorSlug);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);

    axios
      .get(URL + "?" + query)
      .then((response) => {
        if (response.data.flag === 1) {
          setProducts(response.data.products);
        }
      })
      .catch((error) => {
        console.log(error);
        setProducts([]);
      });
  }

  return (
    <MainContext.Provider
      value={{
        API_BASE_URL,
        CATEGORY_URL,
        COLOR_URL,
        PRODUCT_URL,
        ADMIN_URL,
        USER_URL,
        notify,
        getCategory,
        Categories,
        getColors,
        colors,
        getProduct,
        products,

        // ✅ EXPORT THEME
        isDark,
        toggleTheme,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {props.children}
    </MainContext.Provider>
  );
}

export default Context;
export { MainContext };
