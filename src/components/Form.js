import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.css';
import axios from 'axios';
import Deviceone from './devices/Deviceone';
import Devicetwo from './devices/Devicetwo';
import Devicethree from './devices/Devicethree';
import Devicefour from './devices/Devicefour';
import Devicefive from './devices/Devicefive';

const Form = () => {

  const[device1, setDevoice1] = useState(false);
  const[device2, setDevoice2] = useState(false);
  const[device3, setDevoice3] = useState(false);
  const[device4, setDevoice4] = useState(false);
  const[device5, setDevoice5] = useState(false);

  function SelectedDevice() {
    if (document.getElementById("selected-list").value == 'abc') {
      setDevoice1(true);
      setDevoice2(false);
      setDevoice3(false);
      setDevoice4(false);
      setDevoice5(false);
    }
    else if (document.getElementById("selected-list").value == 'amzn1.ask.device.AFH6LBIYSYA7PPKBOS4KCPOWVPK46KBPISAA5VFMYKVTBISGTZKKER6RYZEMXHOI6GOGEUW5KYP4GYL4UWVIUANI42WFP55NXYRPPLUYSEHE6FMUSBLEH7SVI6TCAZ4DNRIWWN5A3PQTD7V6QYRL2GI7K57NMNSPJT2RV52L7GEAN4L5VFVI2') {
      setDevoice1(false);
      setDevoice2(true);
      setDevoice3(false);
      setDevoice4(false);
      setDevoice5(false);
    }
    else if (document.getElementById("selected-list").value == 'amzn1.ask.device.test') {
      setDevoice1(false);
      setDevoice2(false);
      setDevoice3(true);
      setDevoice4(false);
      setDevoice5(false);
    }
    else if (document.getElementById("selected-list").value == 'def') {
      setDevoice1(false);
      setDevoice2(false);
      setDevoice3(false);
      setDevoice4(true);
      setDevoice5(false);
    }
    else if (document.getElementById("selected-list").value == 'jkl') {
      setDevoice1(false);
      setDevoice2(false);
      setDevoice3(false);
      setDevoice4(false);
      setDevoice5(true);
    }
    else {
      setDevoice1(false);
      setDevoice2(false);
      setDevoice3(false);
      setDevoice4(false);
      setDevoice5(false);
    }
  }

  const [devices, setDevices] = useState([]);
  useEffect(() => {
      axios.get("https://0gfyumgx0f.execute-api.us-east-2.amazonaws.com/api/get_devices")
        .then((res) => setDevices(res.data))
        .then((error) => console.log(error));
  }, []);

  return (
    <div className=''>
      <h1 className='h1-title'>Device Settings</h1>
      <div className='container'>
        <div className='device-dropdown'>
            <label className='select-label bold'>Device</label>
            <select id="selected-list" className="form-select" onChange={SelectedDevice}>
                <option>Select Device</option>
                {devices.map((device) => (
                  <option key={device.deviceStringId} value={device.deviceStringId}>
                    {device.deviceStringId}
                  </option>
                ))}
            </select>
        </div>
        <br></br>
        {device1 && <Deviceone/>}
        {device2 && <Devicetwo/>}
        {device3 && <Devicethree/>}
        {device4 && <Devicefour/>}
        {device5 && <Devicefive/>}
      </div>

    </div>
  )
}

export default Form