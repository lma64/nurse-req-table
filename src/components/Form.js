import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.css';
import axios from 'axios';

const Form = () => {

  const [devices, setDevices] = useState([]);
  useEffect(() => {
      axios.get("https://0gfyumgx0f.execute-api.us-east-2.amazonaws.com/api/get_devices")
        .then((res) => setDevices(res.data))
        .then((error) => console.log(error));
  }, []);

  const [requests, setRequests] = useState([]);
  useEffect(() => {
      axios.get("https://0gfyumgx0f.execute-api.us-east-2.amazonaws.com/api/get_enabled_requests")
        .then((res) => setRequests(res.data))
        .then((error) => console.log(error));
  }, []);

  return (
    <div className=''>
      <h1 className='h1-title'>Device Settings</h1>
      <div className='container'>
        <div className='device-dropdown'>
            <label className='select-label bold'>Device</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Device</option>
                {devices.map((device) => (
                  <option key={device.deviceStringId} value={device.deviceStringId}>
                    {device.deviceStringId}
                  </option>
                ))}
            </select>
        </div>

        <table class="table table-borderless">
            <thead>
              <tr className='tr1'>
                <th className='th1' scope="col">Housekeeping</th>
                <th className='th1' scope="col">Food</th>
                <th className='th1' scope="col">Nurse</th>
              </tr>
            </thead>
            <tbody>
              <tr className='tr1'>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
                    <label class="form-check-label" for="flexSwitchCheckChecked">need-pillow</label>
                  </div>
                </td>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">need-snacks</label>
                  </div>
                </td>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">need-medication</label>
                  </div>
                </td>
              </tr>
              <tr className='tr1'>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">need-remote</label>
                  </div>
                  </td>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked/>
                    <label class="form-check-label" for="flexSwitchCheckChecked">need-water</label>
                  </div>
                </td>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked/>
                    <label class="form-check-label" for="flexSwitchCheckChecked">need-medicine</label>
                  </div>
                </td>
              </tr>
              <tr className='tr1'>
                <td className='td1'></td>
                <td className='td1'>
                  <div className='form-check form-switch'>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">need-drink</label>
                  </div>
                </td>
                <td className='td1'></td>
              </tr>
            </tbody>
          </table> 

        <div className='wh-table'>
        <table>
          <tr className='default_cursor tr2'>
            <th className='th2'></th>
            <th className='th2'>Start</th>
            <th className='th2'>End</th>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Monday</td>
            <td className='td2'contenteditable="true">8:00 - 13:00</td>
            <td className='td2'contenteditable="true">12:00 - 17:00</td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Tuesday</td>
            <td className='td2'contenteditable="true">9:00 - 14:00</td>
            <td className='td2'contenteditable="true">12:00 - 17:00</td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Wednesday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Thursday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Friday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Saturday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Sunday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
          </tr>
        </table>
        <button className='save-btn'> Save </button>
        </div>
        <br/>
      </div>

    </div>
  )
}

export default Form