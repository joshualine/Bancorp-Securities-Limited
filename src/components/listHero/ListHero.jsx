
import "./listHero.css"

const ListHero = () => {
  return (
    <>
      <div className=" mb-5 p-lg-5 card_container">

        <div className="card mt-5 m-3 text-center" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item font-weight-bold ">Daily Reports</h4>
          </ul>
        </div>
        <div className="card mt-5 m-3 text-center" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item font-weight-bold ">Weekly Reports</h4>
          </ul>
        </div>
        <div className="card mt-5 m-3 text-center" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item font-weight-bold ">Monthly Reports</h4>
          </ul>
        </div>
        <div className="card mt-5 m-3 text-center" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <h4 className="list-group-item font-weight-bold ">Yearly Reports</h4>
          </ul>
        </div>
      </div>
    </>
  )
}

export default ListHero