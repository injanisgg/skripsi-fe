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
    { img: lgbm, name: 'LightGBM'},
    { img: smote, name: 'SMOTE'},
    { img: optuna, name: 'Optuna'},
    { img: scaler, name: 'RobustScaler'},
    { img: rfe, name: 'RFE'},
  ]

  const resultData = [
    {
      img: confmat,
      title: 'Confussion matrix of proposed model',
      desc: 'This figure shows that the model is very accurate in detecting the class “Not Safe,” with 1402 correct predictions and only 15 errors. For the class "Safe," the model produced 156 correct predictions but still had 26 errors. Even though the data was balanced using SMOTE oversampling, the model was still superior in detecting "Not Safe." This may be due to the complexity of the features in the "Safe" class, so further analysis is needed to improve the prediction accuracy in this class.'
    },
    {
      img: acc,
      title: 'Accuracy Comparison',
      desc: 'Based on the graph, LGBM combined with the “RFE SMOTE OPTUNA” method gives the highest accuracy of 97.44%, indicating the combination of LGBM with RFE, SMOTE, and OPTUNA is very effective for Water Quality Index classification. The "SMOTE Optuna" method has the lowest accuracy, which is 96.75%. Overall, all methods produced high accuracy (above 96.50%), with the combination of techniques tending to improve model performance.'
    },
    {
      img: classref,
      title: 'Classification Report of Proposed Model',
      desc: 'The classification report for the LGBMClassifier shows a high overall accuracy of 97.44% in predicting water quality as "Safe" or "Not Safe". The model performs exceptionally well for the "Not Safe" class, with a precision of 98.18%, recall of 98.94%, and F1-score of 98.56%. For the "Safe" class, the precision is 91.23%, recall 87.91%, and F1-score 85.71%, indicating slightly lower performance but still effective. The macro average F1-score of 88.39% and weighted average F1-score of 97.37% confirm that the model handles class imbalance well and delivers strong predictive performance.'
    },
    {
      img: roc,
      title: 'ROC Curve of Proposed Model',
      desc: 'The X-axis (False Positive Rate - FPR) indicates the proportion of "Not Safe" samples incorrectly classified as "Safe", while the Y-axis (True Positive Rate - TPR) shows the proportion of "Safe" samples correctly classified as "Safe". The gray diagonal line represents a random classifier with no predictive power (AUC = 0.5), while the blue curve illustrates the model’s performance. The AUC (Area Under the Curve) value of 0.9849 indicates that the model has an excellent ability to distinguish between safe and unsafe water conditions. A higher AUC value, close to 1.0, suggests that the model is highly accurate in predicting water quality. This result confirms that the LGBMClassifier performs exceptionally well in classifying water safety levels.'
    }
  ]

  return (
    <div>
      {/* header */}
      <HeadTitle title={'Model Information'} desc={'This page displays information about the WQI classification model'}/>

      {/* methods */}
      <h2 className="text-center font-main font-bold text-xl mt-5">Methods</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center mx-3">
        {imgData.map((data, index) => (
          <span key={index} className="w-fit text-black flex flex-col items-center">
            <img src={data.img} alt="lgbm" className="w-20" />
            <p className="font-main font-semibold">{data.name}</p>
          </span>
        ))}
      </div>

      {/* Result */}
      <h2 className="text-center font-main font-bold text-xl mt-10">Results</h2>
      <div className="grid grid-cols-1 gap-y-8 items-center mx-5">
        {resultData.map((data, index) => (
          <div key={index} className="flex flex-col gap-1">
            <img src={data.img} alt="confmat" className="rounded-lg border w-full"/>
            <p className="font-semibold font-main">{data.title}</p>
            <p className="font-secondary text-sm text-justify">{data.desc}</p>
          </div>
        ))}
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Model
