import Footer from "../components/Footer"
import HeadTitle from "../components/HeadTitle"
import lgbm from '../images/lgbm.png'
import scaler from '../images/scaler.png'
import rfe from '../images/rfe.png'
import smote from '../images/smote.png'
import optuna from '../images/optuna.png'
import confmat from '../images/conf-matrix.png'
import acc from '../images/comparative.png'
import classref from '../images/class-report.png'
import roc from '../images/roc.png'

function Model() {
  const imgData = [
    { img: smote, name: 'SMOTE'},
    { img: scaler, name: 'RobustScaler'},
    { img: rfe, name: 'RFE'},
    { img: lgbm, name: 'LightGBM'},
        { img: optuna, name: 'Optuna'},
  ]

  const resultData = [
    {
      img: confmat,
      title: 'Confussion matrix of proposed model',
      desc: 'This figure of confussion matrix shows that the model is highly accurate in detecting the class “Not Safe,” with 1402 correct predictions and only 15 error predictions. For the “Safe” class, the model produced 156 correct predictions but still had 26 error predictions. Even though SMOTE oversampling was applied, the model remained superior in detecting “Not Safe.” This may be due to the complexity of features in the “Safe” class, suggesting further analysis is required to enhance prediction accuracy in that class.'
    },
    {
      img: roc,
      title: 'ROC Curve of Proposed Model',
      desc: 'The X-axis (False Positive Rate - FPR) shows the proportion of “Not Safe” samples misclassified as “Safe,” while the Y-axis (True Positive Rate - TPR) shows the proportion of “Safe” samples correctly classified. The diagonal line represents a random classifier (AUC = 0.5), while the blue curve reflects the model’s performance. With an AUC of 0.9849, the model demonstrates excellent ability to distinguish water conditions. A value close to 1.0 confirms that LightGBM Classifiers performs very well in classifying water safety.'
    },
    {
      img: acc,
      title: 'Accuracy Comparison',
      desc: 'The graph shows that LGBM combined with “RFE SMOTE OPTUNA” achieves the highest accuracy of 97.44%. This indicates that combining LGBM with feature selection, oversampling, and hyperparameter optimization significantly improves performance in classifying water quality. In contrast, the “SMOTE Optuna” method gives the lowest accuracy at 96.75%. Overall, all tested methods deliver high accuracy (above 96.50%), confirming that the addition of multiple techniques tends to enhance the model’s predictive capability.'
    },
    {
      img: classref,
      title: 'Classification Report',
      desc: 'The classification report shows that LGBMClassifier achieves 97.44% overall accuracy in predicting water as “Safe” or “Not Safe.” For the “Not Safe” class, it records a precision of 98.18%, recall of 98.94%, and F1-score of 98.56%. For the “Safe” class, results are slightly lower with a precision of 91.23%, recall of 87.91%, and F1-score of 85.71%. The macro average F1-score is 88.39% and weighted average F1-score is 97.37%. These results confirm the model effectively handles class imbalance while maintaining strong predictive performance.'
    },
  ]

  return (
    <div>
      {/* header */}
      <HeadTitle title={'Model Information'} desc={'This page displays information about the WQI classification model'}/>

      {/* methods */}
      <h2 className="text-center font-main font-bold text-xl md:text-2xl mt-5">Methods</h2>
      <div className="flex flex-wrap gap-3 sm:gap-5 items-center justify-center mx-3 md:mx-5 lg:mx-10">
        {imgData.map((data, index) => (
          <span 
            key={index}
            className={`w-fit md:w-max text-black flex flex-col gap-2 
              ${index === 1 || index === 2 ? 'gap-4 md:gap-5' : 'gap-2'} 
              ${index >= 0 && index < 3 ? 'md:pt-10' : 'md:gap-0'} items-center`}>
            <img src={data.img} alt="lgbm" className="w-20 md:w-32" />
            <p className="font-main font-semibold">{data.name}</p>
          </span>
        ))}
      </div>

      {/* Result */}
      <h2 className="text-center font-main font-bold text-xl mt-10 md:text-2xl">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8 items-center mx-5 mt-5 lg:mx-10">
        {resultData.map((data, index) => (
          <div key={index} className="flex flex-col gap-1">
            <img src={data.img} alt="img" className="rounded-lg border w-full"/>
            <p className="font-semibold font-main md:text-lg">{data.title}</p>
            <p className="font-secondary text-sm md:text-base text-justify">{data.desc}</p>
          </div>
        ))}
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Model
