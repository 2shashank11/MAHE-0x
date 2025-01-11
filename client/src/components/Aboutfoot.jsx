import React from "react";
import { Link } from "react-router-dom";

export default function Aboutfooter() {
  return (
    <footer className="bg-gray-100  text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-gray-600">© 2024 MIT Research Spotlight</p>
        <div className="flex justify-center mt-4">
          <Link to="/" className="text-blue-600 font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
