import React from 'react';
import { FaApple, FaAndroid, FaGamepad, FaTabletAlt, FaChargingStation, FaMobileAlt, FaHeadphones, FaBookReader } from 'react-icons/fa';
import { Md5G } from 'react-icons/md';
import { SiXiaomi, SiSamsung } from 'react-icons/si';

export default function TopSells() {
    return (
        <div className="container max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 py-8 space-y-8 rounded-xl shadow-xl">
            {/* Header Section */}
            <h2 className="text-2xl font-bold tracking-wide ">TOP CELL PHONES & TABLETS</h2>

            {/* Banner Section */}
            <div className="grid grid-cols-3 gap-6 rounded-lg overflow-hidden">
                {/* Main Banner */}
                <div className="col-span-2 relative  flex items-center justify-center rounded-xl shadow-xl overflow-hidden">
                    <img src="/public/ImagesForProducts/slider3.png" alt="Headphone" className="rounded-xl h-72 object-contain opacity-90" />
                    <div className="absolute left-10 top-1/4 max-w-xs space-y-2">
                        <h3 className="text-2xl font-bold text-white">Noise Cancelling</h3>
                        <p className="text-xl text-white">Headphone</p>
                        <p className="mt-2 text-sm text-white">
                            Boso Over-Ear Headphone<br />
                            Wifi, Voice Assistant,<br />
                            Low Latency Game Mode
                        </p>
                        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-[#d97706] transition">BUY NOW</button>
                    </div>
                    <div className="absolute bottom-6 right-4 text-sm bg-white text-black px-7 py-1 rounded-full shadow">3 / 3</div>
                </div>

                {/* Side Banner */}
                <div className=" rounded-xl flex relative shadow-lg">
                    <img src="/public/ImagesForProducts/div.img.png" alt="Redmi phones" className="h-80  object-contain" />
                    <div className="p-10 space-y-2 flex gap-30 absolute text-white">
                        <div className="">
                            <h3 className="text-lg text-black font-semibold">Redmi Note 12 Pro+ 5G</h3>
                            <p className="text-xs text-gray-400">Rise to the challenge</p>
                        </div>
                        <div className="">
                            <button className="mt-4 bg-black text-white px-2 w-[80px] py-2  text-xs rounded-3xl hover:bg-[#d97706] transition">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Categories */}
            <div>
                <h2 className="text-lg font-bold mb-4 tracking-wide text-[#facc15]">POPULAR CATEGORIES</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
                    {/* <Category label="iPhone (iOS)" /> */}
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        iPhone (iOS)
                        <img src="/public/ImagesForProducts/Link → prod20.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Android
                        <img src="/public/ImagesForProducts/Link → prod21.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        5G Support
                        <img src="/public/ImagesForProducts/Link → prod22.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Apple Tablets
                        <img src="/public/ImagesForProducts/Link → prod62.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Smartphone Chargers
                        <img src="/public/ImagesForProducts/Link → prod63.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Gaming
                        <img src="/public/ImagesForProducts/Link → prod23.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Xiaomi
                        <img src="/public/ImagesForProducts/Link → prod24.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Accessories
                        <img src="/public/ImagesForProducts/Link → prod25.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        Samsung Tablets
                        <img src="/public/ImagesForProducts/Link → prod27.png.png" alt="" />
                    </div>
                    <div className="p-4 text-l font-bold gap-11 text-center justify-center flex rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-black">
                        eReader
                        <img src="/public/ImagesForProducts/Link → prod64.png.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
