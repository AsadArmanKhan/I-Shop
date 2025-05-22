import { createContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
// const axios from 'axios'
import axios from "axios";
// import React, { useContext } from 'react'

const MainContext = createContext()
function Context(props) {
    const [Categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [products, setProducts] = useState([]);
    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY_URL = "/category"
    const COLOR_URL = "/color"
    const PRODUCT_URL = "/product"
    const ADMIN_URL = "/admin"

    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

    function getCategory(id = null) {
        let URL = API_BASE_URL + CATEGORY_URL;
        //http://localhost:5000/category/id
        if (id != null) {
            URL += `/${id}`

        }

        axios.get(URL).then(
            (response) => {
                if (response.data.flag === 1) {
                    setCategories(response.data.categorise)
                    // console.log(response.data.categorise);
                }
            }
        ).catch(
            (error) => {
                setCategories([]);
            }
        )
    }

    function getColors(id = null) {
        let URL = API_BASE_URL + COLOR_URL
        //http://localhost:5000/category/id
        if (id != null) {
            URL = URL + `/${id}`

        }
        axios.get(URL).then(
            (response) => {
                if (response.data.flag === 1) {
                    setColors(response.data.colors)
                }

            }
        ).catch(
            (error) => {
                setColors([])
            }
        )
    }


    function getProduct(id = null) {
        let URL = API_BASE_URL + PRODUCT_URL
        //http://localhost:5000/category/id
        if (id != null) {
            URL = URL + `/${id}`

        }
        axios.get(URL).then(
            (response) => {
                if (response.data.flag === 1) {
                    setProducts(response.data.products)
                }

            }
        ).catch(
            (error) => {
                setProducts([])
            }
        )
    }





    return (
        <MainContext.Provider value={{
            API_BASE_URL, CATEGORY_URL,ADMIN_URL, notify, getCategory, Categories,
            COLOR_URL, getColors, colors, PRODUCT_URL, getProduct, products
        }}>
            <ToastContainer position="top-right"
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
            {
                props.children
            }
        </MainContext.Provider>
    )
}

export default Context;
export { MainContext };