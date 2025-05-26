import React from 'react'
import { FaApple, FaAndroid, FaGamepad, FaTabletAlt, FaChargingStation, FaMobileAlt, FaHeadphones, FaBookReader } from 'react-icons/fa';
import { Md5G } from 'react-icons/md';
import { SiXiaomi, SiSamsung } from 'react-icons/si';


export default function TopSells() {
    return (
        <>
            <div className="container max-w-8xl mx-auto bg-white px-4 sm:px-6 lg:px-8 py-4 space-y-8">
                {/* Header Section */}
                <h2 className="text-xl font-bold">TOP CELL PHONES & TABLETS</h2>

                {/* Banner Section */}
                <div className="grid grid-cols-3 gap-4 rounded-lg overflow-hidden">
                    <div className="col-span-2 relative bg-gray-100 flex items-center justify-center">
                        <img src="https://i.imgur.com/U9zICDJ.png" alt="Headphone" className="h-72 object-contain" />
                        <div className="absolute left-10 top-1/4 text-white max-w-xs">
                            <h3 className="text-2xl font-bold">Noise Cancelling</h3>
                            <p className="text-xl">Headphone</p>
                            <p className="mt-2 text-sm">Boso Over-Ear Headphone<br />Wifi, Voice Assistant,<br />Low Latency Game Mde</p>
                            <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow">BUY NOW</button>
                        </div>
                        <div className="absolute bottom-4 right-4 text-sm bg-white px-3 py-1 rounded-full">3 / 3</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-100 to-white rounded-lg flex items-center justify-center relative">
                        <div className="text-center space-y-2">
                            <h3 className="text-lg font-semibold">redmi note 12 Pro+ 5g</h3>
                            <p className="text-xs text-gray-500">Rise to the challenge</p>
                            <button className="mt-4 bg-black text-white px-4 py-2 text-xs rounded-full">SHOP NOW</button>
                            <div className="mt-2">
                                <img src="https://i.imgur.com/fqM9FSZ.png" alt="Redmi phones" className="h-28 mx-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Categories */}
                <div>
                    <h2 className="text-lg font-bold mb-4">POPULAR CATEGORIES</h2>
                    <div className="grid grid-cols-6 gap-6 text-center">
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
        </>
    );
}
function Category({ icon, label, items }) {
    return (
        <div className="flex flex-col items-center space-y-1">
            <div className="text-gray-800">{icon}</div>
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-xs text-gray-500">{items} Items</p>
        </div>
    );
}
