import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { toast } from "react-hot-toast";
import axios from "axios";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Navigation() {
  const Navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleUserLogout = async (e) => {
    const response = await axios.post("/api/logout", { withCredentials: true });
    console.log(response);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged Out!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      duration: 2000,
    });
    Navigate("/");
  };

  return (
    <header className="flex items-center justify-between py-8 px-16 ">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center text-white font-serif text-lg">
          R
        </div>
        <span className="text-xl font-serif text-black">
          Research Spotlight
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-10">
        <Link
          to="/all-achievements"
          className=" Nav-button-1 px-8 py-2 text-gray-600 text-sm font-medium hover:text-black rounded-sm"
        >
          Dashboard
        </Link>
        <Link
          to="/contact"
          className="Nav-button-2 px-8 py-2  text-gray-600 text-sm font-medium hover:text-black rounded-sm"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="Nav-button-3 px-8 py-2  text-gray-600 text-sm font-medium hover:text-black rounded-sm"
        >
          About
        </Link>
      </nav>

      {/* Sign-in Button */}
      <div>
        <Link to="/signin">
          <Button
            className="bg-blue-200 text-black font-serif text-sm font-medium px-10 py-2 rounded-sm hover:bg-blue-400 transition"
            name="loginButton"
          >
            Sign in
          </Button>
        </Link>
      </div>
    </header>
  );
}
