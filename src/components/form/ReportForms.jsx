

const ReportForms = () => {
  return (
    <>
      <form >
        <div className="container col-md-4 pt-5 pb-5" style={{ backgroundColor: "#E3E3E3"} }>
          <h1>Upload Reports</h1>
          <hr />

          <div className="mb-3">
            <label htmlFor="reportType">Report Type</label>
            <select className="form-select" aria-label="Default">
              <option selected className="font-weight-bold">Select Report Type</option>
              <option value="1">Daily Price list</option>
              <option value="2">Daily Market Summary</option>
              <option value="3">Weekly Stock Recommendation</option>
            </select>
          </div>

          <div className="mb-3 col-md-4 px-0">
            <label htmlFor="reportDate" className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="reportLink" className="form-label">Report Link</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </form>
    </>
  )
}

export default ReportForms