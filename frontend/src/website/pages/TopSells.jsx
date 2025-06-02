import React from 'react';
import { FaApple, FaAndroid, FaGamepad, FaTabletAlt, FaChargingStation, FaMobileAlt, FaHeadphones, FaBookReader } from 'react-icons/fa';
import { Md5G } from 'react-icons/md';
import { SiXiaomi, SiSamsung } from 'react-icons/si';

export default function TopSells() {
    return (
        <div className="container max-w-8xl mx-auto my-10 bg-[#121212] text-[#fcd34d] px-4 sm:px-6 lg:px-8 py-8 space-y-8 rounded-xl shadow-xl">
            {/* Header Section */}
            <h2 className="text-2xl font-bold tracking-wide text-[#facc15]">TOP CELL PHONES & TABLETS</h2>

            {/* Banner Section */}
            <div className="grid grid-cols-3 gap-6 rounded-lg overflow-hidden">
                {/* Main Banner */}
                <div className="col-span-2 relative bg-[#1f1f1f] flex items-center justify-center rounded-xl shadow-xl overflow-hidden">
                    <img src="https://i.imgur.com/U9zICDJ.png" alt="Headphone" className="h-72 object-contain opacity-90" />
                    <div className="absolute left-10 top-1/4 max-w-xs space-y-2">
                        <h3 className="text-2xl font-bold text-white">Noise Cancelling</h3>
                        <p className="text-xl text-[#facc15]">Headphone</p>
                        <p className="mt-2 text-sm text-gray-400">
                            Boso Over-Ear Headphone<br />
                            Wifi, Voice Assistant,<br />
                            Low Latency Game Mode
                        </p>
                        <button className="mt-4 bg-[#b45309] text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-[#d97706] transition">BUY NOW</button>
                    </div>
                    <div className="absolute bottom-4 right-4 text-sm bg-[#facc15] text-black px-3 py-1 rounded-full shadow">3 / 3</div>
                </div>

                {/* Side Banner */}
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] rounded-xl flex items-center justify-center relative shadow-lg">
                    <div className="text-center space-y-2 text-white">
                        <h3 className="text-lg font-semibold">Redmi Note 12 Pro+ 5G</h3>
                        <p className="text-xs text-gray-400">Rise to the challenge</p>
                        <button className="mt-4 bg-[#facc15] text-black px-4 py-2 text-xs rounded-full hover:bg-[#eab308] transition">SHOP NOW</button>
                        <div className="mt-2">
                            <img src="https://i.imgur.com/fqM9FSZ.png" alt="Redmi phones" className="h-28 mx-auto object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Popular Categories */}
            <div>
                <h2 className="text-lg font-bold mb-4 tracking-wide text-[#facc15]">POPULAR CATEGORIES</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                    <Category icon={<FaApple size={24} />} label="iPhone (iOS)" items="74" />
                    <Category icon={<FaAndroid size={24} />} label="Android" items="35" />
                    <Category icon={<Md5G size={24} />} label="5G Support" items="12" />
                    <Category icon={<FaTabletAlt size={24} />} label="Apple Tablets" items="22" />
                    <Category icon={<FaChargingStation size={24} />} label="Smartphone Chargers" items="33" />
                    <Category icon={<FaGamepad size={24} />} label="Gaming" items="9" />
                    <Category icon={<SiXiaomi size={24} />} label="Xiaomi" items="52" />
                    <Category icon={<FaMobileAlt size={24} />} label="Accessories" items="29" />
                    <Category icon={<SiSamsung size={24} />} label="Samsung Tablets" items="26" />
                    <Category icon={<FaBookReader size={24} />} label="eReader" items="5" />
                </div>
            </div>
        </div>
    );
}

function Category({ icon, label, items }) {
    return (
        <div className="flex flex-col items-center space-y-1 bg-[#1f1f1f] p-4 rounded-lg hover:scale-105 transform transition shadow-md hover:shadow-[#fcd34d]/30">
            <div className="text-[#fcd34d]">{icon}</div>
            <p className="text-sm font-semibold text-white">{label}</p>
            <p className="text-xs text-gray-400">{items} Items</p>
        </div>
    );
}
