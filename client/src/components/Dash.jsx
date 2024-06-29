import React from 'react';
import { Button } from "@nextui-org/react";
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
    <div className=' grid grid-cols-2 grid-rows-3 gap-7 m-16 max-sm:grid-cols-1'>
      <Button onPress={handleConference} color="primary" variant="shadow" size="lg" className='h-24 text-xl font-bold'>
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
      </Button>
    </div>
  )
}

export default Dash