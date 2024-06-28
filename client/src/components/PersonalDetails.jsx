import { Card, Image, Button, Input } from "@nextui-org/react";


function PersonalDetails() {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-4 sm:w-auto md:w-fit m-4">
            <h1 className=" text-3xl font-bold max-w-96">Personal Details</h1>
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none col-start-1 col-end-2 flex flex-col max-w-96"
            >
                <Image
                    alt="Profile Picture"
                    className="object-cover"
                    height={200}
                    src="https://nextui.org/images/hero-card.jpeg"
                    width={200}
                />

                <Button color="primary">
                    Upload Image
                </Button>
            </Card>

            <div className=" col-start-2 col-end-3 row-start-1 row-end-2">
                <h2 className=" size-8 text-xl font-bold">Name</h2>
                <div className=" flex flex-col gap-4 sm:flex-row md:flex-row ">
                    <Input className="w-auto" label="First name" />
                    <Input className="w-auto" label="Middle name" />
                    <Input className="w-auto" label="Last name" />
                </div>
            </div>


            <div className="grid grid-cols-2 grid-rows-2 col-start-2 col-end-3 row-start-2 row-end-3">
                <h2>Email</h2>
                <Input type="email" label="Email" className="row-start-2 row-end-3 col-start-1" />
                <h2>Phone number</h2>
                <Input label="Phone number" />
            </div>

            <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                <h2>MAHE ID</h2>
                <Input label="Enter MAHE ID" />
                <h2>Department</h2>
                <Input label="Enter Department" />
                <h2>Position</h2>
                <Input label="Enter Position" />
            </div>

            <div className="col-start-2 col-end-3 row-start-4 row-end-5">
                <Button color="default">Change Password</Button>
                <Button color="primary"> Save and Proceed</Button>
            </div>
        </div>
    );
}
export default PersonalDetails