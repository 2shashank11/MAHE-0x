import { Card, Image, Button, Input, Textarea} from "@nextui-org/react";


function Fellowship() {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-4 sm:w-auto md:w-fit m-4">
            <h1 className=" text-3xl font-bold max-w-96">Fellowship Details</h1>
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
            

            <div className="col-start-2 col-end-3 row-start-1 mb-0.5">
              <h2>Fellowship Program</h2>
              <Input label="Enter title" />
            
              <div className="flex flex-col gap-4 sm:flex-row md:flex-row mt-5">
              <h2>Fellowship Name</h2>
              <Input className="w-auto" label="Enter Journal Name" />
              <h2>Submitted</h2>
              <Input className="w-auto" label="Select quarter" />
              <h2>Granted</h2>
              <Input className="w-auto" label="Select quarter" />
              </div>
            </div>
            <div className="col-start-2 col-end-3 row-start-2 mb-0.5">
              <h2>description</h2>
              <Textarea label="description" className="max-w-xs"/>
            </div>

            

           <div className="col-start-4 col-end-5 row-start-3 row-end-5">
                <Button color="primary"> Save and Proceed</Button>
            </div>
        </div>
    );
}
export default Fellowship