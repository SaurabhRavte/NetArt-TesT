import machineImage from "../assets/3.png";
import "./style.css";

function BottomSecs() {
  return (
    <>
      <div className="BottomCont">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={machineImage} className="machineImage" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div className="card-cont center">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span>{" "}
          SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span>{" "}
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD &
          BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span>{" "}
          SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE
          FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </>
  );
}

export default BottomSecs;
