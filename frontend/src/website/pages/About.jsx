import React, { useEffect, useState } from "react";

export default function About() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const backgroundColor = theme === "dark" ? "#1A2233" : "#f9f9f9";
  const cardColor = theme === "dark" ? "#1F2A3C" : "#ffffff";
  const textColor = theme === "dark" ? "#ffffff" : "#1A2233";
  const mutedColor = "#9CA3AF";
  const accentColor = "#17C3B2";
  const priceColor = "#2AE89E";

  return (
    <div
      className="p-4 md:p-8 space-y-8 mt-25 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      {/* Toggle Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="px-4 py-1 border rounded-full text-sm font-semibold"
          style={{
            backgroundColor: accentColor,
            color: backgroundColor,
          }}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Top Banner */}
      <div
        className="rounded-xl shadow-md overflow-hidden"
        style={{ backgroundColor: cardColor }}
      >
        <img
          src="/About-Contact/44400a4882241d8412a5c1f4b0a9fc7ee567462d.png"
          alt="Best experience"
          className="w-full object-cover"
        />
      </div>

      {/* Purpose & Stats */}
      <div
        className="rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center items-center"
        style={{ backgroundColor: cardColor, color: mutedColor }}
      >
        <div className="md:col-span-1 font-semibold">
          OUR PURPOSE IS TO{" "}
          <span style={{ color: accentColor }}>ENRICH AND ENHANCE LIVES</span>{" "}
          THROUGH TECHNOLOGY
        </div>
        <div>
          <p className="text-2xl font-bold" style={{ color: priceColor }}>
            $12.5M
          </p>
          <p className="text-xs">TOTAL REVENUE FROM 2001 - 2023</p>
        </div>
        <div>
          <p className="text-2xl font-bold" style={{ color: priceColor }}>
            12K+
          </p>
          <p className="text-xs">ORDERS DELIVERED SUCCESSFUL EVERYDAY</p>
        </div>
        <div>
          <p className="text-2xl font-bold" style={{ color: priceColor }}>
            725+
          </p>
          <p className="text-xs">STORE AND OFFICE IN U.S AND WORLDWIDE</p>
        </div>
      </div>

      {/* Middle Section: Image + Text */}
      <div
        className="rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 overflow-hidden"
        style={{ backgroundColor: cardColor }}
      >
        <img
          src="/About-Contact/ffed801c54a3df4d8b1db4ddf00c1e5836c81322.jpg"
          alt="Delivery person"
          className="object-cover w-full h-full"
        />
        <div
          className="p-6 flex flex-col justify-center space-y-4"
          style={{ color: textColor }}
        >
          <h3 className="font-bold text-lg md:text-xl">
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </h3>
          <p className="text-sm" style={{ color: mutedColor }}>
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods...
          </p>
          <button
            className="px-4 py-2 rounded-full w-fit text-sm font-semibold"
            style={{ backgroundColor: accentColor, color: backgroundColor }}
          >
            OUR SHOWREEL
          </button>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "100% AUTHENTIC PRODUCTS",
            desc: "Swoo Tech Mart just distribute 100% authorized products...",
          },
          {
            title: "FAST DELIVERY",
            desc: "Fast shipping with a lots of option to delivery...",
          },
          {
            title: "AFFORDABLE PRICE",
            desc: "We offer an affordable & competitive price...",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-md p-6 flex flex-col justify-between"
            style={{ backgroundColor: cardColor, color: textColor }}
          >
            <h4 className="font-semibold mb-2">{card.title}</h4>
            <p className="text-sm mb-4" style={{ color: mutedColor }}>
              {card.desc}
            </p>
            <div
              className="w-6 h-6 rounded-full self-end"
              style={{ backgroundColor: accentColor }}
            ></div>
          </div>
        ))}
      </div>

      {/* Mission & Vision Section */}
      <div
        className="rounded-xl shadow-md overflow-hidden"
        style={{ backgroundColor: cardColor }}
      >
        <img
          src="/About-Contact/070bdfcb7d0609f801264b0136e1b1ed53d3a117.png"
          alt="Mission and Vision"
          className="w-full bg-center bg-contain"
        />
        <div className="p-6" style={{ color: textColor }}>
          <h3 className="font-semibold text-lg mb-4">OUR MISSION AND VISION</h3>
          <p className="text-sm mb-6" style={{ color: mutedColor }}>
            Nam maximus nunc a augue pulvinar, non euismod mauris tempus...
          </p>
          <h4 className="font-semibold text-lg mb-4">
            FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES
          </h4>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
            style={{ color: mutedColor }}
          >
            <ul className="space-y-1">
              <li>
                <span style={{ color: textColor }}>1997:</span> A small store in
                Brooklyn...
              </li>
              <li>
                <span style={{ color: textColor }}>1998:</span> Reader will be
                distracted...
              </li>
              <li>
                <span style={{ color: textColor }}>2000:</span> Dummy text...
              </li>
              <li>
                <span style={{ color: textColor }}>2004:</span> Contrary to
                popular belief...
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                <span style={{ color: textColor }}>2016:</span> All the Lorem
                Ipsum...
              </li>
              <li>
                <span style={{ color: textColor }}>2020:</span> Comes from
                sections...
              </li>
              <li>
                <span style={{ color: textColor }}>2023:</span> Many
                variations...
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div
        className="rounded-xl text-center shadow-md p-6"
        style={{ backgroundColor: cardColor, color: mutedColor }}
      >
        <h4 className="font-bold text-2xl mb-4" style={{ color: textColor }}>
          LEADERSHIP
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <div className="text-center">
            <img
              src="/About-Contact/Car-image.JPG"
              className="w-full max-w-[1500px] h-auto bg-gray-300 rounded-md mb-2"
              alt="Leader"
            />
          </div>
        </div>
        <p className="font-semibold text-2xl" style={{ color: textColor }}>
          Asad Arman Khan
        </p>
        <p className="text-xl">CEO</p>
      </div>
    </div>
  );
}
