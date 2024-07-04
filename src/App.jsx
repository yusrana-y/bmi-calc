import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button } from '@mui/material'
import { TextField, InputAdornment } from '@mui/material'
function App() {

  const [unit, setUni] = useState('metric')
  const [kg, setKg] = useState(0)
  const [cm, setCm] = useState(0)

  const [bmi, setBmi] = useState(0)

  const [lbs, setLbs] = useState(0)
  const [ft, setFt] = useState(0)
  const [inch, setInch] = useState(0)

  const [isKg, setIsKg] = useState(true)
  const [isCm, setIsCm] = useState(true)

  const [isLbs, setIsLbs] = useState(true)
  const [isInch, setIsInch] = useState(true)
  const [isFeet, setIsFeet] = useState(true)

  const setValue = (e) => {
    const value = e.target.value
    const name = e.target.name

    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'kg') {
        setKg(value)
        setIsKg(true)
      }
      else {
        setCm(value)
        setIsCm(true)
      }
    }

    else {
      if (name == 'kg') {
        setIsKg(false)
      }
      else {
        setIsCm(false)
      }
    }

    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'ft') {
        setFt(value);
        setIsFeet(true)
      }
      else if (name == 'lbs') {
        setLbs(value)
        setIsLbs(true)
      }
      else {
        setInch(value)
        setIsInch(true)
      }
    }
    else {
      if (name == 'ft') {
        setIsFeet(false)
      }
      else if (name == 'lbs') {
        setIsLbs(false)
      }
      else {
        setIsInch(false)
      }
    }


  }



  const handleReset = () => {
    setIsCm(true)
    setIsKg(true)

    setIsFeet(true)
    setIsLbs(true)
    setInch(true)

    setFt(0)
    setLbs(0)
    setInch(0)

    setKg(0)
    setCm(0)
  }

  const handleCalculate = (e) => {
    const h = cm / 100
    e.preventDefault();
    if (unit == 'metric') {
      if ((kg == '') || (cm == '')) {
        alert('please fill the form')
      }
      else {
        setBmi((kg / (h * h)).toFixed(2))
      }
    }
    else {
      let i = 12 * ft + parseInt(inch)
      if (lbs == '' || ft == '' || inch == '') {
        alert('please fill the form')
      }
      else {
        const w = lbs / (i * i)
        console.log(w);
        setBmi((w * 703).toFixed(2))
      }
    }
  }


  return (
    <>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <h1 className='text-dark text-center pt-3'>BMI Calculator</h1>
          <div className="container shadow border rounded p-3 m-2 text-center">
            <div>
              <p>System of Measurements</p>
              <Button variant="contained" className='me-2' onClick={() => {
                setUni('metric')
              }}>Metrics</Button>
              <Button variant="contained" onClick={() => {
                setUni('imperial')
              }}>Imperial</Button>
            </div>
            <div className='d-flex justify-content-center align-items-center py-4'>
              {unit == 'metric' ? (
                <>
                  <TextField
                    label="Your Weight"
                    name='kg'
                    value={kg || ""}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                      inputProps: {
                        max: 500, min: 1
                      },
                      endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                    onChange={(e) => setValue(e)}
                  />
                  {!isKg &&
                    <p className='text-danger'>*Invalid input</p>}
                  <TextField
                    label="Your Height"
                    name='cm'
                    value={cm || ""}
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                      inputProps: {
                        max: 251, min: 1
                      },
                      endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                    }}
                    onChange={(e) => setValue(e)}
                  />
                  {!isCm &&
                    <p className='text-danger'>*Invalid input</p>}
                </>
              ) : (
                <>
                  <TextField
                    label="Your Weight"
                    id="outlined-start-adornment"
                    name='lbs'
                    value={lbs || ""}
                    onChange={(e) => setValue(e)}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                      inputProps: {
                        max: 700, min: 1
                      },
                      endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                    }}
                  />
                  {!isLbs &&
                    <p className='text-danger'>*Invalid input</p>}
                  <TextField
                    label="Your Height(feet)"
                    id="outlined-start-adornment"
                    name='ft'
                    value={ft || ""}
                    onChange={(e) => setValue(e)}
                    style={{ width: 170 }}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                      inputProps: {
                        max: 107, min: 1
                      },
                      endAdornment: <InputAdornment position="end">ft</InputAdornment>,
                    }}
                  />
                  {!isFeet &&
                    <p className='text-danger'>*Invalid input</p>}
                  <TextField
                    label="Your Height (inches)"
                    id="outlined-start-adornment"
                    name='in'
                    value={inch || ""}
                    onChange={(e) => setValue(e)}
                    style={{ width: 200 }}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                      inputProps: {
                        max: 999, min: 1
                      },
                      endAdornment: <InputAdornment position="end">in</InputAdornment>,
                    }}
                  />
                  {!isInch &&
                    <p className='text-danger'>*Invalid input</p>}  </>
              )}


            </div>
            <Button variant="contained" color="success" className='me-2 mb-3' disabled={isInch && isFeet && isLbs ? false : true} onClick={handleCalculate}>Calculate</Button>
            <Button variant="outlined" className='mb-3' onClick={handleReset}>Reset</Button>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <div className="container border shadow rounded p-3 m-2">
            <div className="bmi-result py-4 px-2 text-center">
              {bmi <= 18.4 && <div className='w-100 bg-primary py-2'><h2>YOUR BMI RESULT</h2></div>}
              {bmi >= 18.4 && bmi <= 24.9 && <div className='w-100 bg-success py-2'><h2>YOUR BMI RESULT</h2></div>}
              {bmi >= 25.0 && bmi <= 39.9 && <div className='w-100 bg-warning py-2'><h2>YOUR BMI RESULT</h2></div>}
              {bmi >= 40.0 && <div className='w-100 bg-danger py-2'><h2>YOUR BMI RESULT</h2></div>}
              <div>
                <h4 className='pt-3'> Body Mass Index for adults</h4>
                <h1 id='bmiValue'>{bmi}</h1>
              </div>
              <div >
                <ul className='d-sm-flex justify-content-between align-items-center pt-4 px-5 list-unstyled' >
                  <li className='bg-primary text-light p-3 border rounded'>underweight</li>
                  <li className='bg-success text-light p-3 border rounded'>healthy</li>
                  <li className='bg-warning text-light p-3 border rounded'>overweight</li>
                  <li className='bg-danger text-light p-3 border rounded'>obese</li>
                </ul>
              </div>
              <div className='bmi-det pt-5'>
                {bmi <= 18.4 &&
                  <div>
                  <h3 className='text-start'>Under Weight</h3>
                  <p className='text-start'>Your weight is less than it ideally should be. See your doctor or health professional and discuss whether you may need to aim at gaining weight. They can help you think of small, practical changes you feel comfortable with to achieve a healthy weight.</p>
                  </div>
                }
                {bmi >= 18.4 && bmi <= 24.9 && <div>
                  <h3 className='text-start'>Healthy</h3>
                  <p className='text-start'>Your BMI is currently within what is considered a healthy weight range. Being a healthy weight has important benefits as it can help reduce your risk of heart disease, diabetes and a range of other conditions.</p>
                  </div>
                  }
                {bmi >= 25.0 && bmi <= 39.9 && <div>
                  <h3 className='text-start'>Over Weight</h3>
                  <p className='text-start'>Your weight appears to be a bit above the ideal range. You might like to talk to your doctor about whether you need to set yourself a new target for a healthy weight. If you are at all concerned or have any health problems, check with your doctor before you start any new exercise programs or eating plans.</p>
                  </div>}
                {bmi >= 40.0 && <div>
                  <h3 className='text-start'>Obese</h3>
                  <p className='text-start'>You currently weigh more than is ideal. This puts your health at risk and is of increasing concern, particularly as you get older. Talk to your doctor about your BMI and discuss an appropriate and healthy weight for you.</p>
                  </div>}

               
                <div>
                  <span>*According to the National Health and Medical Research Council, a healthy BMI is between 20-25 for most adults.</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>

    </>
  )
}

export default App