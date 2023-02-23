import React, { useState } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

const BoilingVerdict = ({ celsius }) => {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

const Temprature = ({ scale, temprature, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input value={temprature} onChange={handleChange} />
    </fieldset>
  );
};

const Calculator = () => {
  const [temprature, setTemprature] = useState({ temprature: "", scale: "c" });
  const handleCelsiusChange = (temprature) => {
    setTemprature({ scale: "c", temprature });
  };
  const handleFahrenheitChange = (temprature) => {
    setTemprature({ scale: "f", temprature });
  };
  const celsius =
    temprature.scale === "f"
      ? tryConvert(temprature.temprature, toCelsius)
      : temprature.temprature;
  const fahrenheit =
    temprature.scale === "c"
      ? tryConvert(temprature.temprature, toFahrenheit)
      : temprature.temprature;
  return (
    <div className="main-body">
      <Temprature
        key="1"
        scale="c"
        temprature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <Temprature
        key="2"
        scale="f"
        temprature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
};

export default Calculator;
