import { useContext, useRef, useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"
import { MainContext } from "../../../Context";

export default function AddColor() {

    const formData = new FormData();

    const { API_BASE_URL, COLOR_URL, notify } = useContext(MainContext)
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

        const data = {
            name: nameref.current.value,
            slug: slugref.current.value,
            hexcode: e.target.hexcode.value
        }


        axios.post(API_BASE_URL + COLOR_URL + "/create", data).then(
            (res) => {
                notify(res.data.msg, res.data.flag);
                if (res.data.flag === 1) {
                    e.target.reset();
                }
            }
        ).catch(
            (err) => {
                console.log(err);
                notify("Dikkat Add color me h ", 0)
            }
        )
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            {/* Go Back Button */}
            <Link to={"/admin/color"}>
                <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow mb-6 transition-all duration-300">
                    <FaArrowLeft />
                    Go Back
                </button>
            </Link>

            {/* Form Card */}
            <div className="bg-white p-6 rounded-lg shadow border">
                <h2 className="text-2xl font-semibold mb-4">Create New Color</h2>

                <form onSubmit={submitHandler} className="space-y-4">
                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
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
                            Hex Code
                        </label>
                        <input
                            type="color"
                            // ref={fileRef}
                            name="hexcode"
                            className="w-full h-[50px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow transition-all duration-300">
                        <FaPlus />
                        Create Color
                    </button>
                </form>
            </div>
        </div>
    );
}
