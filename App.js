// App.js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://pure-wave-91339.onrender.com/sample-data`)
      .then((response) => response.json())
      .then((stateBillData) => {
        stateBillData.sort((a, b) => a.date - b.date).reverse();
        console.log(stateBillData);
        setData(stateBillData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
// eslint-disable-next-line
  useEffect(() => {
    fetchData();// eslint-disable-next-line
  }, []);
  const [count, setCount] = useState(25);
  const displayNext = () => {  // function that will make count add by 25 to show 2 more items  
    setCount(count+25);
  }
  return (
    
    <div className="App">
      <tbody>
        <tr>
          <th width='20%'>Date</th>
          <th width ='40%'>Measure</th>
          <th width='20%'>Status</th>
          <th width='20%'>Voter Support %</th>
        </tr>
        {data.slice(count,count+25).map((item, index) => (
          <tr key={index}>
            <td >{item.date}</td>
            <td>{item.measureNumber}</td>
            <td>{item.signedOrVetoed}</td>
            <td>{item.voterSupport}</td>  
            <td></td>
          </tr>
        ))}
        
         <button onClick={displayNext}> 
        Next
      </button>
      </tbody>
    </div>
  );
}
export default App;