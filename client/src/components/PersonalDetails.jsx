import { Image, Button, Input } from "@nextui-org/react";

function PersonalDetails() {
    return (
        <div className="m-3">
            <h1 className=" text-3xl font-bold mb-10"> Personal Details </h1>

            <div className="m-1 gap-x-8 grid grid-cols-2 max-md:grid-cols-1">

                <div className="flex flex-col m-10 items-center gap-6">  {/* contains profile photo and button*/}
                    <Image src="https://nextui.org/images/hero-card.jpeg" alt="Profile Picture" className="h-96 w-96" />
                    <label >
                        <Input type="file"/>
                    </label>
                </div>

                <div className="grid grid-rows-4">

                    <div className=" col-start-2 col-end-3 row-start-1 row-end-2 mt-8">
                        <h2 className="text-xl font-bold">Name</h2>
                        <div className="flex flex-col gap-4 mt-4 md:flex-row">
                            <Input label="First name" />
                            <Input label="Middle name" />
                            <Input label="Last name" />
                        </div>
                    </div>


                    <div className=" mt-6 grid grid-cols-1 gap-x-12 col-start-2 col-end-3 row-start-2 row-end-3 md:grid-cols-2">
                        <h2 className="text-xl font-bold row-start-1 row-end-2 col-start-1 col-end-2">Email</h2>
                        <Input type="email" label="Email" className="mt-4 row-start-2 row-end-3 col-start-1 col-end-2" />
                        <h2 className="text-xl font-bold">Phone number</h2>
                        <Input label="Phone number" className="mt-4" />
                    </div>

                    <div className=" mt-6 grid grid-cols-1 col-start-2 col-end-3 row-start-3 row-end-4 md:grid-cols-3" >
                        <div>
                            <h2 className="text-xl font-bold">MAHE ID</h2>
                            <Input label="Enter MAHE ID" className="col-start-1 col-end-2 row-start-2 row-end-3" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Department</h2>
                            <Input label="Department" className="row-start-2 row-end-3 col-start-2 col-end-3" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Position</h2>
                            <Input label="Enter Position" className="row-start-2 row-end-3 col-start-3 col-end-4" />
                        </div>

                    </div>

                    {/* <div className=" mt-6 grid grid-rows-6 col-start-2 row-start-3 md:grid-cols-3">
                        <h2>
                            MAHE ID
                        </h2>
                        <Input />
                        <h2>
                            Department
                        </h2>
                        <Input />
                        <h2>
                            Position
                        </h2>
                        <Input />
                    </div> */}

                    <div className="flex flex-row gap-10 col-start-2 col-end-3 row-start-4 row-end-5 mt-10 max-md:flex-col">
                        <Button color="default" className="">Change Password</Button>
                        <Button color="primary" className=""> Save and Proceed</Button>
                    </div>

                </div>

            </div>

        </div>
    );
}
export default PersonalDetails