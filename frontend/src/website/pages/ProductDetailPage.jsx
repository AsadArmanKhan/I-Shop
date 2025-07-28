import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import { MainContext } from "../../Context";
import { useDispatch, useSelector } from "react-redux";
import { addItem, qtyHandler } from "../../redux/slice/cartSlice";

export default function ProductDetailPage() {
  const user = useSelector((state) => state?.data?.user);
  const cart = useSelector((state) => state?.cart);
  const { API_BASE_URL, PRODUCT_URL, products } = useContext(MainContext);
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("128GB");
  const [selectedColor, setSelectedColor] = useState("Midnight Blue");
  const [quantity, setQuantity] = useState(1);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (_id) {
      axios
        .get(`${API_BASE_URL}${PRODUCT_URL}/${_id}`)
        .then((res) => {
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
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [_id, API_BASE_URL, PRODUCT_URL]);

  const handlerCart = (payload) => {
    dispatcher(qtyHandler(payload));
  };

  const cartHandler = (data) => {
    if (user !== null) {
      axios.post(`${API_BASE_URL}/cart/add-to-cart`, {
        user_id: user?._id,
        product_id: data?.productId,
        qty: 1,
      });
    }
    dispatcher(addItem(data));
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product)
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load product.
      </div>
    );

  // ✅ find if current product is already in cart
  const cartItem = cart?.item?.find((item) => item.productId === product._id);

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Back to Store */}
      <div className="lg:col-span-3 mb-6">
        <Link
          to="/store"
          className="flex items-center space-x-2 text-black hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Back to Store</span>
        </Link>
      </div>

      {/* Product Images and Info */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images gallery */}
        <div>
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={
                selectedImage
                  ? `${API_BASE_URL}/images/product/${selectedImage}`
                  : "https://via.placeholder.com/600"
              }
              alt={product?.name || "Product image"}
              className="w-full object-cover"
            />
          </motion.div>
          {product?.images && product?.images.length > 0 && (
            <div className="flex space-x-2 mt-4">
              {[product?.thumbnail, ...product?.images].map((img, idx) => (
                <img
                  key={idx}
                  src={`${API_BASE_URL}/images/product/${img}`}
                  onClick={() => setSelectedImage(img)}
                  alt={`thumb-${idx}`}
                  className={`h-16 w-16 object-cover rounded-md cursor-pointer border ${
                    selectedImage === img ? "border-black" : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2">NEW</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              {product?.name}
            </h2>

            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-500 text-sm">(5)</span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-black">
                ₹{product?.finalPrice}
              </span>
              {product?.originalPrice && (
                <>
                  <span className="line-through text-gray-400">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    Save{" "}
                    {Math.round(
                      ((product.originalPrice - product.finalPrice) /
                        product.originalPrice) *
                        100
                    )}
                    %
                  </span>
                </>
              )}
            </div>

            <ul className="list-disc ml-5 text-gray-600 text-sm mb-4 space-y-1">
              <li>
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
              </li>
              <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
              <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>

            <div className="flex space-x-2 mb-4">
              <span className="bg-green-100 text-green-600 px-2 py-1 text-xs rounded">
                FREE SHIPPING
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 text-xs rounded">
                FREE GIFT
              </span>
            </div>

            {/* Color options */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">COLOR: {selectedColor}</p>
              <div className="flex space-x-3">
                {["Midnight Blue", "Deep Purple", "Space Black"].map(
                  (color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`border rounded-md px-3 py-1 text-sm ${
                        selectedColor === color
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                    >
                      {color}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Memory sizes */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">
                MEMORY SIZE: {selectedSize}
              </p>
              <div className="flex space-x-3">
                {["64GB", "128GB", "256GB", "512GB"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border rounded-md px-3 py-1 text-sm ${
                      selectedSize === size ? "border-black" : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Promotion */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-sm mb-4">
              <p>
                Buy <span className="text-red-500 font-semibold">02</span> boxes
                get a <span className="font-semibold">Snack Tray</span>
              </p>
              <p>
                Buy <span className="text-red-500 font-semibold">04</span> boxes
                get a free <span className="font-semibold">Block Toys</span>
              </p>
              <p className="text-gray-500 mt-2">
                Promotion will expire in: 9h00pm, 25/5/2024
              </p>
            </div>

            {/* SKU and Brand */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>SKU: {product?._id}</p>
              <p>CATEGORY: {product?.categoryId?.name}</p>
              <p>
                BRAND:{" "}
                <span className="text-green-600">
                  {product?.brand || "sumsung"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="border rounded-xl p-6 shadow-md space-y-6">
        <div className="text-l font-bold gap-1">
          <div>Total Price:</div>
          <div className="text-3xl font-bold">₹{product?.finalPrice}</div>
        </div>
        <p className="text-sm text-green-600">In stock</p>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <div className="bg-black text-white px-2 py-1 text-xs rounded">
              NEW
            </div>
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <button
              onClick={() =>
                handlerCart({
                  productId: product._id,
                  type: "dec",
                  finalPrice: product.finalPrice,
                  originalPrice: product.originalPrice,
                })
              }
              className="px-2 py-1 bg-gray-300 rounded"
            >
              -
            </button>
            <span>{cartItem?.qty ?? 1}</span>
            <button
              onClick={() =>
                handlerCart({
                  productId: product._id,
                  type: "inc",
                  finalPrice: product.finalPrice,
                  originalPrice: product.originalPrice,
                })
              }
              className="px-2 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-2 text-sm">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
              FREE SHIPPING
            </span>
            <span className="text-green-600">In stock</span>
          </div>

          <button className="mt-3 text-sm text-red-600 hover:underline">
            Remove from Cart
          </button>
        </div>

        <button
          onClick={() =>
            cartHandler({
              productId: product._id,
              finalPrice: product.finalPrice,
              originalPrice: product.originalPrice,
            })
          }
          className="w-full bg-teal-600 text-white py-3 rounded-md"
        >
          Add to Cart
        </button>

        <button className="w-full bg-yellow-400 text-black py-3 rounded-md">
          BUY WITH PayPal
        </button>
        <div className="text-sm text-gray-500">Guaranteed Safe Checkout</div>
        <div className="flex space-x-2">
          <img src="/payment-icon.png" alt="Payment" className="h-6" />
          {/* Add other payment icons here */}
        </div>
        <div className="text-sm">
          <p>Quick Order 24/7</p>
          <p className="font-bold text-lg">(025) 3886 25 16</p>
        </div>
        <p className="text-sm text-gray-500">Ships from United States</p>
      </div>
    </div>
  );
}
