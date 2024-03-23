

const WeeklyReport = () => {
  return (
    <>
      <div className=" row mb-5 p-5 card_container d-flex">

        <div className="card mt-5 m-3 text-center" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item font-weight-bold ">Weekly Stock Recommendation</h4>
          </ul>
        </div>
        <div className="card mt-5 m-3 text-center" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item font-weight-bold ">Weekly Market Summary</h4>
          </ul>
        </div>

      </div>
    </>
  )
}

export default WeeklyReport