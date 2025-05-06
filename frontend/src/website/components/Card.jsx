import { useState } from 'react';

const Card = () => {
    const [wishlisted, setWishlisted] = useState(false);

    const product = {
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Premium Wireless Headphones',
        price: 129.99,
        originalPrice: 169.99,
        rating: 4,
        isOnSale: true,
    };

    return (

        <>
            <div className="relative max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">

                {/* Discount Badge */}
                {product.isOnSale && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                )}

                {/* Wishlist Icon */}
                <button
                    onClick={() => setWishlisted(!wishlisted)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                    aria-label="Add to Wishlist"
                >
                    {wishlisted ? '❤️' : '🤍'}
                </button>

                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-60 object-cover"
                />

                {/* Card Content */}
                <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {product.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-5 h-5"
                                fill={i < product.rating ? 'currentColor' : 'none'}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.682a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.125 2.27a1 1 0 00-.364 1.118l1.2 3.683c.3.92-.755 1.688-1.538 1.118l-3.125-2.27a1 1 0 00-1.175 0l-3.125 2.27c-.783.57-1.838-.198-1.538-1.118l1.2-3.683a1 1 0 00-.364-1.118L2.45 9.109c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.682z"
                                />
                            </svg>
                        ))}
                    </div>

                    {/* Button */}
                    <button className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;
