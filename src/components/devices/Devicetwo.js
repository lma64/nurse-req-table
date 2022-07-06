import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const Devicetwo = () => {
    const [requests, setRequests] = useState([]);
    useEffect(() => {
        axios.get("https://0gfyumgx0f.execute-api.us-east-2.amazonaws.com/api/getdevice_intentstrings?deviceStringId=amzn1.ask.device.AFH6LBIYSYA7PPKBOS4KCPOWVPK46KBPISAA5VFMYKVTBISGTZKKER6RYZEMXHOI6GOGEUW5KYP4GYL4UWVIUANI42WFP55NXYRPPLUYSEHE6FMUSBLEH7SVI6TCAZ4DNRIWWN5A3PQTD7V6QYRL2GI7K57NMNSPJT2RV52L7GEAN4L5VFVI2")
          .then((res) => setRequests(res.data))
          .then((error) => console.log(error));
    }, []);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    
  return (
    <div>
        <div className='bloc-tabs'>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Request
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Working Hours
          </button>
        </div>

        <div className={toggleState === 1 ? "row" : "row content"}>
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
                {String(request.title) == "Food Services" && request.Title}
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
                    {String(request.title) == "Environment Control" ? request.Title : false}
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
                {String(request.title) == "Housekeeping" && request.Title}
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
                {String(request.title) == "System" && request.Title}
                </label>
            </>
            ))
            }
            </div>
        </div>
        </div>

        <div  className={toggleState === 2 ? "wh-table content  active-content" : "wh-table content"}>
        <table>
          <tr className='default_cursor tr2'>
            <th className='th2'></th>
            <th className='th2'>Start</th>
            <th className='th2'>End</th>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Monday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Tuesday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Wednesday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Thursday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Friday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Saturday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
          <tr className='tr2'>
            <td className='default_cursor td2'>Sunday</td>
            <td className='td2'><input type="time" className='time-input'/></td>
            <td className='td2'><input type="time" className='time-input'/></td>
          </tr>
        </table>
      </div>
      <button className='save-btn'> Save </button>
        <br></br>
    </div>
  )
}

export default Devicetwo;