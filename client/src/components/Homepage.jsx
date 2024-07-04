// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   Image,
//   Button,
// } from "@nextui-org/react";
// import details from "../images/details.svg"


// export function HomeDescription(){
//   return(
//     <div>
//       <h1 className="text-5xl font-bold flex justify-center"> Welcome to</h1>
//       <h1 className="text-5xl font-bold flex align-middle justify-center"> MIT Research <div className="text-blue-600 ml-2"> Spotlight</div></h1>
//       <h1 className="mt-6">checkout the achievements, patents, journals and more, obtained by the professsors of the CSE dept. of MIT</h1>
//     </div>
//   );
// }

// export function Homegrid() {
//   return (
//     <div>
//     <div className="max-w-[1024px] gap-3 grid grid-cols-12 grid-rows-2 pt-20 px-24">
//       <Card className="col-span-12 sm:col-span-4 h-[300px]">
//         <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//           <p className="text-tiny text-white/60 uppercase font-bold">
//             Lab events
//           </p>
//           <h4 className="text-gray-600 font-medium text-large">
//             $100,000 Grant received in 2024!
//           </h4>
//         </CardHeader>
//         <Image
//           removeWrapper
//           alt="Card background"
//           className="z-0 w-full h-full object-cover"
//           src=""
//         />
//       </Card>

//       <Card className="col-span-12 sm:col-span-4 h-[300px]">
//         <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//           <p className="text-tiny text-white/60 uppercase font-bold">
//             Department achievements
//           </p>
//           <h4 className="text-gray-600 font-medium text-large">
//             Prof. X receives award in IEEE event!
//           </h4>
//         </CardHeader>
//         <Image
//           removeWrapper
//           alt="Card background"
//           className="z-0 w-full h-full object-cover"
//           src=""
//         />
//       </Card>

//       <Card className="col-span-12 sm:col-span-4 h-[300px]">
//         <CardHeader className="absolute z-10 top-1 flex-col !items-start">
//           <p className="text-tiny text-white/60 uppercase font-bold">
//             Student Wins
//           </p>
//           <h4 className="text-gray-600 font-medium text-large">
//             More than 100 students get 8.5+
//           </h4>
//         </CardHeader>
//         <Image
//           removeWrapper
//           alt="Card background"
//           className="z-0 w-full h-full object-cover"
//           src=""
//         />
//       </Card>
//       <Card
//         isFooterBlurred
//         className="w-full h-[300px] col-span-12 sm:col-span-5"
//       >
//         <CardHeader className="absolute z-10 top-1 flex-col items-start">
//           <p className="text-tiny text-gray/60 uppercase font-bold">New</p>
//           <h4 className="text-black font-medium text-2xl">Projects</h4>
//         </CardHeader>
//         <Image
//           removeWrapper
//           alt="Card example background"
//           className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
//           src=""
//         />
//         <CardFooter className="absolute bg-slate/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//           <div>
//             <p className="text-black text-tiny">In making</p>
//             <p className="text-black text-tiny">
//               New projects are up for listing!
//             </p>
//           </div>
//           <Button className="text-tiny" color="primary" radius="full" size="sm">
//             Notify Me
//           </Button>
//         </CardFooter>
//       </Card>

//       <Card
//         isFooterBlurred
//         className="w-full h-[300px] col-span-12 sm:col-span-7"
//       >
//         <CardHeader className="absolute z-10 top-1 flex-col items-start">
//           <p className="text-tiny text-gray/60 uppercase font-bold">
//             New opportunities
//           </p>
//           <h4 className="text-black/90 font-medium text-xl">
//             Get set for new collaborations!
//           </h4>
//         </CardHeader>
//         <Image
//           removeWrapper
//           alt="Relaxing app background"
//           className="z-0 w-full h-full object-cover"
//           src=""
//         />
//         <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
//           <div className="flex flex-grow gap-2 items-center">
//             <Image
//               alt="Breathing app icon"
//               className="rounded-full w-10 h-11 bg-black"
//               src=""
//             />
//             <div className="flex flex-col">
//               <p className="text-tiny text-white/60">Collab with Professors</p>
//               <p className="text-tiny text-white/60">
//                 Get ahead with new opportunities
//               </p>
//             </div>
//           </div>
//           <Button radius="full" size="sm">
//             Notify
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>


//     </div>
//   );
// }

// export function HomeButtons() {
//   const navigate = useNavigate();
// const handleAllDetails = () => {
//   navigate('/all-achievements')
// }
//   return (
//     <>

//     <div className="flex-auto pt-20 px-24 space-y-8">


//     <Card isFooterBlurred isPressable isHoverable onPress={handleAllDetails} className="py-4 h-4/2">

//           <CardBody className="overflow-visible py-2">
//             <Image
//               alt="Grants"
//               className="object-cover rounded-xl"
//               src={details}
//             />
//           </CardBody>
//           <CardFooter className="flex flex-row text-xl font-bold mt-3">
//             <div className="">
//              All Details 
//             </div>
//             <div className="">⟶</div>
//           </CardFooter>
//         </Card>


//       <div className="flex ">
//         <div>
//           <Link to="/signin">
//             <Button
//               className="login_button"
//               color="primary"
//               variant="solid"
//               size="lg"
//             >
//               Sign In
//             </Button>
//           </Link>
//         </div>
//         <div>
//           <Link to="/signup">
//             <Button
//               className="signup_button"
//               color="primary"
//               variant="solid"
//               size="lg"
//             >
//               Sign Up
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }


import React from "react";
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


export function HomeDescription() {
  return (
    <div className="text-center py-10 px-4 md:px-8 lg:px-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Welcome to
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 flex justify-center items-center">
        <span className="block sm:inline">MIT Research
          <span className="text-blue-600 ml-2 block sm:inline">Spotlight</span>

        </span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl md:text-2xl">
        Check out the achievements, patents, journals, and more obtained by the professors of the CSE dept. of MIT
      </p>
    </div>
  );
}

export function Homegrid() {
  return (
    <div className="container mx-auto px-2 md:px-8 lg:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="h-64 md:h-72">
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

        <Card className="h-64 md:h-72">
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

        <Card className="h-64 md:h-72">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card isFooterBlurred className="h-64 md:h-72">
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

        <Card isFooterBlurred className="h-64 md:h-72">
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
    </div>
  );
}

export function HomeButtons() {
  const navigate = useNavigate();
  const handleAllDetails = () => {
    navigate('/all-achievements')
  }
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
        <CardFooter className="flex flex-row justify-between text-xl font-bold mt-3 ml-2">
          <div>
            All Details
          </div>
          <div>
            ⟶
          </div>
        </CardFooter>
      </Card>

      <div className="flex justify-around mt-8">

        <Button
          className="text-xl font-bold"
          name="loginButton"
          color="primary"
          variant="flat"
          size="lg"
        >
          <Link to="/signin">
            Sign in
          </Link>
        </Button>
        <Button
          className="text-xl font-bold"
          name="signupButton"
          color="primary"
          variant="solid"
          size="lg"
        >
          <Link to='/signup'>
            Sign up
          </Link>
        </Button>

      </div>

    </div>
  );
}
