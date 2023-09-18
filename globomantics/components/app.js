import { useState } from "react";
import Banner from "./banner";
import HouseList from "./houseList";
import House from "./house";

const App = () => {
    const [selectedHouse,setSelectedHouse] =useState();

    const setSelectedHouseWrapper = (house) => {
        //do checks on house
        setSelectedHouse(house);
      };

        return (
               <>
                  <div> <Banner>Providing Houses all over the world</Banner></div>
                  {/* <HouseList /> */}
                  {selectedHouse ?
                  ( <House house={selectedHouse}/>)
                  :
                   (<HouseList selectHouse={setSelectedHouseWrapper}/>)
                
                }
               </>

        );
    // return <Banner headertext="Providing Houses all over the world "/>

};

export default App;