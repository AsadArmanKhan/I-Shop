import axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from '../../../Context';


export default function MultipleImage() {
    const { notify, API_BASE_URL, PRODUCT_URL } = useContext(MainContext)
    const { productId } = useParams();
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        for (let image of e.target.images.files) {
            formData.append("images", image)
        }
        axios.patch(API_BASE_URL + PRODUCT_URL + "/multiple-images/" + productId, formData).then(
            (resp) => {
                notify(resp.data.msg, resp.data.flag)
                if (resp.data.flag === 1) {
                    e.target.reset()
                }

            }
        ).catch(
            (err) => {
                console.log(err)
                notify("Something is wrong", 0)

            }
        )
    }
    console.log(productId)
    return (
        <section className="bg-white">
            <div className="py-10 px-6 mx-auto max-w-5xl lg:py-20">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Add a New Product images</h2>
                <form onSubmit={submitHandler} className="space-y-8">

                    {/* Thumbnail */}
                    <div className="col-span-full">
                        <label htmlFor="thumbnail" className="block   mb-2 text-sm font-medium text-gray-900">
                            images
                        </label>
                        <input
                            type="file"
                            multiple
                            name="images"
                            id="images"
                            className="block w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>


                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-medium text-balck shadow-md hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
                    >
                        Save
                    </button>
                </form>
            </div>
        </section>
    )
}