import { useContext, useRef, useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"
import { MainContext } from "../../../Context";
import { useSelector } from "react-redux";

export default function AddCategory() {
    const admin = useSelector((state) => state.admin)
    console.log("admin in AddCategory:", admin);    
    console.log(admin);
    const formData = new FormData();

    const { API_BASE_URL, CATEGORY_URL, notify } = useContext(MainContext)
    const nameref = useRef();
    const slugref = useRef();
    // const fileRef = useRef();

    const ChangeHandler = () => {
        const name = nameref.current.value;
        const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        slugref.current.value = slug;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameref.current.value);
        formData.append("slug", slugref.current.value);
        formData.append("Image", e.target.categoryImage.files[0])
        // console.log(e.target.categoryImage.files[0]);
        // return
        // formData.append("file", fileRef.current.files[0]);
        // console.log("Token being sent:", admin?.token);

        axios.post(API_BASE_URL + CATEGORY_URL + "/create", formData,
            {
                headers: {
                    Authorization: admin?.token
                }
            })
            .then(
                (res) => {
                    notify(res.data.msg, res.data.flag);
                    if (res.data.flag === 1) {
                        e.target.reset();
                    }
                }
            ).catch(
                (err) => {
                    console.log("Add category me dikkat h", err);
                    notify("Add category me dikkat h ", 0)
                }
            )
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            {/* Go Back Button */}
            <Link to={"/admin/category"}>
                <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow mb-6 transition-all duration-300">
                    <FaArrowLeft />
                    Go Back
                </button>
            </Link>

            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg shadow border">
                <h2 className="text-2xl font-semibold mb-4">Create New Category</h2>

                <form onSubmit={submitHandler} className="space-y-4">
                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category Name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Electronics"
                            ref={nameref}
                            onChange={ChangeHandler}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Slug
                        </label>
                        <input
                            type="text"
                            ref={slugref}
                            placeholder="Auto-generated slug"
                            readOnly
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Upload File
                        </label>
                        <input
                            type="file"
                            // ref={fileRef}
                            name="categoryImage"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow transition-all duration-300">
                        <FaPlus />
                        Create Category
                    </button>
                </form>
            </div>
        </div>
    );
}
