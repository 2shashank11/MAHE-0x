import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Navigation() {
  return (
    <header className="flex justify-items-center justify-between py-2 mt-6">
      <div className="flex items-center -space-x-1 text-xl font-serif">
        <div className="w-14 h-14 bg-black rounded-sm flex items-center justify-center text-xl text-white font-serif">
          R
        </div>
        <div className="text-xl font-serif text-black">Research Spotlight</div>
      </div>

      <nav className="space-x-24 border-1 border-gray-100 px-10 py-4 rounded-md">
        <Link href="/research" className="text-gray-600 hover:text-gray-900">
          Research
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900 px-8">
          About
        </Link>
      </nav>

      <div>
        <Link to="/signin">
          <Button
            className="bg-gray-200 hover:bg-black text-white font-serif text-lg px-14 py-7 rounded-lg"
            name="loginButton"
            size="lg"
          >
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  );
}
