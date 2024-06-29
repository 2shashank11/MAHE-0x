import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
//import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

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
    <div className=' m-12 grid grid-cols-3 gap-8 max-sm:grid-cols-1's>
        <Card isHoverable isPressable onPress={handleConference} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-xl">Conference</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Conference"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
    <Card isHoverable isPressable onPress={handleFellowship}  className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-xl">Fellowship</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Fellowship"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
    <Card isPressable isHoverable onPress={handleGrant} className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-xl">Grants</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Grants"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
    <Card isPressable isHoverable onPress={handleJournal} className="py-4 ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-xl">Journal</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Journal"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
    <Card isPressable isHoverable onPress={handlePatent}  className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Patents</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Patents"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
    <Card isHoverable isPressable onPress={handlePublication} className="py-4 ">
      <CardHeader  className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Publications</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Publications"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>



      {/* <Button onPress={handleConference} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
        Conference
      </Button>
      <Button onPress={handleFellowship} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
        Fellowship
      </Button>
      <Button onPress={handleGrant} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
        Grant
      </Button>
      <Button onPress={handleJournal} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
        Journal
      </Button>
      <Button onPress={handlePatent} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
        Patents
      </Button>
      <Button onPress={handlePublication} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
        Publication
      </Button> */}
    </div>
  )
}

export default Dash