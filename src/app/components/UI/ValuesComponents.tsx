import CommitmentIcon from "@/app/assests/icons/CommitmentIcon";
import DiamondIcon from "@/app/assests/icons/DiamondIcon";
import IntegrityIcon from "@/app/assests/icons/IntegrityIcon";
import InnovationIcon from "@/app/assests/icons/InnovationIcon";
import TeamIcon from "@/app/assests/icons/TeamIcon";
import React from "react";

interface ValuesDetailsProps {
  id: number;
  icon: React.JSX.Element;
  title: string;
  description: string;
}
const ValuesDetails: ValuesDetailsProps[] = [
  {
    id: 1,
    icon: <CommitmentIcon />,
    title: "Commitment",
    description:
      "Our promise goes beyond products. We are devoted to nourishing families, supporting healthier lifestyles, and delivering value to our customers, partners, and communities.",
  },
  {
    id: 2,
    icon: <DiamondIcon />,
    title: "Quality",
    description:
      "We are committed to producing yoghurt that meets the highest standards — fresh, nutritious, and crafted with care. Every spoonful reflects our dedication to excellence in taste, safety, and consistency.",
  },
  {
    id: 3,
    icon: <IntegrityIcon />,
    title: "Integrity",
    description:
      "Transparency and honesty are at the heart of everything we do. From sourcing ingredients to delivering our products, we uphold the trust our customers place in us.",
  },
  {
    id: 4,
    icon: <InnovationIcon />,
    title: "Innovation",
    description:
      "We embrace creativity to bring fresh ideas and unique flavors to life. By blending tradition with modern practices, we constantly explore new ways to delight our customers and improve their experience.",
  },
  {
    id: 5,
    icon: <TeamIcon />,
    title: "Team Spirit",
    description:
      "Behind every product is a dedicated team working together with passion and purpose. Our culture of collaboration ensures that innovation and excellence remain central to our journey.",
  },
];

const ValuesComponents = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 md:px-20 lg:px-32">
      {ValuesDetails.slice(0, 3).map((value) => (
        <div
          key={value.id}
          className="bg-[#FFFFFF] max-w-[392px] rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
        >
          <div className="bg-[#FFFFFF] w-[55px] flex h-[55px] p-2 items-start rounded-lg shadow-lg my-4">
            <div className="flex justify-center items-center h-full w-full">
              {value.icon}
            </div>
          </div>

          <p className="text-[#333333] text-[24px] font-bold leading-6">
            {value.title}
          </p>

          <p className="text-[#767776] text-[14px] font-medium leading-5 mt-2">
            {value.description}
          </p>
        </div>
      ))}

      <div className=" lg:col-span-3 grid-cols-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:flex grid justify-center gap-4">
        {ValuesDetails.slice(3).map((value) => (
          <div
            key={value.id}
            className="bg-[#FFFFFF] max-w-[392px] rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-[#FFFFFF] w-[55px] flex h-[55px] p-2 items-start rounded-lg shadow-lg my-4">
              <div className="flex justify-center items-center h-full w-full">
                {value.icon}
              </div>
            </div>

            <p className="text-[#333333] text-[24px] font-bold leading-6">
              {value.title}
            </p>

            <p className="text-[#333333] text-[14px] font-medium leading-5 mt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesComponents;
