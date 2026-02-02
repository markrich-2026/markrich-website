import Image from "next/image";
import { ChevronDown } from "lucide-react";

const ExpandableCard = ({ data, isOpen, onToggle }) => {
  return (
    <div className="w-full border-b border-gray-200">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 py-5 text-left"
      >
        <Image src={data.icon} alt={data.title} width={36} height={36} />

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#18181B]">{data.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{data.text}</p>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-gray-500 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable Content */}
      <div
  className={`overflow-hidden transition-all duration-300 ${
    isOpen ? "opacity-100 pb-5" : "opacity-0 h-0"
  }`}
>
  <div className="pl-[52px] flex flex-col gap-3 max-sm:pl-0">
    {data.subServices.map((item, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-red-50 hover:border-[#ff1403] transition"
      >
        {item}
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default ExpandableCard;
