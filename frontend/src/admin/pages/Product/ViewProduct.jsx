import { useContext, useEffect } from "react";
import { FaEdit, FaTrash, FaRegEye } from "react-icons/fa";
import { MainContext } from "../../../Context";
import axios from "axios";
import Swal from 'sweetalert2'
import { VscDiffMultiple } from "react-icons/vsc";
import { Link } from "react-router-dom";

// import 'sweetalert2/src/sweetalert2.sc



const ViewProduct = () => {
  const { API_BASE_URL, PRODUCT_URL, notify } = useContext(MainContext)
  const { getProduct, products } = useContext(MainContext);

  function statusHandler(id, flag) {
    axios.patch(API_BASE_URL + PRODUCT_URL + `/status/${id}`, { flag }).then(
      (response) => {
        notify(response.data.msg, response.data.flag)
        if (response.data.flag === 1) {
          getProduct()
        }

      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        axios.delete(API_BASE_URL + PRODUCT_URL + `/delete/${id}`).then(
          (response) => {
            notify(response.data.msg, response.data.flag)
            if (response.data.flag === 1) {
              getProduct()
            }

          }
        ).catch(
          (error) => {
            console.log(error)
          }
        )


      }
    });



  }


  useEffect(
    () => {
      getProduct()
    },
    []
  )

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"> </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"> Price</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700"> disc</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Top Selling</th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900">{product.name}</td>
              <td className="px-10 py-3 text-sm text-gray-700">{product.category || "-"}</td>
                <td className="" > {product.originalPrice}</td>
                <td className="px-4 py-3">{product.finalPrice}</td>
                <td className="px-4 py-3">{product.discountPercentage}%</td>

              <td className="px-4 py-3 text-sm">
                {product.status ? (
                  <span onClick={() => statusHandler(product._id, 1)} className="text-green-600 font-medium cursor-pointer">Active</span>
                ) : (
                  <span onClick={() => statusHandler(product._id, 1)} className="text-red-600 font-medium cursor-pointer">Inactive</span>
                )}
              </td>
              <td className="px-4 py-3 text-sm">
                {product.stock ? (
                  <span onClick={() => statusHandler(product._id, 2)} className="text-green-600  cursor-pointerfont-medium">In Stock</span>
                ) : (
                  <span onClick={() => statusHandler(product._id, 2)} className="text-red-600 cursor-pointer font-medium">Out of Stock</span>
                )}
              </td>
              <td className="px-4 py-3 text-sm">
                {product.topSelling ? (
                  <span onClick={() => statusHandler(product._id, 3)} className="text-indigo-600 cursor-pointer font-medium">Yes</span>
                ) : (
                  <span onClick={() => statusHandler(product._id, 3)} className="text-gray-500 cursor-pointer">No</span>
                )}
              </td>
              <td className="px-4 py-3 text-center">
                <button
                  title="Edit"
                  className="text-blue-600 hover:text-blue-800 mx-1"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteHandler(product._id)}
                  title="Delete"
                  className="text-red-600 hover:text-red-800 mx-1"
                >
                  <FaTrash />
                </button>
                <button
                  title="Delete"
                  className="text-red-600 hover:text-red-800 mx-1"
                >
                  <FaRegEye />
                </button>
                <Link to={`/admin/product/multiple/${product._id}`}>
                  <button
                    title="Delete"
                    className="text-red-600 hover:text-red-800 mx-1"
                  >
                    <VscDiffMultiple />

                  </button></Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;