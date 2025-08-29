import React, { useContext } from "react";
import Related from "./Related";
import { MainContext } from "../../Context";

export default function Description() {
  const { isDark } = useContext(MainContext);
  // Dynamic theme classes
  const containerBg = isDark
    ? "bg-[#0e1623] text-gray-100"
    : "bg-[#f3f4f6] text-gray-900";
  const cardBg = isDark ? "bg-[#121c2b]" : "bg-white";
  const textMuted = isDark ? "text-gray-100" : "text-gray-800";
  const strikeText = isDark ? "text-gray-400" : "text-gray-500";
  const bottomBorder = isDark ? "border-white" : "border-black";
  return (
    <>
      <div className={`${cardBg} rounded-lg p-4 space-y-6`}>
        {/* Tabs */}
        <div className="flex border-b border-gray-300 space-x-4">
          <button
            className={`${textMuted} font-semibold pb-2 border-b-2 ${bottomBorder}`}
          >
            DESCRIPTION
          </button>
          <button className={`${textMuted} font-semibold pb-2 `}>
            REVIEWS (5)
          </button>
          <button className={`${textMuted} font-semibold pb-2  `}>
            ADDITIONAL INFORMATION
          </button>
        </div>

        {/* Top description text */}
        <p className={`${textMuted} text-sm`}>
          Built for ultra-fast performance, the thin and lightweight Samsung
          Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop
          on a crisp, clear Super AMOLED display. Expandable memory lets you
          enjoy more of your favorite content. And connecting and sharing
          between all your Samsung devices is easier than ever. Welcome to life
          with the reimagined Samsung Galaxy Tab S2. Watch the world come to
          life on your tablet’s
          <span className="font-semibold"> Super AMOLED display </span>. With
          deep contrast, rich colors and crisp details, you won’t miss a thing.
        </p>

        {/* Large image */}
        <div className=" rounded-md overflow-hidden">
          <img
            src="/img/6ea9c6998affb467c8406ea6e31f8a92e6c8c4bf.jpg"
            alt="Tablet"
            className="w-full object-cover"
          />
        </div>

        <p className="text-xs italic text-gray-500">
          * The Galaxy Tab S2’s 4:3 ratio display provides you with an ideal
          environment for performing office tasks
        </p>

        {/* From the manufacturer section */}
        <div className="space-y-4">
          <h3 className="font-semibold">From the manufacturer</h3>
          <p className="text-gray-700 text-sm">
            Dive into the blockbuster movies you can’t wait to see. Switch
            between your favorite apps quickly and easily. The new and improved
            octa-core processor gives you the power and speed you need to see
            more and do more. Expand your tablet’s memory from 32GB up to an
            additional 128GB and enjoy more of your favorite music, photos,
            movies and games on the go with a microSD card. With Quick Connect,
            start a show on your Smart TV, and, with the touch of a button, take
            it with you by moving it to your Galaxy Tab S2.
          </p>
          <p className="text-gray-700 text-sm">
            Or send videos and photos from your tablet screen to your TV screen
            to share with everyone in the room. Work effortlessly between your
            Samsung tablet and Samsung smartphone with SideSync. Quickly drag
            and drop photos between devices. And even respond to a call from
            your smartphone right on your tablet screen.
          </p>
        </div>

        {/* Two-column image section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" rounded-md overflow-hidden">
            <img
              src="/img/d15cfb1bd9dce4527a8f1acabd5f2d425c2c5819.png"
              alt="Man with Tablet"
              className="w-full object-cover"
            />
          </div>
          <div className=" rounded-md overflow-hidden">
            <img
              src="/img/1d98a9fb2b514ca34cfffbd5ebbada8397107e7e.png"
              alt="Tablet Close Up"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="space-y-2">
          <h3 className="font-semibold">
            Samsung Galaxy Tab S2, 8-Inch, White
          </h3>
          <p className="text-gray-700 text-sm">
            The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing
            8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the
            front. Take high-quality pictures and video or video chat with
            friends, family, and colleagues. Customize your Galaxy Tab S2 with
            the apps you use most. The Samsung Galaxy Essentials widget provides
            a collection of premium complimentary apps optimized for your tablet
            screen. Select and download the apps you want to instantly upgrade
            your tablet experience.
          </p>
          <button className="text-blue-500 text-sm font-semibold">
            SHOW MORE
          </button>
        </div>
      </div>
      {/* <Related /> */}
    </>
  );
}
