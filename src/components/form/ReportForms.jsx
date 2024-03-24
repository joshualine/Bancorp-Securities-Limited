import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


const ReportForms = ({ uploadPricelistSubmit, uploadStockRecSubmit, uploadDailySummaryReportSubmit }) => {
  const [reportType, setReportType] = useState('');
  const [date, setDate] = useState('');
  const [reportLink, setReportLink] = useState('');

  const navigate = useNavigate();


  const submitForm = (event) =>{
    event.preventDefault()

    const pricelist = {
      reportType,
      date,
      reportLink
    }
    
    const stockRecommendation = {
      reportType,
      date,
      reportLink
    }

    const dailySummary = {
      reportType,
      date,
      reportLink
    }

    if(reportType === "Pricelist"){
      uploadPricelistSubmit(pricelist)
    } else if (reportType === "Market Summary"){
      uploadDailySummaryReportSubmit(dailySummary)
    } else {
      uploadStockRecSubmit(stockRecommendation)
    }
    toast.success("Report uploaded Successfully")

    return navigate("/admin_board")

  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="container col-md-4 pt-5 pb-5" style={{ backgroundColor: "#E3E3E3"} }>
          <h1>Upload Reports</h1>
          <hr />

          <div className="mb-3">
            <label htmlFor="reportType">Report Type</label>
            <select className="form-select" aria-label=".form-select-lg" value={reportType} onChange={(e) => setReportType(e.target.value)} required>
              {/* <option selected className="font-weight-bold">Select Report Type</option> */}
              <option value="Pricelist">Daily Price list</option>
              <option value="Market Summary">Daily Market Summary</option>
              <option value="Stock Recommendation">Weekly Stock Recommendation</option>
            </select>
          </div>

          <div className="mb-3 col-md-4 px-0">
            <label htmlFor="reportDate" className="form-label">Date</label>
            <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="reportLink" className="form-label">Report Link</label>
            <input type="text" className="form-control" value={reportLink} onChange={(e) => setReportLink(e.target.value)} required/>
          </div>

          <div className="py-3">
            <hr />
            <button type="submit" className="btn btn-primary px-4">Upload</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ReportForms