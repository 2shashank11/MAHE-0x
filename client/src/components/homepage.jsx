import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export function Titlebox() {
  return (
    <div id="titlebar" className="px-24 pt-20">
      <h1 className="font-semibold text-7xl">prjkt-MAHE0x</h1>
    </div>
  );
}

export function Homegrid() {
  return (
    <div className="max-w-[1024px] gap-3 grid grid-cols-12 grid-rows-2 pt-20 px-24">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Lab events
          </p>
          <h4 className="text-gray-600 font-medium text-large">
            $100,000 Grant received in 2024!
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Department achievements
          </p>
          <h4 className="text-gray-600 font-medium text-large">
            Prof. X receives award in IEEE event!
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
      </Card>

      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Student Wins
          </p>
          <h4 className="text-gray-600 font-medium text-large">
            More than 100 students get 8.5+
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-gray/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Projects</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src=""
        />
        <CardFooter className="absolute bg-slate/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">In making</p>
            <p className="text-black text-tiny">
              New projects are up for listing!
            </p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-gray/60 uppercase font-bold">
            New opportunities
          </p>
          <h4 className="text-black/90 font-medium text-xl">
            Get set for new collaborations!
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src=""
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src=""
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Collab with Professors</p>
              <p className="text-tiny text-white/60">
                Get ahead with new opportunities
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Notify
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function HomeButtons() {
  return (
    <div className="flex-auto pt-20 px-24 space-y-8">
      <div>
        <Button
          className="alldetails_button"
          color="primary"
          variant="solid"
          size="lg"
        >
          All Details
        </Button>
      </div>
      <div className="flex ">
        <div>
          <Link to="/login">
            <Button
              className="login_button"
              color="primary"
              variant="solid"
              size="lg"
            >
              Login
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/signup">
            <Button
              className="signup_button"
              color="primary"
              variant="solid"
              size="lg"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
