import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" flex-grow-0 flex-shrink-0 bg-gray-100 text-center py-4 mt-40">
      <p className="text-gray-600">© 2024 MIT Research Spotlight</p>
      <div className="flex justify-center mt-4">
        <Link to="/about" className="text-blue-600 font-medium">
          About Us
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
