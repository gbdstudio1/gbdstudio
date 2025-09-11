import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-900 border-t border-gray-700 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-4xl mx-auto">
        {/* WhatsApp */}
        <p className="text-sm text-gray-300 mb-2 md:mb-0">
          📱 WhatsApp:{" "}
          <a
            href="https://wa.me/1131889692"
            className="text-green-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            11 3188-9692
          </a>
        </p>

        {/* Gmail */}
        <p className="text-sm text-gray-300">
          📧 Email:{" "}
          <a
            href="mailto:gbdstudio1@gmail.com"
            className="text-blue-400 hover:underline"
          >
            gbdstudio1@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
