import HeadTitle from "../components/HeadTitle"
import reactvite from '../images/vite.png'
import tailwind from '../images/tailwind.png'
import icon from '../images/fontawesome.png'
import vercel from '../images/vercel.png'
import github from '../images/github.png'
import Footer from "../components/Footer"

function About() {
  const toolsData = [
    { img: reactvite, title: 'Vite + React' },
    { img: tailwind, title: 'TailwindCSS' },
    { img: icon, title: 'Fontawesome' },
    { img: github, title: 'Github' },
    { img: vercel, title: 'Vercel' }
  ]

  return (
    <div>
      {/* header */}
      <HeadTitle title={'About the System'} desc={'This page provides information about the WQI classification system'}/>

      {/* about */}
      <div className="flex flex-col gap-5 mx-5 mt-5">
        <h2 className="text-center font-main font-bold text-xl">About</h2>
        <span>
          <h3 className="font-main font-semibold">01. The Developer</h3>
          <p className="font-secondary text-sm text-justify">This website was created by Sugini Injani, a student of Informatics Engineering at Universitas Negeri Semarang, as part of her thesis entitled 'Water Quality Index Classification using LGBM with RFE Feature Selection, SMOTE Oversampling Technique, and Optuna Hyperparameter Optimization.' Further information about her can be found in the footer of this website.</p>
        </span>
        <span>
          <h3 className="font-main font-semibold">02. The Objective</h3>
          <p className="font-secondary text-sm text-justify">This website is a platform for predicting and classifying the Water Quality Index (WQI) with optimal accuracy using the LGBM algorithm combined with RFE, SMOTE, and Optuna.</p>
        </span>
        <span>
          <h3 className="font-main font-semibold">03. How to use</h3>
          <ul className="list-disc font-secondary text-justify pl-5 text-sm">
            <li>Collect numeric data on substances or microorganisms in water, such as aluminium, ammonia, arsenic, bacteria, barium, cadmium, chloramine, chromium, copper, lead, nitrates, nitrites, perchlorate, radium, selenium, silver, uranium, and viruses.</li>
            <li>Go to the <b>Classify</b> page and input the data into the form. Make sure all inputs are numeric.</li>
            <li>Click the <b>Classify</b> button to predict and classify the data.</li>
            <li>The results will be displayed in the classification results table.</li>
            <li>If the result is <b>“safe”</b>, the water is suitable for drinking and other purposes. If the result is <b>“not safe”</b>, the water is unsafe for drinking or other purposes.</li>
          </ul>
        </span>
      </div>

      {/* tools */}
      <h2 className="text-center font-main font-bold text-xl mt-10">Tools</h2>
      <div className="flex flex-wrap gap-3 justify-center mx-5 mt-3">
        {toolsData.map((data, index) => (
          <span key={index} className="flex flex-col items-center gap-1">
            <img src={data.img} alt="rvite" className="w-24 border rounded-lg py-2" />
            <p className="font-main font-semibold text-sm text-center">{data.title}</p>
          </span>
        ))}
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default About
