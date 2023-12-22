import React, { useState } from "react";
import SpinningWheel from "@/components/SpinningWheel";
import Wheel from "@/components/Wheel";

const Home: React.FC = () => {
//  const [stopSpin, setStopSpin] = useState<boolean>(false);

//  const handleSpin = () => {
//    setStopSpin(prevStopSpin => !prevStopSpin);
//  };

 return (
   <main className="flex justify-center items-center h-screen w-full">
      <Wheel />
     {/* <SpinningWheel stopSpin={stopSpin} />
     <button onClick={handleSpin}>Spin</button> */}
   </main>
 );
};

export default Home;

