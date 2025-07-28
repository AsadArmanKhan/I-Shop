import React from "react";

export default function Cameras() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Audios & Cameras */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">AUDIOS & CAMERAS</h2>
              <a href="#" className="text-xs text-gray-500">
                View All
              </a>
            </div>
            <div
              className="relative w-full h-50 rounded-md overflow-hidden bg-cover bg-no-repeat bg-center flex  text-white"
              style={{ backgroundImage: "url(/img/Mike.png)" }}
            >
              <div className="absolute inset-0 bg-opacity-30"></div>
              <div className="relative z-10 text-xl px-8 py-8">
                <p className="font-bold">Best</p>
                <p className="font-bold">Speaker</p>
                <p className="font-bold">2023</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center text-xs">
              <div>
                <img
                  src="/img/speaker.png"
                  alt="Speaker"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Speaker</p>
                <span className="text-gray-500">12 Items</span>
              </div>
              <div>
                <img
                  src="/img/camera.png"
                  alt="DSLR Camera"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">DSLR Camera</p>
                <span className="text-gray-500">9 Items</span>
              </div>
              <div>
                <img
                  src="/img/earbuds.png"
                  alt="Earbuds"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Earbuds</p>
                <span className="text-gray-500">5 Items</span>
              </div>
              <div>
                <img
                  src="/img/mike2.png"
                  alt="Microphone"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Microphone</p>
                <span className="text-gray-500">12 Items</span>
              </div>
            </div>
          </div>

          {/* Gaming */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">GAMING</h2>
              <a href="#" className="text-xs text-gray-500">
                View All
              </a>
            </div>
            <div
              className="relative w-full h-50 rounded-md overflow-hidden bg-cover bg-no-repeat bg-center flex text-black"
              style={{ backgroundImage: "url(/img/Mouse.png)" }}
            >
              <div className="absolute inset-0  bg-opacity-30"></div>
              <div className="relative z-10 text-l px-8 py-8">
                <p className="font-bold">WIRELESS</p>
                <p className="font-bold">RGB GAMING</p>
                <p className="font-bold">MOUSE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center text-xs">
              <div>
                <img
                  src="/img/bigtv.png"
                  alt="Monitors"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Monitors</p>
                <span className="text-gray-500">28 Items</span>
              </div>
              <div>
                <img
                  src="/img/chair.png"
                  alt="Chair"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Chair</p>
                <span className="text-gray-500">12 Items</span>
              </div>
              <div>
                <img
                  src="/img/joystick.png"
                  alt="Controller"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Controller</p>
                <span className="text-gray-500">9 Items</span>
              </div>
              <div>
                <img
                  src="/img/keyboard.png"
                  alt="Keyboards"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Keyboards</p>
                <span className="text-gray-500">30 Items</span>
              </div>
            </div>
          </div>

          {/* Office Equipments */}
          <div className="bg-white rounded-lg p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">OFFICE EQUIPMENTS</h2>
              <a href="#" className="text-xs text-gray-500">
                View All
              </a>
            </div>
            <div
              className="relative w-full h-50 rounded-md overflow-hidden bg-cover bg-no-repeat bg-center flex justify-center text-white"
              style={{ backgroundImage: "url(/img/projector.png)" }}
            >
              <div className="absolute inset-0  bg-opacity-30"></div>
              <div className="relative z-10 text-xs py-9">
                <p className="font-light text-xs text-center">
                  Home Theater 4k
                </p>
                <p className="font-semibold text-3xl">Laser Projector</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center text-xs">
              <div>
                <img
                  src="/img/printer.png"
                  alt="Printers"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Printers</p>
                <span className="text-gray-500">9 Items</span>
              </div>
              <div>
                <img
                  src="/img/wifi.png"
                  alt="Network"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Network</p>
                <span className="text-gray-500">90 Items</span>
              </div>
              <div>
                <img
                  src="/img/cctv.png"
                  alt="Security"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Security</p>
                <span className="text-gray-500">12 Items</span>
              </div>
              <div>
                <img
                  src="/img/projector2.png"
                  alt="Projectors"
                  className="mx-auto w-25"
                />
                <p className="font-semibold">Projectors</p>
                <span className="text-gray-500">12 Items</span>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-teal-600 rounded-lg flex justify-between p-4 text-white">
            <div>
              <h3 className="uppercase font-semibold">
                Massage Chair <br /> Luxury
              </h3>
              <p className="text-xs">
                Fuka Relax Full Body <br /> Massage Chair
              </p>
              <button className="mt-7 bg-white text-black font-semibold text-xl px-3 py-1 rounded">
                Shop Now
              </button>
            </div>
            <img
              src="/img/orangechair.png"
              alt="Massage Chair"
              className="w-20 md:w-35"
            />
          </div>
          <div
            className="bg-gray-800 bg-cover bg-center rounded-lg  p-4 h-50"
            style={{ backgroundImage: "url(/img/phonepromo.png)" }}
          ></div>
        </div>

        {/* Recently Viewed */}
        <div className="bg-white rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">YOUR RECENTLY VIEWED</h2>
            <a href="#" className="text-xs text-gray-500">
              View All
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Watch */}
            <div className="relative space-y-1">
              <img
                src="/img/bandwatch.png"
                alt="Watch"
                className="rounded-md w-full"
              />
              <span className="absolute top-1 left-1 bg-black text-white text-[10px] px-1 rounded">
                NEW
              </span>
              <span className="absolute top-1 right-1 bg-gray-200 text-[10px] px-2 rounded-full">
                152
              </span>
              <p className="text-xs mt-1">
                Xomie Remid 8 Sport Water Resistance Watch
              </p>
              <p className="font-semibold">$579.00</p>
            </div>

            {/* Laptop */}
            <div className="relative space-y-1">
              <img
                src="/img/laptop.png"
                alt="Laptop"
                className="rounded-md w-full"
              />
              <span className="absolute top-1 left-1 bg-black text-white text-[10px] px-1 rounded">
                NEW
              </span>
              <p className="text-xs mt-1">Microte Surface 2.0 Laptop</p>
              <p className="font-semibold">$979.00</p>
            </div>

            {/* Tablet */}
            <div className="relative space-y-1">
              <img
                src="/img/tablet.png"
                alt="Tablet"
                className="rounded-md w-full"
              />
              <span className="absolute top-1 right-1 bg-gray-200 text-[10px] px-2 rounded-full">
                152
              </span>
              <p className="text-xs mt-1">
                aPod Pro Tablet 2023 LTE + WiFi, GPS Cellular 12.9 Inch, 512GB
              </p>
              <p className="font-semibold">$979.00 - $1,259.00</p>
            </div>

            {/* Smart Phone */}
            <div className="relative space-y-1">
              <img
                src="/img/mobile.png"
                alt="Smart Phone"
                className="rounded-md w-full"
              />
              <span className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1 rounded">
                SAVE $192.00
              </span>
              <span className="absolute top-1 right-1 bg-gray-200 text-[10px] px-2 rounded-full">
                152
              </span>
              <p className="text-xs mt-1">
                SROK Smart Phone 128GB, Oled Retina
              </p>
              <p className="font-semibold">
                $579.00{" "}
                <span className="line-through text-gray-400">$770.00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
