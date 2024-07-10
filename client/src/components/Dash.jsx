import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

import conference from '../images/conference.svg';
import fellowship from '../images/fellowship.svg';
import grant from '../images/grant.svg';
import journal from '../images/journal.svg';
import patent from '../images/patent.svg';
import publication from '../images/publication.svg';

function Dash() {
  const navigate = useNavigate();

  const handleConference = () => {
    navigate('/user/form/conference');
  };

  const handleFellowship = () => {
    navigate('/user/form/fellowship');
  };

  const handleGrant = () => {
    navigate('/user/form/grant');
  };

  const handleJournal = () => {
    navigate('/user/form/journal');
  };

  const handlePatent = () => {
    navigate('/user/form/patent');
  };

  const handlePublication = () => {
    navigate('/user/form/publication');
  };

  return (
    <div className="flex justify-center items-center p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card isHoverable isPressable onPress={handleConference} className="py-4 h-4/2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">Conference</h4>
          </CardHeader>
          <CardBody className=" overflow-x-visible py-2">
            <Image
              alt="Conference"
              className="rounded-xl w-full"
              src={conference}
            />
          </CardBody>
        </Card>
        <Card isHoverable isPressable onPress={handleFellowship} className="py-4 h-4/2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">Fellowship</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Fellowship"
              className="object-cover rounded-xl"
              src={fellowship}
            />
          </CardBody>
        </Card>
        <Card isPressable isHoverable onPress={handleGrant} className="py-4 h-4/2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">Grants</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Grants"
              className="object-cover rounded-xl"
              src={grant}
            />
          </CardBody>
        </Card>
        <Card isPressable isHoverable onPress={handleJournal} className="py-4 h-4/2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">Journal</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Journal"
              className="object-cover rounded-xl"
              src={journal}
            />
          </CardBody>
        </Card>
        <Card isPressable isHoverable onPress={handlePatent} className="py-4 h-4/2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">Patents</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Patents"
              className="object-cover rounded-xl"
              src={patent}
            />
          </CardBody>
        </Card>
        <Card isHoverable isPressable onPress={handlePublication} className="py-4 h-4/2">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-2xl">Book / Book Chapter</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Publications"
              className="object-cover rounded-xl"
              src={publication}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Dash;

