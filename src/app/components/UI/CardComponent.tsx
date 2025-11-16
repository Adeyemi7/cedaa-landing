"use client";
import React, { useState } from "react";
import type { StaticImageData } from "next/image";
import BottlesCover from "@/app/assests/icons/BottlesCover";
import UnsweetenedYoghurt from "@/app/assests/images/unsweet-50cl.png";
import StrawberryYoghurt from "@/app/assests/images/strawberry-50cl.png";
import PineappleYoghurt from "@/app/assests/images/pineapple-50cl.png";
import VanillaYoghurt from "@/app/assests/images/vanilla-50cl.png";
import Image from "next/image";

interface Size {
  size: string;
}

interface YoghurtProduct {
  Title: string;
  id: number;
  name: string;
  tag: string;
  sizes: Size[];
  description: string;
  imageUrl: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  yoghurtBottle:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | StaticImageData;
}

interface YoghurtTypes {
  id: number;
  name: string;
}

const YoghurtName: YoghurtTypes[] = [
  {
    id: 1,
    name: "Vanilla Yoghurt",
  },
  {
    id: 2,
    name: "Unsweetened Yoghurt",
  },
  {
    id: 3,
    name: "Strawberry Yoghurt",
  },
  {
    id: 4,
    name: "Pineapple Yoghurt",
  },
];

const Yoghurt: YoghurtProduct[] = [
  {
    Title: "Vanilla Yoghurt",
    id: 1,
    name: "Classic Greek Yogurt",
    tag: "Sizes Available",
    sizes: [{ size: "35cl" }, { size: "50cl" }, { size: "1tr" }],
    imageUrl: BottlesCover,
    yoghurtBottle: VanillaYoghurt,
    description:
      "Vanilla yoghurt is a smooth, creamy dairy product made by fermenting milk with live cultures and blending it with vanilla for a subtly sweet flavor. It’s a versatile choice—delicious on its own, paired with fruits and granola, or used in smoothies and desserts. Beyond taste, it offers nutritional benefits like protein, calcium, and probiotics that support digestion and overall health.",
  },

  {
    Title: "Unsweetened Yoghurt",
    id: 2,
    name: "Plain Unsweetened Yogurt",
    tag: "Sizes Available",
    sizes: [{ size: "35cl" }, { size: "50cl" }, { size: "1tr" }],
    imageUrl: BottlesCover,
    yoghurtBottle: UnsweetenedYoghurt,
    description:
      "Unsweetened yoghurt is a plain, fermented dairy product made with milk and live cultures, without added sugar or flavoring. It has a tangy taste and creamy texture, making it a versatile base for both sweet and savory dishes. Naturally rich in protein, calcium, and probiotics, it supports gut health and can be enjoyed on its own, with fruits and honey, or as an ingredient in cooking and smoothies.",
  },
  {
    Title: "Strawberry Yoghurt",
    id: 3,
    name: "Strawberry Swirl Yogurt",
    tag: "Sizes Available",
    sizes: [{ size: "50cl" }],
    imageUrl: BottlesCover,
    yoghurtBottle: StrawberryYoghurt,
    description:
      "Strawberry yoghurt is a creamy, cultured dairy snack blended with the sweet. fruity flavor of strawberries. It balances the tanginess of yoghurt with a refreshing taste, making it a favorite for both kids and adults Packed with protein, calcium, and probiotics, it can be enjoyed on its own, with toppings like granola, or as part of smoothies and desserts.",
  },
  {
    Title: "Pineapple Yoghurt",
    id: 4,
    name: "Pineapple Delight Yogurt",
    tag: "Sizes Available",
    sizes: [{ size: "50cl" }, { size: "1tr" }],
    imageUrl: BottlesCover,
    yoghurtBottle: PineappleYoghurt,
    description: `Pineapple yoghurt is a smooth, cultured dairy product infused with the tropical sweetness of pineapple. It combines yoghurt's creamy tang with a refreshing, fruity flavor, making it both delicious and energizing. Rich in protein, calcium, and probiotics, it's a healthy choice on its own or as a tasty addition to smoothies, snacks, and desserts`,
  },
];

const CardComponent: React.FC = () => {
  // start selected with the first yoghurt type
  const [selectedId, setSelectedId] = useState<number>(YoghurtName[0].id);

  // find the product with matching id, fallback to first product if not found
  const product =
    Yoghurt.find((p) => p.id === selectedId) ??
    (Yoghurt.length ? Yoghurt[0] : null);

  return (
    <div className="mt-10">
      <div
        className="overflow-x-auto whitespace-nowrap flex flex-row gap-3 transition delay-300 mb-6 md:mb-8"
        role="tablist"
      >
        {YoghurtName.map((yoghurtType) => {
          const isActive = yoghurtType.id === selectedId;

          return (
            <button
              key={yoghurtType.id}
              onClick={() => setSelectedId(yoghurtType.id)}
              role="tab"
              className={
                "text-center my-1 px-6 py-4 rounded-t-[16] font-extrabold text-[20px] " +
                (isActive
                  ? "text-[#FF570E] bg-[#FAF3E3] shadow-md"
                  : "text-[#333333] bg-[#E7E7E7] hover:bg-[#FAF3E3]")
              }
            >
              {yoghurtType.name}
            </button>
          );
        })}
      </div>

      <div className="w-full mx-auto -mt-10 mb-10">
        {product ? (
          <div
            key={product.id}
            className="w-full bg-[#FAF3E3] shadow-md py-5 flex flex-col md:flex-row overflow-hidden transition-all duration-200"
          >
            {" "}
            <div className="w-full md:w-1/2 relative flex justify-center items-center p-8">
              <div className="absolute top-0 left-0 w-full h-full">
                <product.imageUrl className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                {typeof product.yoghurtBottle === "function" ? (
                  <product.yoghurtBottle className="h-auto w-[200px]  rounded-2xl border-2 border-red-500" />
                ) : (
                  <Image
                    src={(product.yoghurtBottle as StaticImageData).src}
                    alt={product.Title}
                    width={100}
                    height={100}
                    className="h-auto w-[200px] rounded-lg"
                  />
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center p-10 text-center md:text-left place-content-center max-w-[492px] font-medium">
              <h3 className="text-3xl font-bold text-[#FF570E] mb-4 uppercase">
                {product.Title}
              </h3>

              <div>
                <span className="font-bold text-[#333333] text-[16px]">
                  {product.tag}:
                </span>
                <ul className="list-none text-gray-600 mt-2 flex flex-row gap-3">
                  {product.sizes.map((size, index) => (
                    <li
                      className="bg-[#ffffff] py-3.5 px-5 font-bold text-[16px] text-center rounded-[5px]"
                      key={index}
                    >
                      {size.size}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-4 text-[#333333] text-[16px] leading-relaxed mt-3">
                {product.description}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-8">No products available.</div>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
