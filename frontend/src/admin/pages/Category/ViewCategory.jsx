import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaPlus, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainContext } from "../../../Context";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";

function ViewCategory() {
  const admin = useSelector((state) => state.admin);
  const { API_BASE_URL, CATEGORY_URL, notify, getCategory, Categories } = useContext(MainContext);

  const [selectedCategory, setSelectedCategory] = useState(null);

  function statusHandler(id) {
    axios.patch(API_BASE_URL + CATEGORY_URL + `/status/${id}`, {}, {
      headers: {
        Authorization: admin?.token
      }
    }).then((resp) => {
      notify(resp.data.msg, resp.data.flag);
      if (resp.data.flag === 1) {
        getCategory();
      }
    }).catch((error) => {
      console.log(error);
      notify("something is wrong", 0);
    });
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
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`${API_BASE_URL}${CATEGORY_URL}/delete/${id}`, {
          headers: {
            Authorization: admin.token,
          }
        }).then(res => {
          notify(res.data.msg, res.data.flag);
          if (res.data.flag === 1) {
            Swal.fire("Deleted!", "Your category has been deleted.", "success");
            getCategory();
          }
        }).catch(err => {
          console.log(err);
          notify("View Category me dikkat h", 0);
        });
      }
    });
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">📁 Category / View</h1>
        <Link to="/admin/category/add">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700 transition">
            <FaPlus /> Add Category
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
              <th className="px-4 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(Categories) && Categories.map((cat, index) => (
              <tr key={cat._id} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 capitalize">{cat.name}</td>
                <td className="px-4 py-3 lowercase">{cat.slug}</td>
                <td className="px-4 py-3">
                  <img
                    src={`${API_BASE_URL}/images/categories/${cat.Image}`}
                    alt={cat.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => statusHandler(cat._id)}
                    className={`px-3 py-1 text-xs rounded-full font-semibold shadow ${cat.status ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {cat.status ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="px-4 py-3 text-center flex justify-center gap-3">
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className="text-purple-600 hover:text-purple-800 transition"
                    title="View"
                  >
                    <FaEye />
                  </button>
                  <Link to={`/admin/category/edit/${cat._id}`}>
                    <button className="text-blue-600 hover:text-blue-800 transition" title="Edit">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => deleteHandler(cat._id)}
                    className="text-red-600 hover:text-red-800 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {Categories?.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No categories available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">📄 Category Details</h2>
            <img
              src={`${API_BASE_URL}/images/categories/${selectedCategory.Image}`}
              alt={selectedCategory.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <p><strong>Name:</strong> {selectedCategory.name}</p>
            <p><strong>Slug:</strong> {selectedCategory.slug}</p>
            <p><strong>Status:</strong> {selectedCategory.status ? "Active" : "Inactive"}</p>
            <p><strong>ID:</strong> {selectedCategory._id}</p>
          </div>
        </div>
      )}
    </section>
  );
}


export default ViewCategory;


