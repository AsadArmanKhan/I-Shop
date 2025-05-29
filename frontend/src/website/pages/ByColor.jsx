import { FaGift } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useContext } from 'react';
import { MainContext } from '../../Context';


//     {
//         id: 1,
//         name: "Lenovo Redmi Note 5, 64GB",
//         price: "$69.00",
//         label: "FREE SHIPPING",
//         stock: true,
//         image: "https://via.placeholder.com/200"
//     },
//     {
//         id: 2,
//         name: "LG Pro Tablet 2023 LTE + Wifi, GPS Cellular",
//         price: "$179.00 - $429.00",
//         label: "PRE-ORDER",
//         new: true,
//         image: "https://via.placeholder.com/200"
//     },
//     {
//         id: 3,
//         name: "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone",
//         price: "$659.00",
//         label: "FREE SHIPPING",
//         stock: true,
//         outOfStock: true,
//         gift: true,
//         image: "https://via.placeholder.com/200"
//     },
//     {
//         id: 4,
//         name: "SROK Smart Phone 128GB, Oled Retina",
//         price: "$579.00",
//         oldPrice: "$859.00",
//         save: "$199.00",
//         stock: true,
//         image: "https://via.placeholder.com/200"
//     },
//     // Add more as needed
// ];

export default function ByColor() {
    const { getProduct, products, getCategory, Categories,
        COLOR_URL, getColors, colors, API_BASE_URL } = useContext(MainContext)
    return (
        // <div className="flex">
        //     {/* Sidebar */}
        //     <aside className="w-64 p-4 border-r hidden lg:block">


        //         {/* <div className="mb-4">
        //             <h4 className="font-semibold mb-2">By Memory</h4>
        //             {['12GB', '8GB', '6GB', '4GB', '3GB', '1.5GB', '1GB', '512MB'].map(mem => (
        //                 <div key={mem} className="flex items-center mb-1">
        //                     <input type="checkbox" className="mr-2" /> <label>{mem}</label>
        //                 </div>
        //             ))}
        //         </div> */}
        //         {/* <div className="mb-4">
        //             <h4 className="font-semibold mb-2">By Conditions</h4>
        //             {['New', 'Like New', 'Open Box'].map(cond => (
        //                 <div key={cond} className="flex items-center mb-1">
        //                     <input type="checkbox" className="mr-2" /> <label>{cond}</label>
        //                 </div>
        //             ))}
        //         </div> */}
        //     </aside >
        // </div >
        <div className=""></div>
    );
}
