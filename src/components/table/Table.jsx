import './table.css'

const Table = () => {
  return (
    <>
      <div className="container p-5">

        

        <div className="row g-5">
          <h1 className="pt-lg-5 col-md-6">Daily Price Lists</h1>
          <form className="form-inline pt-lg-5 col-md-6 justify-content-end">
            <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search Daily Price Lists" aria-label="Search" />
          </form>

        </div>

        <hr className="col-3 col-md-12 mb-5"></hr>

        <div className="mb-2 col-md-6">

        {/* <ul className="list-group float-left">
          <li className="list-group-item">
            <div className="d-flex">
              <p className='font-weight-bold flex-fill'>Daily Price List</p>
              <span className="px-5">
              </span>
              <p className='px-5'>21/23/2023</p>
              <span className="px-5">
              </span>
              <button className='btn btn-primary'>View</button>
            </div>
          </li>
        </ul> */}













          <table className="table">

            <tbody>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 10, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 11, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 10, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 11, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 10, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 11, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td><button className='btn btn-primary'>View</button></td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul className="pagination col-md-12 justify-content-end">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>

      </div>
    </>
  )
}

export default Table