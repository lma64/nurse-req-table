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

  return (
    <div className=''>
      <h1 className='h1-title'>Device Settings</h1>
      <div className='container'>
        <div className='device-dropdown'>
            <label className='select-label'>Device</label>
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Device</option>
                { devices.map((device) => (
                  <option key={device.deviceStringId} value={device.deviceStringId}>
                    {device.deviceStringId}
                  </option>
                ))}
            </select>
        </div>

        <div className='form-check form-switch'>
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Enable nurse request</label>
        </div>

        <div className='wh-table'>
        <table>
          <tr className='default_cursor'>
            <th>Working Hours</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
          <tr>
            <td className='default_cursor'>AM shift start</td>
            <td contenteditable="true">8:00</td>
            <td contenteditable="true">9:00</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
          <tr>
            <td className='default_cursor'>AM shift end</td>
            <td contenteditable="true">12:00</td>
            <td contenteditable="true">12:00</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
          <tr>
            <td className='default_cursor'>PM shift start</td>
            <td contenteditable="true">13:00</td>
            <td contenteditable="true">14:00</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
          <tr>
            <td className='default_cursor'>PM shift end</td>
            <td contenteditable="true">17:00</td>
            <td contenteditable="true">17:00</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
          </tr>
        </table>
        </div>
        <br/>
      </div>

    </div>
  )
}

export default Form