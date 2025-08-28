import { useState } from "react";
import Footer from "../components/Footer";
import HeadTitle from "../components/HeadTitle";

function Classification() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  const inputData = [
    { id: 'al',label: 'Aluminium (Al)', placeholder: 'Enter value mg/L' },
    { id: 'nh3',label: 'Ammonia (NH3)', placeholder: 'Enter value mg/L' },
    { id: 'as',label: 'Arsenic (As)', placeholder: 'Enter value mg/L' },
    { id: 'bact',label: 'Bacteria (Bact.)', placeholder: 'Enter value CFU/mL' },
    { id: 'ba',label: 'Barium (Ba)', placeholder: 'Enter value mg/L' },
    { id: 'cd',label: 'Cadmium (Cd)', placeholder: 'Enter value mg/L' },
    { id: 'nhcl2',label: 'Chloramine (NHCl2)', placeholder: 'Enter value mg/L' },
    { id: 'cr',label: 'Chromium (Cr)', placeholder: 'Enter value mg/L' },
    { id: 'cu',label: 'Copper (Cu)', placeholder: 'Enter value mg/L' },
    { id: 'pb',label: 'Lead (Pb)', placeholder: 'Enter value mg/L' },
    { id: 'no3-',label: 'Nitrates (NO3−)', placeholder: 'Enter value mg/L' },
    { id: 'no2-',label: 'Nitrites (NO2−)', placeholder: 'Enter value mg/L' },
    { id: 'clo4-',label: 'Perchlorate (ClO4−)', placeholder: 'Enter value mg/L' },
    { id: 'ra',label: 'Radium (Ra)', placeholder: 'Enter value mg/L' },
    { id: 'se',label: 'Selenium (Se)', placeholder: 'Enter value mg/L' },
    { id: 'ag',label: 'Silver (Ag)', placeholder: 'Enter value mg/L' },
    { id: 'u',label: 'Uranium (U)', placeholder: 'Enter value mg/L' },
    { id: 'vir',label: 'Viruses (Vir.)', placeholder: 'Enter value CFU/mL' },
  ];

  return (
    <div>
      {/* title */}
      <HeadTitle title={'Classify'} desc={'This page is for classifying the water quality index'}/>

      {/* form */}
      <div className="bg-gray-200 p-5 rounded-lg mx-3 mt-8 flex flex-col gap-5">
        <h2 className="text-center font-main font-bold text-xl">Input the data</h2>
        <form action="">
          <ul className="flex flex-col gap-3">
            {inputData.map((data, index) => (
              <li key={index} className="flex flex-col gap-2">
                <label id={data.id} className="font-main font-medium">{data.label}</label>
                <input type="number" name="" id="" className="border rounded-2xl bg-white pl-3 font-secondary text-sm py-3" placeholder={data.placeholder}/>
              </li>
            ))}
          </ul>
        </form>
        <button onClick={handleClick} className="border rounded-2xl bg-black pl-3 font-secondary text-sm text-white py-3 font-semibold">Classify</button>
      </div>

      {showText && (
        <div className="mx-3 text-center font-xl font-bold font-main mt-5">
          Sorry couldn't process classify <br />
          it's only frontend demo:)
        </div>
      )}

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Classification;