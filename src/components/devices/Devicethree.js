import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Devicethree = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get("https://0gfyumgx0f.execute-api.us-east-2.amazonaws.com/api/getdevice_intentstrings?deviceStringId=amzn1.ask.device.test")
          .then((res) => setRequests(res.data))
          .then((error) => console.log(error));
    }, []);

  return (
    <div>
        <div className="row">
        <div className="col">
            <div className='bold-label'>Food Services</div>
            <div className='form-check form-switch'>
            {requests.map((request) => (
            <>
                {String(request.title) == "Food Services" && request.isAllowed == true && 
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
                }
                {String(request.title) == "Food Services" && request.isAllowed == false && 
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                }
                <label className="form-check-label" for="flexSwitchCheckDefault">
                {String(request.title) == "Food Services" && request.intentString}
                </label>
            </>
            ))
            }
            </div>

        </div>
        <div className="col">
            <div className='bold-label'>Environment Control</div>
            <div className='form-check form-switch'>
            {requests.map((request) => (
                <>
                {String(request.title) == "Environment Control" && request.isAllowed == true && 
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
                }
                {String(request.title) == "Environment Control" && request.isAllowed == false && 
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                }
                <label className="form-check-label " for="flexSwitchCheckDefault">
                    {String(request.title) == "Environment Control" ? request.intentString : false}
                </label>
                </>
                ))
            }
            </div>
        </div>
        <div className="col">
            <div className='bold-label'>Housekeeping</div>
            <div className='form-check form-switch'>
            {requests.map((request) => (
            <>
                {String(request.title) == "Housekeeping" && request.isAllowed == true && 
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
                }
                {String(request.title) == "Housekeeping" && request.isAllowed == false && 
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                }
                <label className="form-check-label" for="flexSwitchCheckDefault">
                {String(request.title) == "Housekeeping" && request.intentString}
                </label>
            </>
            ))
            }
            </div>
        </div>
        <div className="col">
            <div className='bold-label'>System</div>
            <div className='form-check form-switch'>
            {requests.map((request) => (
            <>
                {String(request.title) == "System" && request.isAllowed == true && 
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked/>
                }
                {String(request.title) == "System" && request.isAllowed == false && 
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                }
                <label className="form-check-label" for="flexSwitchCheckDefault">
                {String(request.title) == "System" && request.intentString}
                </label>
            </>
            ))
            }
            </div>
        </div>
        </div>

        <div className='wh-table'>
        <table>
        <tr className='default_cursor tr2'>
            <th className='th2'></th>
            <th className='th2'>Start</th>
            <th className='th2'>End</th>
        </tr>
        <tr className='tr2'>
            <td className='default_cursor td2'>Monday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
        </tr>
        <tr className='tr2'>
            <td className='default_cursor td2'>Tuesday</td>
            <td className='td2'contenteditable="true"></td>
            <td className='td2'contenteditable="true"></td>
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
    <br></br>
    </div>
  )
}

export default Devicethree