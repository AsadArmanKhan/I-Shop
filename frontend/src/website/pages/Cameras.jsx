import React, { useContext } from "react";
import { MainContext } from "../../Context";
import { Link } from "react-router-dom";
import RecentlyViewed from "./RecentlyViewed";

export default function Cameras() {
  const { products, isDark } = useContext(MainContext);

  const wantedAudioProducts = [
    "688898439a34014333c1742c",
    "688898109a34014333c1742a",
    "688898769a34014333c1742e",
    "68889ae29a34014333c1761b",
  ];
  const wantedGamingProducts = [
    "6888963d9a34014333c172a8",
    "688898b09a34014333c17430",
    "688898de9a34014333c17432",
    "688899359a34014333c17434",
  ];
  const wantedEquipmentProducts = [
    "6888996e9a34014333c17436",
    "688897879a34014333c17426",
    "688897d69a34014333c17428",
    "68889a709a34014333c175aa",
  ];
  const wantedChairProduct = ["6889c20016826e6432492506"];

  const filteredAudioProducts = wantedAudioProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const filteredGamingProducts = wantedGamingProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const filteredEquipmentProducts = wantedEquipmentProducts
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  const filteredChairProduct = wantedChairProduct
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean);

  // Theming classes
  const bgMain = isDark ? "bg-[#1A2233]" : "bg-white";
  const cardBg = isDark ? "bg-[#1F2A3C]" : "bg-gray-100";
  const textAccent = isDark ? "text-[#17C3B2]" : "text-teal-600";
  const mutedText = isDark ? "text-gray-400" : "text-gray-600";
  const headingText = isDark ? "text-white" : "text-black";
  const promoBg = isDark ? "bg-[#17C3B2]" : "bg-teal-600";

  return (
    <>
      <div className={`${bgMain} min-h-screen p-4 space-y-6`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Audios & Cameras */}
          <div className={`${cardBg} rounded-lg p-4 space-y-4`}>
            <div className="flex justify-between items-center">
              <h2 className={`font-semibold ${textAccent}`}>
                AUDIOS & CAMERAS
              </h2>
              <a
                href="#"
                className={`text-xs hover:${textAccent} ${mutedText}`}
              >
                View All
              </a>
            </div>
            <div
              className="relative w-full h-50 rounded-md overflow-hidden bg-cover bg-no-repeat bg-center flex text-white"
              style={{ backgroundImage: "url(/img/Mike.png)" }}
            >
              <div className="absolute bg-black bg-opacity-30"></div>
              <div className="relative z-10 text-xl px-8 py-8">
                <p className="font-bold">Best</p>
                <p className="font-bold">Speaker</p>
                <p className="font-bold">2023</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {(() => {
                const staticImages = [
                  { src: "/img/speaker.png", alt: "Speaker" },
                  { src: "/img/camera.png", alt: "DSLR Camera" },
                  { src: "/img/earbuds.png", alt: "Earbuds" },
                  { src: "/img/mike2.png", alt: "Microphone" },
                ];
                return filteredAudioProducts.map((p, index) => {
                  const { src, alt } = staticImages[index] || {};
                  return (
                    <Link to={`/productdetailpage/${p._id}`} key={p._id}>
                      <div>
                        <img src={src} alt={alt} className="mx-auto w-25" />
                        <p className={`font-semibold ${headingText}`}>
                          {p.name}
                        </p>
                        <span className={`${mutedText}`}>
                          {p.productcount} Items
                        </span>
                      </div>
                    </Link>
                  );
                });
              })()}
            </div>
          </div>

          {/* Gaming */}
          <div className={`${cardBg} rounded-lg p-4 space-y-4`}>
            <div className="flex justify-between items-center">
              <h2 className={`font-semibold ${textAccent}`}>GAMING</h2>
              <a
                href="#"
                className={`text-xs hover:${textAccent} ${mutedText}`}
              >
                View All
              </a>
            </div>
            <div
              className="relative w-full h-50 rounded-md overflow-hidden bg-cover bg-no-repeat bg-center flex text-black"
              style={{ backgroundImage: "url(/img/Mouse.png)" }}
            >
              <div className="absolute bg-black bg-opacity-30"></div>
              <div className="relative z-10 text-l px-8 py-8 text-black">
                <p className="font-bold">WIRELESS</p>
                <p className="font-bold">RGB GAMING</p>
                <p className="font-bold">MOUSE</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {(() => {
                const staticImages = [
                  { src: "/img/bigtv.png", alt: "Monitors" },
                  { src: "/img/chair.png", alt: "Chair" },
                  { src: "/img/joystick.png", alt: "Controller" },
                  { src: "/img/keyboard.png", alt: "Keyboards" },
                ];
                return filteredGamingProducts.map((p, index) => {
                  const { src, alt } = staticImages[index] || {};
                  return (
                    <Link to={`/productdetailpage/${p._id}`} key={p._id}>
                      <div>
                        <img src={src} alt={alt} className="mx-auto w-25" />
                        <p className={`font-semibold ${headingText}`}>
                          {p.name}
                        </p>
                        <span className={`${mutedText}`}>
                          {p.productcount} Items
                        </span>
                      </div>
                    </Link>
                  );
                });
              })()}
            </div>
          </div>

          {/* Office Equipments */}
          <div className={`${cardBg} rounded-lg p-4 space-y-4`}>
            <div className="flex justify-between items-center">
              <h2 className={`font-semibold ${textAccent}`}>
                OFFICE EQUIPMENTS
              </h2>
              <a
                href="#"
                className={`text-xs hover:${textAccent} ${mutedText}`}
              >
                View All
              </a>
            </div>
            <div
              className="relative w-full h-50 rounded-md overflow-hidden bg-cover bg-no-repeat bg-center flex justify-center text-white"
              style={{ backgroundImage: "url(/img/projector.png)" }}
            >
              <div className="absolute bg-black bg-opacity-30"></div>
              <div className="relative z-10 text-xs py-9">
                <p className="font-light text-xs text-center">
                  Home Theater 4k
                </p>
                <p className="font-semibold text-3xl">Laser Projector</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center text-xs">
              {(() => {
                const staticImages = [
                  { src: "/img/printer.png", alt: "Printers" },
                  { src: "/img/wifi.png", alt: "Network" },
                  { src: "/img/cctv.png", alt: "Security" },
                  { src: "/img/projector2.png", alt: "Projectors" },
                ];
                return filteredEquipmentProducts.map((p, index) => {
                  const { src, alt } = staticImages[index] || {};
                  return (
                    <Link to={`/productdetailpage/${p._id}`} key={p._id}>
                      <div>
                        <img src={src} alt={alt} className="mx-auto w-25" />
                        <p className={`font-semibold ${headingText}`}>
                          {p.name}
                        </p>
                        <span className={`${mutedText}`}>
                          {p.productcount} Items
                        </span>
                      </div>
                    </Link>
                  );
                });
              })()}
            </div>
          </div>
        </div>

        {/* Promo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`${promoBg} rounded-lg flex justify-between p-4 text-white`}
          >
            {filteredChairProduct.map((p) => (
              <React.Fragment key={p._id}>
                <div>
                  <h3 className="uppercase font-semibold">
                    Massage Chair <br /> Luxury
                  </h3>
                  <p className="text-xs">
                    Fuka Relax Full Body <br /> Massage Chair
                  </p>
                  <Link to="/store">
                    <button className="cursor-pointer mt-7 bg-white text-black font-semibold text-xl px-3 py-1 rounded">
                      Shop Now
                    </button>
                  </Link>
                </div>
                <Link to={`/productdetailpage/${p._id}`}>
                  <img
                    src="/img/orangechair.png"
                    alt="Massage Chair"
                    className="w-20 md:w-35"
                  />
                </Link>
              </React.Fragment>
            ))}
          </div>
          <Link to={"/store"}>
            <div
              className="bg-gray-800 bg-cover bg-center rounded-lg p-4 h-50"
              style={{ backgroundImage: "url(/img/phonepromo.png)" }}
            ></div>
          </Link>
        </div>

        {/* Recently Viewed */}
        <RecentlyViewed />
      </div>
    </>
  );
}
