import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 p-4 md:p-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/About-Contact/44400a4882241d8412a5c1f4b0a9fc7ee567462d.png"
          alt="Best experience"
          className="w-full object-cover"
        />
      </div>

      {/* Purpose & Stats */}
      <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center items-center">
        <div className="md:col-span-1">
          <p className="font-semibold">
            OUR PURPOSE IS TO{" "}
            <span className="text-green-500">ENRICH AND ENHANCE LIVES</span>{" "}
            THROUGH TECHNOLOGY
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">$12,5M</p>
          <p className="text-xs text-gray-500">
            TOTAL REVENUE FROM 2001 - 2023
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">12K+</p>
          <p className="text-xs text-gray-500">
            ORDERS DELIVERED SUCCESSFUL EVERYDAY
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">725+</p>
          <p className="text-xs text-gray-500">
            STORE AND OFFICE IN U.S AND WORLDWIDE
          </p>
        </div>
      </div>

      {/* Middle Section: Image + Text */}
      <div className="bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <img
          src="/About-Contact/ffed801c54a3df4d8b1db4ddf00c1e5836c81322.jpg"
          alt="Delivery person"
          className="object-cover w-full h-full"
        />
        <div className="p-6 flex flex-col justify-center space-y-4">
          <h3 className="font-bold text-lg md:text-xl">
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </h3>
          <p className="text-gray-600 text-sm">
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage & scale their businesses.
          </p>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-full w-fit text-sm font-semibold">
            OUR SHOWREEL
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <h4 className="font-semibold mb-2">100% AUTHENTIC PRODUCTS</h4>
          <p className="text-gray-600 text-sm mb-4">
            Swoo Tech Mart just distribute 100% authorized products & guarantee
            quality. Nulla porta nulla nec orci vulputate, id rutrum sapien
            varius.
          </p>
          <div className="w-6 h-6 rounded-full bg-teal-500 self-end"></div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <h4 className="font-semibold mb-2">FAST DELIVERY</h4>
          <p className="text-gray-600 text-sm mb-4">
            Fast shipping with a lots of option to delivery. 100% guarantee that
            your goods alway on time and perserve quality.
          </p>
          <div className="w-6 h-6 rounded-full bg-teal-500 self-end"></div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <h4 className="font-semibold mb-2">AFFORDABLE PRICE</h4>
          <p className="text-gray-600 text-sm mb-4">
            We offer an affordable & competitive price with a lots of special
            promotions.
          </p>
          <div className="w-6 h-6 rounded-full bg-teal-500 self-end"></div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="/About-Contact/070bdfcb7d0609f801264b0136e1b1ed53d3a117.png"
          alt="Mission and Vision"
          className="w-full bg-center bg-contain"
        />
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-4">OUR MISSION AND VISION</h3>
          <p className="text-black text-sm mb-6">
            Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras
            non elit vel magna molestie pellentesque in eu dui. Donec laoreet
            quis erat vitae finibus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum similique impedit consectetur adipisci eius,
            consequatur velit delectus blanditiis quos quod eaque asperiores
            corporis quibusdam porro et magni iusto. Suscipit, ratione! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem iusto
            modi quasi placeat ex, quisquam facilis amet pariatur temporibus
            illum aperiam! Aliquam est, culpa vel natus iure necessitatibus
            excepturi aut....
          </p>
          {/* Timeline */}
          <h4 className="font-semibold text-lg mb-4">
            FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <ul className="space-y-1">
              <li>
                <span className="font-semibold">1997:</span> A small store
                located in Brooklyn Town, USA
              </li>
              <li>
                <span className="font-semibold">1998:</span> It is a long
                established fact that a reader will be distracted...
              </li>
              <li>
                <span className="font-semibold">2000:</span> Lorem Ipsum is
                simply dummy text...
              </li>
              <li>
                <span className="font-semibold">2004:</span> Contrary to popular
                belief...
              </li>
              <li>
                <span className="font-semibold">2006:</span> There are many
                variations...
              </li>
              <li>
                <span className="font-semibold">2010:</span> All the Lorem Ipsum
                generators...
              </li>
              <li>
                <span className="font-semibold">2013:</span> Lorem Ipsum comes
                from sections 1.10.32
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                <span className="font-semibold">2014:</span> There are many
                variations...
              </li>
              <li>
                <span className="font-semibold">2016:</span> All the Lorem Ipsum
                generators...
              </li>
              <li>
                <span className="font-semibold">2020:</span> Lorem Ipsum comes
                from sections...
              </li>
              <li>
                <span className="font-semibold">2022:</span> Making this the
                first true generator...
              </li>
              <li>
                <span className="font-semibold">2023:</span> there are many
                variations...
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="font-semibold text-lg mb-4">LEADERSHIPS</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "Henry Avery", role: "CHAIRMAN" },
            { name: "Michael Edward", role: "VICE PRESIDENT" },
            { name: "Eden Hazard", role: "CEO" },
            { name: "Robert Downey Jr", role: "CEO" },
            { name: "Nathan Drake", role: "STRATEGIST DIRECTOR" },
          ].map((leader, idx) => (
            <div key={idx} className="text-center">
              <div className="w-full h-32 bg-gray-300 rounded-md mb-2"></div>
              <p className="font-semibold">{leader.name}</p>
              <p className="text-gray-500 text-xs">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
