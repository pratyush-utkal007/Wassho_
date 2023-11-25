import React from "react";
import Cities from "./Cities";
import bbsrIcon from "../assets/city_icon_bhubaneswar.png";
import cuttackIcon from "../assets/city_icon_cuttuck.png";
import patnaIcon from "../assets/city_icon_patna.png";
import delhiIcon from "../assets/city_icon_delhi.png";
import bengaluruIcon from "../assets/city_icon_bengaluru.png";
import puneIcon from "../assets/city_icon_pune.png";
import mumbaiIcon from "../assets/city_icon_mumbai.png";

import '../App.css'
const CitiesWrapper = () => {
  return (
    <>
      <section className="available-cities text-white">
        <div>
          <h2 className="text-center md:text-5xl font-bold md:pt-8 pt-5 my-8">
            We Are Available to Care Your Car at
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-4">
         <div>
          <Cities
          img={bbsrIcon}
          cityname={"Bhubaneswar"}
          />
         </div>
         <div>
          <Cities
          img={cuttackIcon}
          cityname={"Cuttack"}
          />
         </div>
         <div>
          <Cities
          img={patnaIcon}
          cityname={"Patna"}
          />
         </div>
         <div>
          <Cities
          img={delhiIcon}
          cityname={"Delhi"}
          />
         </div>
         <div>
          <Cities
          img={bengaluruIcon}
          cityname={"Bengaluru"}
          />
         </div>
         <div>
          <Cities
          img={puneIcon}
          cityname={"Pune"}
          />
         </div>
         <div className="md:col-span-3">
          <Cities
          img={mumbaiIcon}
          cityname={"Mumbai"}
          />
         </div>
        </div>
      </section>
    </>
  );
};

export default CitiesWrapper;
