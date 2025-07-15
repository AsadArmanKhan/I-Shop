import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { Button } from "./Button";
// import Button from "@/components/ui/button";
import { Star, ArrowLeft } from "lucide-react";
import { MainContext } from '../../Context';

export default function ProductDetailPage() {
    const { API_BASE_URL, PRODUCT_URL, notify } = useContext(MainContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`${API_BASE_URL}${PRODUCT_URL}/${id}`)
                .then(res => {
                    if (res.data.flag === 1) {
                        const fetchedProduct = Array.isArray(res.data.products)
                            ? res.data.products[0]
                            : res.data.products;
                        setProduct(fetchedProduct);
                        setSelectedImage(fetchedProduct.thumbnail);
                    } else {
                        setProduct(null);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [id, API_BASE_URL, PRODUCT_URL]);

    // const handleAddToCart = () => {
    //     // here you’d dispatch to Redux / context
    //     notify("Product added to cart!", true);
    // };

    // if (loading) return <div className="text-center py-10">Loading...</div>;
    // if (!product) return <div className="text-center py-10 text-red-500">Failed to load product.</div>;

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">

            {/* Back to Store */}
            <div className="mb-6">
                <Link to="/store">
                    {/* <Button variant="outline" className="flex items-center space-x-2 border-black text-black hover:bg-gray-100">
                        <ArrowLeft size={16} />
                        <span>Back to Store</span>
                    </Button> */}
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Images gallery */}
                <div className="space-y-4">
                    <motion.div className="rounded-2xl overflow-hidden shadow-lg" whileHover={{ scale: 1.02 }}>
                        <img
                            src={selectedImage ? `${API_BASE_URL}/images/product/${selectedImage}` : "https://via.placeholder.com/600"}
                            // alt={product.name}
                            className="w-full object-cover"
                        />
                    </motion.div>
                    {product.images && product.images.length > 0 && (
                        <div className="flex space-x-2">
                            {[product.thumbnail, ...product.images].map((img, idx) => (
                                <img
                                    key={idx}
                                    src={`${API_BASE_URL}/images/product/${img}`}
                                    onClick={() => setSelectedImage(img)}
                                    alt={`thumb-${idx}`}
                                    className={`h-20 w-20 object-cover rounded-md cursor-pointer border ${selectedImage === img ? 'border-black' : 'border-gray-300'}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-2">{product.name}</h2>

                        {product.categoryId?.name && (
                            <p className="text-gray-500 mb-4">Category: <span className="font-medium text-gray-800">{product.categoryId.name}</span></p>
                        )}

                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-black">₹{product.finalPrice}</span>
                            {product.originalPrice && (
                                <>
                                    <span className="line-through text-gray-400">₹{product.originalPrice}</span>
                                    <span className="text-green-600 text-sm font-medium">Save {product.discountPercentage}%</span>
                                </>
                            )}
                        </div>

                        <div className="flex items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400" />
                            ))}
                            <span className="ml-2 text-gray-500 text-sm">(0 reviews)</span>
                        </div>

                        <p className="text-gray-600 mb-6">{product.shortDescription || product.longDescription}</p>
                    </div>

                    {/* Colors */}
                    {product.colors && product.colors.length > 0 && (
                        <div>
                            <p className="text-sm font-medium mb-1">Colors</p>
                            <div className="flex space-x-2">
                                {product.colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedColor(color._id)}
                                        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color._id ? 'border-black' : 'border-gray-300'}`}
                                        style={{ backgroundColor: color.hexCode || '#000' }}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sizes placeholder */}
                    <div>
                        <p className="text-sm font-medium mb-1">Size</p>
                        <div className="flex space-x-2">
                            {["S", "M", "L", "XL"].map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border rounded-md px-3 py-1 text-sm hover:bg-gray-100 ${selectedSize === size ? 'bg-black text-white' : ''}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-4">
                        {/* <Button className="flex-1 bg-black text-white hover:bg-gray-800" onClick={handleAddToCart}>Add to Cart</Button>
                        <Button variant="outline" className="flex-1 border-black text-black hover:bg-gray-100">Buy Now</Button> */}
                    </div>
                </div>
            </div>

            {/* Details */}
            {product.longDescription && (
                <div className="md:col-span-2 mt-10 space-y-6">
                    <h3 className="text-2xl font-semibold">Product Details</h3>
                    <p className="text-gray-600">{product.longDescription}</p>
                </div>
            )}
        </div>
    );
}
