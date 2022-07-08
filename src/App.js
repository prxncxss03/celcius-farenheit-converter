/* components */
import {Temperature} from './components/Temperature.js';

/* Icons */
import { RiArrowLeftRightFill } from "react-icons/ri";

/* hooks */
import { useState } from 'react';


function App() {

  const initialTemperatureValue = {
    celcius : 0,
    fahrenheit: 0
  }

  const [switchTemperature, setSwitchTemperature] = useState(false);
  const [temperatureValue, setTemperatureValue] = useState(initialTemperatureValue);

  /* To get the desired rounded number in 4 decimal places  */
  const DECIMAL_PLACES = 10000;

  /* The formula came from google */
  const handleCelciusChange = (temperatureValue) => {
    setTemperatureValue({
      celcius: temperatureValue,
      fahrenheit: Math.round(((Number(temperatureValue ) * 9/5) + 32)* DECIMAL_PLACES )/ DECIMAL_PLACES,
    })
    console.log(temperatureValue);
  }

  const handleFarenheitChange = (temperatureValue) => {
    setTemperatureValue({
      celcius: Math.round(((Number(temperatureValue ) - 32) * 5/9)* DECIMAL_PLACES )/ DECIMAL_PLACES,
      fahrenheit: temperatureValue,
    })
    console.log(temperatureValue);
  }

 
  const switchTemperaturePosition = () => {
    setSwitchTemperature(!switchTemperature);
  }

  return (

    <div className={
      temperatureValue.celcius >= 55000 ? "app bg-gradient-to-bl from-orange-800 to-red-600" 
      : temperatureValue.celcius >= 1000 ? "transition-all ease-in-out duration-1000 app bg-gradient-to-bl from-orange-500 to-red-500" 
      : temperatureValue.celcius >= 100 ? "app bg-gradient-to-bl from-orange-500 to-red-700" 
      : temperatureValue.celcius >= 40 ? "app bg-gradient-to-tr from-orange-500 to-yellow-500"
      : temperatureValue.celcius >= 37 ? "app bg-gradient-to-tr from-orange-300 to-orange-400"
      : temperatureValue.celcius >= 25 ? "app bg-gradient-to-tr from-sky-500 to-yellow-200"
      : temperatureValue.celcius >= 1 ? "app bg-gradient-to-tr from-sky-500 to-sky-700"
      : "app bg-gradient-to-bl from-gray-800 to-gray-900"
  
    }>
    <h1 className="
    font-extrabold sm:text-3xl text-xl text-center text-transparent drop-shadow-sm
    bg-clip-text bg-gradient-to-tr from-white to-gray-100
    mb-4">
      Celcius to Farenheit Converter</h1>
      <div className={switchTemperature === true ? "flex flex-col-reverse sm:flex-row-reverse items-center " : "flex flex-col sm:flex-row   items-center " }>
        <Temperature temperatureLabel={"Celcius"} temperatureChange = {(e) => handleCelciusChange(e.target.value)} temperatureValue={temperatureValue.celcius} />
        <button>
          <RiArrowLeftRightFill size={50} onClick={switchTemperaturePosition}
          className="
          sm:mx-2 
          text-white drop-shadow-sm
          rotate-90 sm:rotate-0
          sm:hover:scale-125 scale-50 sm:scale-100
          transition-all ease-in-out duration-500" 
          />
        </button>
        <Temperature temperatureLabel={"Farenheit"} temperatureChange = {(e) => handleFarenheitChange(e.target.value)} temperatureValue={temperatureValue.fahrenheit}/>
      </div>
    </div>
  );
}

export default App;
