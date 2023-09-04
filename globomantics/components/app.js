import Banner from "./banner";
import HouseList from "./houseList";

const App = () => {
        return (
               <>
                  <div> <Banner>Providing Houses all over the world</Banner></div>
                  <HouseList />
               </>

        );
    // return <Banner headertext="Providing Houses all over the world "/>

};

export default App;