import UnnesHeader from '../images/unnes-index.png';
import PictQuote from '../images/pict-home.png';
import Footer from '../components/Footer';
import Button from '../components/Button';

function Home() {
  

  const contentData = [
    {
      icon: <i className="fa-solid fa-suitcase-medical text-white"></i>,
      title: "Health and Human Survival",
      desc: "Clean and safe water is essential for sustaining human life and preventing the spread of diseases such as diarrhea, cholera, typhoid, and hepatitis. Proper sanitation safeguards communities from health risks causedby contaminated water."
    },
    {
      icon: <i className="fa-solid fa-seedling text-white"></i>,
      title: "Prevention of Global Environmental",
      desc: "According to WHO and UNICEF reports, poor water quality and inadequate sanitation result in millions of deaths annually worldwide, including thousands in Indonesia. Monitoring water quality is a crucial step in reducing these adverse effects."
    },
    {
      icon: <i className="fa-solid fa-droplet text-white"></i>,
      title: "Sustainability of Water Resources",
      desc: "Routine monitoring of WQI helps ensure the sustainability of clean water availability, both in quantity and quality, which is a fundamental need for environmental and human life."
    },
    {
      icon: <i className="fa-solid fa-umbrella text-white"></i>,
      title: "Resilience to Climate Change",
      desc: "Water acts as a critical link between the environment, ecosystems, climate, and society. Monitoring water quality supports efforts to mitigate and adapt to the impacts of climate change."
    },
    {
      icon: <i className="fa-solid fa-hand-holding-droplet text-white"></i>,
      title: "Support for Water Purification Technologies",
      desc: "Detecting contamination through WQI monitoring enables the development of water purification technologies, such as distillation and deionization, ensuring water is reused safely and efficiently."
    },
    {
      icon: <i className="fa-solid fa-handshake text-white"></i>,
      title: "Basis for Decision-Making in Water Management",
      desc: "WQI provides actionable information for identifying water quality issues quickly, aiding decision-making in water resource management and public policy planning."
    }
  ]

  const contentRisk = [
  { 
    title: 'Linked', 
    desc: 'Human health is directly linked to water quality and safe access.' 
  },
  { 
    title: 'Vulnerable', 
    desc: 'Countries with weak freshwater monitoring remain unprepared for major health impacts.' 
  },
  { 
    title: 'Crisis', 
    desc: 'Severe climate change with rapid growth and wastewater issues creates serious challenges.' 
  },
  { 
    title: 'Monitoring', 
    desc: 'Water quality monitoring helps UNEP track changes and reduce critical health risks.' 
  }
];


  return (
    <div>
      {/* title section */}
      <header className="bg-black m-0 p-3 flex flex-col md:flex-row-reverse items-center gap-3 md:gap-10 lg:justify-between lg:px-16 lg:py-5 xl:justify-evenly  xl:py-10">
        <img src={UnnesHeader} alt="Unnes" className='w-40 md:w-64 xl:w-80' />
        <div>
          <div className='flex flex-col items-center text-center text-lg md:text-2xl'>
            <span className='text-white font-semibold font-main'>Water Quality Index</span>
            <span className='text-main font-semibold font-main'>Classification using LightGBM</span>
            <span className='text-white font-semibold font-main'>with RFE Feature Selection</span>
            <span className='text-main font-semibold font-main'>SMOTE Oversampling Technique</span>
            <span className='text-white font-semibold font-main'>and Optuna Hyperparameter Optimization</span>
          </div>
          <div className='flex flex-col items-center text-center font-secondary mt-5'>
            <p className='text-white text-sm'>
              Written by Sugini Injani<br/>
              Major in Informatics Engineering <br />
              Faculty of Mathematics and Natural Sciences <br />
              Universitas Negeri Semarang
            </p>
            <Button />
          </div>
        </div>
      </header>

      {/* content problems */}
      <div className='mt-10'>
        <span className='flex flex-col justify-center text-center gap-1'>
          <h4 className='font-secondary text-main font-semibold text-sm md:text-base'>The Problem</h4>
          <h1 className='font-main text-black font-bold font-xl md:text-2xl'>Why water quality index is important?</h1>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-8 gap-2 md:gap-4 px-8 py-3">
          {contentData.map((data, index) => (
            <div key={index} className="bg-slate-200 px-5 py-3 rounded-lg flex flex-col gap-1 justify-start">
            <div className='bg-black w-fit p-2 rounded-full'>{data.icon}</div>
            <p className="text-black font-semibold font-main text-base md:text-lg">{data.title}</p>
            <p className="text-black text-sm font-secondary md:text-base">{data.desc}</p>
          </div>
          ))}
        </div>
      </div>

      {/* content quote */}
      <div className="bg-black flex flex-col md:flex-row justify-center items-center gap-2 p-3 xl:px-20 xl:gap-10 md:p-10 mt-14">
        <img src={PictQuote} alt="People drinking" className='w-44 md:w-64 lg:w-80 xl:w-96' />
        <span className='flex flex-col items-center'>
          <h3 className='text-center font-main text-lg md:text-2xl text-white'>Monitoring Water Quality Index</h3>
          <p className="text-center font-secondary text-sm md:text-base mt-2 text-white">
            is a critical step in ensuring the sustainability of clean water resources and safeguarding public health. It helps identify water contamination and provides the basis for timely intervention to prevent the spread of waterborne diseases.
          </p>
          <Button />
        </span>
      </div>

      {/* content risk */}
      <div className='my-14'>
        <span className='flex flex-col justify-center text-center gap-1'>
          <h4 className='font-secondary text-main font-semibold text-sm md:text-base'>United Nation Environment Programme</h4>
          <h1 className='font-main text-black font-bold text-lg md:text-2xl'>New Health risk hot spot</h1>
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-3 lg:mx-5 mt-3">
          {contentRisk.map((data, index) => (
            <div key={index} className='bg-white border rounded-lg px-3 py-2 text-black'>
              <h3 className='font-main text-base md:text-lg font-semibold mb-1'>{data.title}</h3>
              <p className='font-secondary text-sm md:text-base text-left '>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home;
