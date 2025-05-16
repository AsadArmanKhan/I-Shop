// import axios from "axios";
import { useContext, useEffect, } from "react";
import { FaArrowLeft, FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MainContext } from "../../../Context";
import Swal from 'sweetalert2'
import axios from "axios";




function ViewCategory() {
  const { API_BASE_URL, CATEGORY_URL, notify, } = useContext(MainContext)
  const { getCategory, Categories } = useContext(MainContext);

  function statusHandler(id) {
    axios.patch(API_BASE_URL + CATEGORY_URL + `/status/${id}`).then(
      (res) => {
        notify(res.data.msg, res.data.flag)
        if (res.data.flag === 1) {
          getCategory()
          // e.target.reset()
        }
      }
    ).catch(
      (err) => {
        console.log(err);
        notify("Something is Wrong", 0)
      })
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
        axios.delete(API_BASE_URL + CATEGORY_URL + `/delete/${id}`).then(
          (res) => {
            notify(res.data.msg, res.data.flag)
            if (res.data.flag === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              getCategory()
            }
          }
        ).catch((err) => {
          console.log(err);
          notify("Something is Wrong", 0)
        });
      }

    });
  }

  function editHandler(id) {

  }


  useEffect(
    () => {
      getCategory()
    }, []
  )
  return (
    <>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Title & Add Button */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Category / View</h1>
          <Link to={"/admin/category/add"} >
            <button className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
              <FaPlus />
              Add Category
            </button>
          </Link>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
          <table className="min-w-full bg-white text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 font-semibold text-gray-700">ID</th>
                <th className="py-3 px-4 font-semibold text-gray-700">NAME</th>
                <th className="py-3 px-4 font-semibold text-gray-700">SLUG</th>
                <th className="py-3 px-4 font-semibold text-gray-700">IMAGE</th>
                <th className="py-3 px-4 font-semibold text-gray-700">STATUS</th>
                <th className="py-3 px-4 font-semibold text-gray-700">ACTIONS</th>
                <th className="py-3 px-4 font-semibold text-gray-700">DELETE</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {Array.isArray(Categories) &&
                Categories.map((cat, index) => (
                  <tr key={index} className="shadow hover:bg-gray-50">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4">{cat.name}</td>
                    <td className="p-4">{cat.slug}</td>
                    <td className="p-4">
                      <img width="25px" src={`${API_BASE_URL}/images/categories/${cat.Image}`} alt="" />
                    </td>
                    <td className="">
                      <button onClick={() => statusHandler(cat._id)} className={`${cat.status ? 'bg-green-500' : 'bg-red-500'} p-3 text-white bg-amber-400 rounded-2xl`}>
                        {cat.status === true ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="px-10 py-5 ">
                      <Link to={`/admin/category/edit/${cat._id}`}>
                        <button onClick={() => editHandler(cat._id)} className="text-blue-500 hover:text-blue-700">
                          ✏️
                        </button>
                      </Link>
                    </td>
                    <td className="px-8 py-5">

                      <button onClick={() => deleteHandler(cat._id)} className="text-red-500 hover:text-red-700">
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>

          </table>
        </div>
      </div >
    </>
  );
}

export default ViewCategory;
