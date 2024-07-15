import React,{useState} from 'react'

function Emi() {
    const [emiData,setEmiData]=useState({amount:0,noofyears:0,rateofinterest:0,result:0})

function handleClick(){
    let emi=(emiData.amount*emiData.noofyears*emiData.rateofinterest)/100
    setEmiData({...emiData,result:emi})
}
  return (
    <div>
        <div className='row mt-4'>

            <div className="col-3"></div>
            <div className="col-6 border border-3 rounded shadow p-4 ">
                <h2 className='text-center fw-bold'>EMI</h2>
                <div className="mb-3">
                    <label htmlFor="">enter amount</label>
                    <input type="text" className='form-control' onChange={(e)=>setEmiData({...emiData,amount:+e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">enter numberofyears</label>
                    <input type="text" className='form-control' onChange={(e)=>setEmiData({...emiData,noofyears:+e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="">enter rateofinterest</label>
                    <input type="text" className='form-control' onChange={(e)=>setEmiData({...emiData,rateofinterest:+e.target.value})} />
                </div>
                <div className="mb-3">
                    <label htmlFor="enter number1"></label>
                    <button className='btn btn-primary' onClick={handleClick}>Calculate</button>
                </div>
                <h1>EMI {emiData.result}</h1>

            </div>
            <div className="col-3"></div>

        </div>

    </div>
  )
}

export default Emi
