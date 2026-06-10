import { BiDownload } from "react-icons/bi";

const FloatingDownloadButton = () => {
  return (
    <a
      href="/pdf/company-profile-markrich-solutions.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-10 z-50 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2"
    >
      <BiDownload size={20} />
      <span>Download Brochure</span>
    </a>
  );
};

export default FloatingDownloadButton;
