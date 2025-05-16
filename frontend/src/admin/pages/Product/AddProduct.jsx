import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select';
import { MainContext } from '../../../Context';
import axios from 'axios';
// import { colourOptions } from '../data';

export default function AddProduct() {
    const { API_BASE_URL, CATEGORY_URL, COLOR_URL, getColor, color, notify, getCategory, Categories, PRODUCT_URL } = useContext(MainContext)
    const { selcolors, setSelColors } = useState([]);


    const nameref = useRef();
    const slugref = useRef();
    const orignalPriceRef = useRef();
    const discountPercentRef = useRef();
    const finalPriceRef = useRef();

    // const fileRef = useRef();

    const ChangeHandler = () => {
        const name = nameref.current.value;
        const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        slugref.current.value = slug;
    }
    function finalPrice() {
        const orignalPrice = orignalPriceRef.current.value;
        const discountPercent = discountPercentRef.current.value;
        const finalPrice = Math.floor(orignalPrice - (orignalPrice * (discountPercent / 100)));
        finalPriceRef.current.value = finalPrice


    }
    function submitHandler(e) {
        const formData = new formData()
        e.preventDefault();
        formData.append("name", nameref.current.value);
        formData.append("slug", slugref.current.value);
        formData.append("orignalPrice", orignalPriceRef.current.value);
        formData.append("finalPrice", finalPriceRef.current.value);
        formData.append("discountPercent", discountPercentRef.current.value);
        formData.append("thumbnail", e.target.thumbnail.files[0]);
        formData.append("shortDescription", e.target.shortDescription.value);
        formData.append("longDescription", e.target.longDescription.value);
        formData.append("categoryId".e.target.categoryId.value);
        formData.append("colors", JSON.stringify(setSelColors));
        axios.post(`${API_BASE_URL}${PRODUCT_URL}`)
    }

    // const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-10 px-6 mx-auto max-w-3xl lg:py-16">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                        🚀 Add a New Product
                    </h2>
                    <Link to={"/admin/product"}>
                        <button
                            onClick={() => navigate("/view-products")}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                        >
                            View Products
                        </button>
                    </Link>
                </div>

                <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                Product Name
                            </label>
                            <input
                                type="text"
                                ref={nameref}
                                onChange={ChangeHandler}
                                name="name"
                                id="name"
                                className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                placeholder="Type product name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                Slug
                            </label>
                            <input
                                type="text"
                                ref={slugref}
                                disabled
                                name="slug"
                                id="slug"
                                className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                placeholder="Type slug"
                                required
                            />
                        </div>
                        <div className="col-span-2 grid grid-cols-3 gap-1">
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Orignal Price
                                </label>
                                <input
                                    ref={orignalPriceRef}
                                    onChange={finalPrice}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    placeholder="₹2999"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">
                                    Discount %
                                </label>
                                <input
                                    ref={discountPercentRef}
                                    onChange={finalPrice}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="₹2999"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">
                                    Final Price
                                </label>
                                <input
                                    type="number"
                                    ref={finalPriceRef}
                                    readOnly
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    placeholder="₹2999"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-2 grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Category
                                </label>
                                {/* <Select options={options} /> */}
                                <Select
                                    name='categoryId'
                                    id="category"
                                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    required
                                    options={
                                        Categories.map(
                                            (cat, index) => {
                                                return { value: cat._id, label: cat.name }
                                            }
                                        )
                                    }
                                />
                            </div>

                            <div>
                                <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Color
                                </label>
                                <Select

                                    onChange={
                                        (color) => {
                                            const col = color.map(o => o.value)
                                            setSelColors(col);

                                        }
                                    }
                                    id="color"
                                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                                    required
                                    isMulti closeMenuOnSelect={false}
                                    options={
                                        Categories.map(
                                            (color, index) => {
                                                return { value: color._id, label: color.name }
                                            }
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="shortDesc" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Thumbnail / Img
                        </label>
                        <input type="file"
                            name='thumbnail'
                            id='thumbnail'
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600
                         text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500
                          focus:border-indigo-500 block w-full p-2.5 resize-none"
                        />



                    </div>
                    <div>
                        <label htmlFor="shortDesc" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Short Description
                        </label>
                        <textarea
                            name='shortDescription'
                            id="shortDesc"
                            rows="3"
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 resize-none"
                            placeholder="Your description here"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="longDesc" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                            Long Description
                        </label>
                        <textarea
                            id="longDesc"
                            name='longDescription'
                            rows="5"
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 resize-none"
                            placeholder="Your description here"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        Add Product
                    </button>
                </form>
            </div>
        </section>
    )
}
