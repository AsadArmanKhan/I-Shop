import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { FiEdit, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MainContext } from '../../../Context';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';
// import 'sweetalert2/src/sweetalert2.scss'



const ViewColor = () => {
    const admin = useSelector((state) => state.admin)
    const { API_BASE_URL, COLOR_URL, CATEGORY_URL, getColors, colors, notify } = useContext(MainContext);
    const { getCategories, categories } = useContext(MainContext);

    function statusHandler(id) {
        axios.patch(API_BASE_URL + COLOR_URL + `/status/${id}`
            , {}, {
            headers: {
                Authorization: admin.token
            }
        }
        ).then(
            (resp) => {
                notify(resp.data.msg, resp.data.flag)
                if (resp.data.flag === 1) {
                    getColors()
                }

            }
        ).catch(
            (err) => {
                console.log(err)
                notify("Something is wrong", 0)

            }
        )
    }

    // const admin = useSelector((state) => state.admin)
    function deleteHandler(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                // const token = localStorage.getItem("token")
                axios.delete(`${API_BASE_URL}${COLOR_URL}/delete/${id}`, {
                    headers: {
                        Authorization: admin.token
                    }
                }).then(
                    (resp) => {
                        notify(resp.data.msg, resp.data.flag)
                        if (resp.data.flag === 1) {
                            // getCategories()
                            getColors()
                        }

                    }
                ).catch(
                    (err) => {
                        console.log(err)
                        notify("kuch dikkat h", 0)

                    })
            }
        });
    }


    useEffect(
        () => {
            getColors()
        },
        []
    )

    return (
        <div className="p-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Color / View</h2>
                    <Link to="/admin/color/add" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">  <FiPlus className="text-lg" />
                        Add Color</Link>

                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                            <tr>
                                <th className="p-4 text-left">ID</th>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Slug</th>
                                <th className="p-4 text-left">HexCode</th>
                                <th className="p-2 text-left">Status</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {/* Example rows */}
                            {Array.isArray(colors) && colors.map((color, index) => (
                                <tr key={color._id} className=" shadow hover:bg-gray-50">
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4 font-medium">{color.name}</td>
                                    <td className="p-4">{color.slug}</td>
                                    <td className="p-4 ">
                                        {color.hexcode}
                                    </td>
                                    <td className="p-4">
                                        <button onClick={() => statusHandler(color._id)} className={`text-white px-4 rounded-2xl ${color.status ? 'bg-green-400' : 'bg-red-500'} hover:text-yellow-600 transition`}>{
                                            color.status == true ?
                                                "Active" : "Inactive"
                                        }</button>
                                    </td>

                                    <td className="p-4 flex justify-center gap-4">
                                        <Link className="text-yellow-500 hover:text-yellow-600 transition" to={`/admin/color/edit/${color._id}`} >

                                            <FiEdit className="text-lg" />
                                        </Link>
                                        <button onClick={() => deleteHandler(color._id)} className="text-yellow-500 hover:text-yellow-600 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    );
};

export default ViewColor;