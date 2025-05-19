import axios from 'axios';
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainContext } from '../../../Context';

export default function MultipleImage() {
    const { notify, API_BASE_URL, PRODUCT_URL } = useContext(MainContext);
    const { productId } = useParams();

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let image of e.target.images.files) {
            formData.append("images", image);
        }

        axios.patch(API_BASE_URL + PRODUCT_URL + "/multiple-images/" + productId, formData)
            .then((resp) => {
                notify(resp.data.msg, resp.data.flag);
                if (resp.data.flag === 1) {
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.log(err);
                notify("Something is wrong", 0);
            });
    };

    return (
        <section className="bg-white min-h-screen">
            <div className="py-10 px-6 mx-auto max-w-5xl lg:py-20">
                
                {/* Back Button */}
                <div className="mb-6">
                    <Link to="/admin/product">
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-200">
                            ← Back to View Products
                        </button>
                    </Link>
                </div>

                <h2 className="mb-6 text-2xl font-bold text-gray-900">Add Product Images</h2>

                <form onSubmit={submitHandler} className="space-y-8">

                    <div className="col-span-full">
                        <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900">
                            Upload Images
                        </label>
                        <input
                            type="file"
                            multiple
                            name="images"
                            id="images"
                            className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm font-medium shadow-md transition-all duration-200"
                    >
                        Save
                    </button>
                </form>
            </div>
        </section>
    );
}
