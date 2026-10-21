import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/contact";

// Stacked above the floating brochure button (right-5 bottom-10)
const FloatingContactButtons = () => {
  return (
    <div className="fixed right-5 bottom-28 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Markrich Solutions on WhatsApp"
        className="h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition flex items-center justify-center"
      >
        <FaWhatsapp size={26} />
      </a>
      <a
        href={PHONE_LINK}
        aria-label="Call Markrich Solutions"
        className="h-12 w-12 rounded-full bg-[#ED3630] text-white shadow-lg hover:scale-105 transition flex items-center justify-center"
      >
        <FaPhoneAlt size={18} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
