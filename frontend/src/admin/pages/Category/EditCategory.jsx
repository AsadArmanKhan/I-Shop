import { useContext, useRef, useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import { MainContext } from "../../../Context";
import { useEffect } from "react";

export default function EditCategory() {
    // const [category, setCategory] = useState({})

    const { categoryId } = useParams();
    // console.log(categoryId);
    // return
    // const formData = new FormData();

    const { API_BASE_URL, CATEGORY_URL, notify, getCategory, Categories } = useContext(MainContext)
    const nameref = useRef();
    const slugref = useRef();
    // const fileRef = useRef();

    const ChangeHandler = () => {
        const name = nameref.current.value;
        const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        slugref.current.value = slug;
    }
    // console.log(Categories);


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", nameref.current.value);
        formData.append("slug", slugref.current.value);
        formData.append("Image", e.target.categoryImage.files[0]);
        // console.log(e.target.categoryImage.files[0]);
        // return
        // formData.append("file", fileRef.current.files[0]);

        axios.put(API_BASE_URL + CATEGORY_URL + `/update/${categoryId}`, formData).then(
            (res) => {
                notify(res.data.msg, res.data.flag);
                if (res.data.flag === 1) {
                    e.target.reset();
                }
            }
        ).catch(
            (err) => {
                console.log(err);
                notify("Something is Wrong", 0)
            }
        )
    }




    useEffect(
        () => {
            getCategory(categoryId)
        }, [categoryId]
    )

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
                <h2 className="text-2xl font-semibold mb-4">Edit Category</h2>

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
                            name="Image"
                            defaultValue={Categories?.name}
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
                            defaultValue={Categories?.slug}
                            readOnly
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Uploaded Image or File
                        </label>
                        <input
                            type="file"
                            // ref={fileRef}
                            name="categoryImage"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <img width="250px" src={`${API_BASE_URL}/images/categories/${Categories?.Image}`} alt="" />

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow transition-all duration-300">
                        <FaPlus />
                        Edit Category
                    </button>
                </form>
            </div>
        </div>
    );
}
