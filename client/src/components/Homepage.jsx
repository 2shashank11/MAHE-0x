import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import details from "../images/details.svg";
import { AuthContext } from "../contexts/AuthContext";
import { Divider } from "@nextui-org/react";

export function HomeDescription() {
  return (
    <div className="text-center px-4 md:px-8 lg:px-24">
      <h1 className="pt-12 text-3xl sm:text-4xl md:text-6xl font-bold">
        Welcome to
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 flex justify-center items-center">
        <span className="block sm:inline">
          MIT Research
          <span className="text-blue-600 ml-2 block sm:inline">Spotlight</span>
        </span>
      </h1>
      <p className="pt-4 mt-6 text-lg sm:text-xl md:text-2xl">
        Check out the achievements, patents, journals, and more obtained by the
        faculties of the CSE dept. of MIT
      </p>
    </div>
  );
}

export function Homegrid() {
  return (
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card isFooterBlurred className="h-64 md:h-80">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h1 className=" px-2 text-xl text-black uppercase font-bold">
              New
            </h1>
            <h1 className=" px-2 text-3xl text-black uppercase font-bold">
              Upcoming Projects!
            </h1>
            <p className="px-2 text-gray-400">tenure 2024-2025</p>
            <Divider />
            <div className="text-blue-600">
              <p className="px-2">
                {" "}
                1. CyberSec in biomachines - Dr. Prof, Dr. Prof [CSE Dept,
                Biotech Dept.]
              </p>
              <p className="px-2">
                {" "}
                2. Fingerprint analysis of animals - Dr. Prof, Dr. Prof [CSE
                Dept, Biotech Dept.]
              </p>
              <p className="px-2">
                {" "}
                3. Efficiency of lube in motors underwater - Dr. Prof, Dr. Prof
                [Mechatronics Dept, Biotech Dept.]
              </p>
              <p className="px-2">
                {" "}
                4. Analysis of brainwaves in cats - Dr. Prof, Dr. Prof [IT Dept,
                Biotech Dept.]
              </p>
              <p className="px-2">
                {" "}
                5. Identifying the issues in healthcare indts - Dr. Prof, Dr.
                Prof [Mechatronics Dept, Biotech Dept.]
              </p>
              <p className="px-2">
                {" "}
                6. Fullstack webdev for ML model - Dr. Prof, Dr. Prof [CSE Dept,
                CSE Fin Dept.]
              </p>
            </div>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src=""
          />
          <CardFooter className="absolute bg-blue-600 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white px-2 ">
                New projects are up for listing!
              </p>
            </div>
            <Button className="text-tiny" radius="full" size="sm">
              Checkout →
            </Button>
          </CardFooter>
        </Card>

        <Card isFooterBlurred className="h-64 md:h-80">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h1 className="px-2 text-xl text-black uppercase font-bold">
              Department
            </h1>
            <h1 className="px-2 text-3xl text-black uppercase font-bold">
              INFO
            </h1>
            <p className="px-2 text-gray-400">in 2024</p>
            <Divider />


              </div>
            </div>
            <Button radius="full" size="sm">
              Notify
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export function HomeButtons() {
  const { isLoggedIn } = useContext(AuthContext);
  const Navigate = useNavigate();
  const handleAllDetails = () => {
    Navigate("/all-achievements");
  };
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-24 py-10">
      <Card
        isFooterBlurred
        isPressable
        isHoverable
        onPress={handleAllDetails}
        className="py-4"
      >
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Grants"
            className="object-cover rounded-xl"
            src={details}
          />
        </CardBody>
        <CardFooter className="flex flex-row justify-between text-xl border-t-1 border-default-600 font-bold mt-3 ml-2">
          <div>All Details</div>
          <div className="px-8">⟶</div>
        </CardFooter>
      </Card>

      {!isLoggedIn ? (
        <>
          <div className="flex justify-around mt-8">
            <Link to="/signin">
              <Button
                className="text-xl font-bold"
                name="loginButton"
                color="primary"
                variant="flat"
                size="lg"
              >
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                className="text-xl font-bold"
                name="signupButton"
                color="primary"
                variant="solid"
                size="lg"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}
