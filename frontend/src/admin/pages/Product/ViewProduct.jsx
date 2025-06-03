import { useContext, useEffect } from "react";
import { FaEdit, FaTrash, FaRegEye } from "react-icons/fa";
import { VscDiffMultiple } from "react-icons/vsc";
import { MainContext } from "../../../Context";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const ViewProduct = () => {
  const admin = useSelector((state) => state.admin)
  const { API_BASE_URL, PRODUCT_URL, notify, getProduct, products } = useContext(MainContext);
  console.log(products);
  // return

  function statusHandler(id, flag) {
    axios.patch(`${API_BASE_URL}${PRODUCT_URL}/status/${id}`, { flag },
      {
        headers: {
          Authorization: admin.token
        }
      }
    )
      .then((res) => {
        notify(res.data.msg, res.data.flag);
        if (res.data.flag === 1) {
          getProduct();
        }
      })
      .catch(console.log);
  }

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
        axios.delete(`${API_BASE_URL}${PRODUCT_URL}/delete/${id}`)
          .then((res) => {
            notify(res.data.msg, res.data.flag);
            if (res.data.flag === 1) {
              Swal.fire("Deleted!", "Your product has been deleted.", "success");
              getProduct();
            }
          })
          .catch(console.log);
      }
    });
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-xl font-bold text-gray-800">🛒 Products</h1>
        <Link to="/admin/product/add">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition shadow">
            + Add Product
          </button>
        </Link>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">SLUG</th>
              <th className="px-4 py-3 text-left">Original</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Disc</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Top</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {Array.isArray(products) && products.map((product) => (
              // console.log(product),
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3">{product.slug || "-"}</td>
                <td className="px-4 py-3">₹{product.orignalPrice}</td>
                <td className="px-4 py-3">₹{product.finalPrice}</td>
                <td className="px-4 py-3">{product.discountPercentage}%</td>
                <td className="px-4 py-3">
                  <span
                    onClick={() => statusHandler(product._id, 1)}
                    className={`cursor-pointer font-medium ${product.status ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {product.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    onClick={() => statusHandler(product._id, 2)}
                    className={`cursor-pointer font-medium ${product.stock ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    onClick={() => statusHandler(product._id, 3)}
                    className={`cursor-pointer font-medium ${product.topSelling ? "text-indigo-600" : "text-red-600"
                      }`}
                  >
                    {product.topSelling ? "Yes" : "No"}
                  </span>
                </td>
                <td className="px-4 py-3 text-center space-x-2">
                  <Link to={`/admin/product/edit/${product._id}`}>
                    <button title="Edit" className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                  </Link>
                  <button onClick={() => deleteHandler(product._id)} title="Delete" className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                  <button title="View" className="text-green-600 hover:text-green-800">
                    <FaRegEye />
                  </button>
                  <Link to={`/admin/product/multiple/${product._id}`}>
                    <button title="Multiple" className="text-purple-600 hover:text-purple-800">
                      <VscDiffMultiple />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {Array.isArray(products) && products.map((product) => (
          <div key={product._id} className="border rounded-md p-4 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-1">Category: {product.category || "-"}</p>
            <p className="text-sm">Original: ₹{product.orignalPrice
            }</p>
            <p className="text-sm">Price: ₹{product.finalPrice} ({product.discountPercentage}%)</p>
            <p className="text-sm mt-1">
              Status:{" "}
              <span
                onClick={() => statusHandler(product._id, 1)}
                className={`cursor-pointer font-medium ${product.status ? "text-green-600" : "text-red-600"
                  }`}
              >
                {product.status ? "Active" : "Inactive"}
              </span>
            </p>
            <p className="text-sm">
              Stock:{" "}
              <span
                onClick={() => statusHandler(product._id, 2)}
                className={`cursor-pointer font-medium ${product.stock ? "text-green-600" : "text-red-600"
                  }`}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="text-sm">
              Top Selling:{" "}
              <span
                onClick={() => statusHandler(product._id, 3)}
                className={`cursor-pointer font-medium ${product.topSelling ? "text-indigo-600" : "text-red-600"
                  }`}
              >
                {product.topSelling ? "Yes" : "No"}
              </span>
            </p>
            <div className="flex justify-end gap-3 mt-3">
              <Link to={`product/edit/${product._id}`}>
                <button title="Edit" className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
              </Link>


              <button onClick={() => deleteHandler(product._id)} title="Delete" className="cursor-pointer text-red-600 hover:text-red-800"><FaTrash /></button>
              <button title="View" className="text-green-600 hover:text-green-800 cursor-pointer"><FaRegEye /></button>
              <Link to={`product/multiple/${product._id}`}>
                <button title="Multiple" className="text-purple-600 hover:text-purple-800 cursor-pointer"><VscDiffMultiple /></button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProduct;
