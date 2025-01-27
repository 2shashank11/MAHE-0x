import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" footer bg-gray-100 text-center py-4">
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
