import React from "react";
import { Button, Image } from "@nextui-org/react";
import pageNotFoundImage from "../images/page-not-found.svg";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-20 p-10">
            <div className="mb-12 md:mb-0 md:flex-1">
                <h1 className="text-5xl font-bold mb-6">So Sorry!</h1>
                <h2 className="text-2xl font-bold mb-4">The page you are looking for cannot be found</h2>
                <h3 className="text-xl font-semibold mb-6">Possible reasons: </h3>
                <ul className="list-disc pl-5 mb-8">
                    <li className="mb-3">The address may have been typed incorrectly;</li>
                    <li className="mb-3">It may be a broken or outdated link.</li>
                </ul>
                <Button color="primary" size="lg">
                    <Link to="/">Back to home</Link>
                </Button>
            </div>
            <div className="md:flex-1">
                <Image src={pageNotFoundImage} />
            </div>
        </div>
    );
}
