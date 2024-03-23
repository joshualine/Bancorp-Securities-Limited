import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


const SummaryForm = ({ postSummarySubmit, checkout }) => {
  const [ngxAmount, setNgxAmount] = useState('');
  const [ngxPercent, setNgxPercent] = useState('');
  const [ngxYtd, setNgxYtd] = useState('');

  const [marketCapAmount, setMarketCapAmount] = useState('');
  const [marketCapPercent, setMarketCapPercent] = useState('');
  const [marketCapYtd, setMarketCapYtd] = useState('');

  const [volumeAmount, setVolumeAmount] = useState('');
  const [volumePercent, setVolumePercent] = useState('');

  const [valueAmount, setValueAmount] = useState('');
  const [valuePercent, setValuePercent] = useState('');

  const [dealsAmount, setDealsAmount] = useState('');
  const [dealsPercent, setDealsPercent] = useState('');

  const navigate = useNavigate();


  const addCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  const handleChange = (event) => setNgxAmount(addCommas(removeNonNumeric(event.target.value)));
    console.log(ngxAmount)

  const submitForm = (event) =>{
    event.preventDefault()



    const newStockRec = {
      ngxAmount,
      ngxPercent,
      ngxYtd,
      marketCapAmount, marketCapPercent, marketCapYtd,
      volumeAmount, volumePercent,
      valueAmount, valuePercent,
      dealsAmount, dealsPercent
    }
    

    const newSummary = {
      ngxAmount,
      ngxPercent,
      ngxYtd,
      marketCapAmount, marketCapPercent, marketCapYtd,
      volumeAmount, volumePercent,
      valueAmount, valuePercent,
      dealsAmount, dealsPercent
    }



    toast.success("Market Summary Successfully Updated")

    if(ngxAmount === "333"){
      checkout(newStockRec)
    } else {
      postSummarySubmit(newSummary)
    }


    // postSummarySubmit(newSummary)
    

    return navigate("/admin_board")
  }
  

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="container p-5 mt-5" >
          <div className="row align-items-md-stretch">

            <div className="col-md-4" style={{ backgroundColor: "#ECF0F3"} }>
              <div className="mb-3">
                <label htmlFor="ngxAmount" className="form-label">NGX All-Share Index Amount</label>
                <input type="text" className="form-control" value={ngxAmount} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="ngxPercent" className="form-label">All-Share Index Percent</label>
                <input type="number" className="form-control" value={ngxPercent} onChange={(event) => setNgxPercent(event.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="ngxYtd" className="form-label">All-Share Index YTD</label>
                <input type="number" className="form-control"  value={ngxYtd} onChange={(event) => setNgxYtd(event.target.value)}/>
              </div>
            </div>

            <div className="col-md-4 px-5" style={{ backgroundColor: "#E3E3E3"} }>
              <div className="mb-3">
                <label htmlFor="marketCapAmount" className="form-label">Market Capitalization Amount</label>
                <input type="number" className="form-control" value={marketCapAmount} onChange={(event) => setMarketCapAmount(event.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="marketCapPercent" className="form-label">Market Capitalization Percent</label>
                <input type="number" className="form-control" value={marketCapPercent} onChange={(event) => setMarketCapPercent(event.target.value)}/>
              </div>
              <div className="mb-3">
              <label htmlFor="marketCapYtd" className="form-label">Market Capitalization YTD </label>
                <input type="number" className="form-control" value={marketCapYtd} onChange={(event) => setMarketCapYtd(event.target.value)}/>
              </div>
            </div>

            <div className="col-md-4" style={{ backgroundColor: "#D9EAFC"} }>
              <div className="mb-3">
                <label htmlFor="volumeAmount" className="form-label">Volume Amount</label>
                <input type="number" className="form-control" value={volumeAmount} onChange={(event) => setVolumeAmount(event.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="volumePercent" className="form-label">Volume Percent</label>
                <input type="number" className="form-control" value={volumePercent} onChange={(event) => setVolumePercent(event.target.value)}/>
              </div>
            </div>

            <hr />
            <div className="col-md-4" style={{ backgroundColor: "#D0D1DE"} }>
              <div className="mb-3">
                <label htmlFor="valueAmount" className="form-label">Value Amount</label>
                <input type="number" className="form-control" value={valueAmount} onChange={(event) => setValueAmount(event.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="valuePercent" className="form-label">Value Percent</label>
                <input type="number" className="form-control" value={valuePercent} onChange={(event) => setValuePercent(event.target.value)}/>
              </div>
            </div>

            <div className="col-md-4 px-5" style={{ backgroundColor: "#F3F0E7"} }>
              <div className="mb-3">
                <label htmlFor="dealsAmount" className="form-label">Deals Amount</label>
                <input type="number" className="form-control" value={dealsAmount} onChange={(event) => setDealsAmount(event.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="dealsPercent" className="form-label">Deals Percent</label>
                <input type="number" className="form-control" value={dealsPercent} onChange={(event) => setDealsPercent(event.target.value)}/>
              </div>
            </div>

          </div>
          <div className="py-5">
            <button type="submit" className="btn btn-primary px-4">Post</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default SummaryForm