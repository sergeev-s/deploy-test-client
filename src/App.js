import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [timeData, setTimeData] = useState(null);

  async function fetchData() {
    try {
      const response = await axios.get(`${window.location.host}:6060/time`);
      setTimeData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { fetchData() }, []);

  return (
    <div>
      <button onClick={fetchData}>Получить время</button>
      {timeData && (
        <div>
          <p>Время: {timeData.time}</p>
          <p>PID: {timeData.PID}</p>
        </div>
      )}
    </div>
  );
}

export default App;