import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState<any>();
  const getForecast = async () => {
    const response = await fetch('https://localhost:7181/weatherforecast');
    const data = await response.json();
    console.log(data);
    setResult(data);
  };

  useEffect(() => {
    getForecast();
  }, []);

  if (!result) return <h1>Loading...</h1>;
  return (
    <>
      {result.map((forecast: any) => {
        console.log(forecast);
        return (
          <>
            <p>{forecast.date}</p>
            <h1>
              {forecast.summary} - {forecast.temperatureC}c
            </h1>
          </>
        );
      })}
    </>
  );
}

export default App;
