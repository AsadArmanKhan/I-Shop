import React from 'react'

export default function DealsOfDay() {
  return (
    <>
          <div className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Info */}
          <div className="flex-1 p-6">
            <div className="">
              <h2 className=" p-5 rounded-xl text-white bg-teal-600 font-semibold mb-2">
                DEALS OF THE DAY
              </h2>

              <div className="flex flex-col md:flex-row items-center">
                {/* Product Images */}
                <div className="flex md:flex-col items-center gap-2 mr-6">
                  <div className="flex md:flex-col gap-2">
                    <img
                      src="/img/prod5.png.png"
                      alt="Thumb 1"
                      className="w-10 h-16 object-contain"
                    />
                    <img
                      src="/img/4 → prod6.png.png"
                      alt="Thumb 1"
                      className="w-10 h-16 object-contain"
                    />
                    <img
                      src="/img/4 → prod7.png.png"
                      alt="Thumb 2"
                      className="w-10 h-16 object-contain"
                    />
                    <img
                      src="/img/4 → prod8.png.png"
                      alt="Thumb 3"
                      className="w-10 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1 md:flex-col items-center gap-2 mr-6">
                  <img
                    src="/img/prod5.png.png"
                    alt="Main Phone"
                    className="h-auto rounded-lg"
                  />
                </div>
                {/* Product Details */}
                <div className="flex-">
                  <h3 className="text-xl font-bold text-gray-800">
                    Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                  </h3>
                  <p className="text-teal-600 text-2xl font-bold mt-2">
                    $569.00{" "}
                    <span className="line-through text-gray-400 text-base ml-2">
                      $750.00
                    </span>
                  </p>
                  <span className="inline-block bg-teal-100 text-teal-600 font-bold px-3 py-1 text-sm rounded mt-1">
                    SAVE $199.00
                  </span>

                  <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
                    <li>
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </li>
                    <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                    <li>
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </li>
                  </ul>

                  <div className="flex gap-2 mt-3">
                    <span className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                      FREE SHIPPING
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                      FREE GIFT
                    </span>
                  </div>

                  <div className="mt-4 text-sm font-semibold">
                    HURRY UP! PROMOTION WILL EXPIRE IN
                  </div>

                  {/* Countdown Timer (Static mock) */}
                  <div className="flex gap-2 mt-1 text-center text-xs">
                    <div className="bg-gray-200 rounded p-2">
                      -162 <div className="text-[10px]">d</div>
                    </div>
                    <div className="bg-gray-200 rounded p-2">
                      -9 <div className="text-[10px]">h</div>
                    </div>
                    <div className="bg-gray-200 rounded p-2">
                      -3 <div className="text-[10px]">m</div>
                    </div>
                    <div className="bg-gray-200 rounded p-2">
                      -4 <div className="text-[10px]">s</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-teal-500 rounded-full w-[35%]"></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Sold: <strong>26/75</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar with Ads */}
          <div className="w-full md:w-64 bg-gray-100 p-4 flex flex-col gap-4">
            <img
              src="/img/Main → Section → Link → ban1.png.png"
              alt="Gamepad Sale"
              className="rounded-lg object-cover h-32 w-full"
            />
            <img
              src="/img/Main → Section → Link → ban2.png (1).png"
              alt="Magazine"
              className="rounded-lg object-cover h-32 w-full"
            />
            <img
              src="/img/Main → Section → Link → ban2.png.png"
              alt="Phone Angle"
              className="rounded-lg object-cover h-32 w-full"
            />
          </div>
        </div>

        {/* Pre Order Banner */}
        <div className="bg-teal-500 relative text-white p-6 flex items-center justify-between mt-4">
          <div>
            <h3 className="text-xl font-semibold">PRE ORDER</h3>
            <p className="text-sm">BE THE FIRST TO OWN</p>
            <p className="mt-1 text-sm font-bold">From $399</p>
          </div>
          <div className="rounded-[200] top-5 bg-[#5F81A2]">
            shvcjhadv hj jh
            <div className="absolute top-10 left-100">
              <img
                src="/img/banner.png.png"
                alt="Smartwatch"
                className="h-20 object-contain"
              />
            </div>
          </div>
          <div>
            <div className="">
              <p className="text-white text-[10px] md:text-xs leading-tight">
                Opplo Watch Sport
                <br />
                Series 8
              </p>
              <p className="text-white text-sm md:text-base font-medium">
                A healthy leap ahead
              </p>
            </div>
          </div>
          <button className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
            Discover Now
          </button>
        </div>
      </div>
    </>
  )
}
