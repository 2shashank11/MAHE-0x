import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Navigation() {
  return (
    <header className="flex justify-items-center justify-between py-2 mt-6">
      <div className="flex items-center -space-x-1 text-xl font-serif">
        <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center text-l text-white font-serif">
          R
        </div>
        <div className="text-medium font-serif text-black">
          Research Spotlight
        </div>
      </div>

      <nav className="space-x-20 border-1 border-gray-100 px-8 py-3 rounded-md">
        <Link
          href="/research"
          className="text-xs text-gray-600 hover:text-gray-900"
        >
          Research
        </Link>
        <Link
          href="/contact"
          className="text-xs text-gray-600 hover:text-gray-900"
        >
          Contact
        </Link>
        <Link
          href="/about"
          className="text-xs text-gray-600 hover:text-gray-900 px-8"
        >
          About
        </Link>
      </nav>

      <div>
        <Link to="/signin">
          <Button
            className="bg-gray-200 hover:bg-black text-white font-serif text-l px-8 py-4 rounded-sm "
            name="loginButton"
            size="md"
          >
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  );
}
