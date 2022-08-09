import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [CODE, setCode] = useState('');
  const [Width, setWidth] = useState('');
  const [Rowss, setRowss] = useState('');
  const [Height, setHeight] = useState('');
  const [SpaceBRows, setSpaceBRows] = useState('');
  const [GAP_RAPORT, setGapRaport] = useState('');

  const [knivesList, setKnivesList] = useState([]);

  const addKnife = () => {
    // console.log(name);
    Axios.post('http://localhost:3001/create', {
      code: CODE,
      width: Width,
      rows: Rowss,
      height: Height,
      space_b_rows: SpaceBRows,
      gap_raport: GAP_RAPORT
    }).then(() => {
      // console.log('success');
      setKnivesList([
        ...knivesList,
        {
          code: CODE,
          width: Width,
          rows: Rowss,
          height: Height,
          space_b_rows: SpaceBRows,
          gap_raport: GAP_RAPORT
        },
      ]);
    });
  };

  const getKnives = () => {
    Axios.get('http://localhost:3001/knives').then((response) => {
      // console.log(response);
      setKnivesList(response.data);
    });
  }


  return (
    <div className="App">
      <div className="information">
        <label>Code:</label>
        <input type="text" 
        onChange={(event) => {
          setCode(event.target.value);
        }}/>
        <label>Width:</label>
        <input type="number" 
        onChange={(event) => {
          setWidth(event.target.value);
        }}/>
        <label>Rowss:</label>
        <input type="text" 
        onChange={(event) => {
          setRowss(event.target.value);
        }}/>
        <label>Height:</label>
        <input type="text" 
        onChange={(event) => {
          setHeight(event.target.value);
        }}/>
        <label>Space Between Rows:</label>
        <input type="number" 
        onChange={(event) => {
          setSpaceBRows(event.target.value);
        }}/>
        <label>Gap Raport:</label>
        <input type="number" 
        onChange={(event) => {
          setGapRaport(event.target.value);
        }}/>
        <button onClick={addKnife}>Add Knife</button>
      </div>
      _______________________________________________________________________________________________________________________________
      <div className='knives'>
        <button onClick={getKnives}>Show Knives</button>

        {knivesList.map((val, key) => {
          return (
            <div className='knife' key={val.id}>
               <h3>Code: {val.CODE}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;