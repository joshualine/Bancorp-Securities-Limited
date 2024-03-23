import "./hero.css"
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    <>
      <Container className="pt-lg-5">

        <div className="row g-5">
          <h1 className="pt-lg-5 col-md-6">Daily Price Lists</h1>
          <form className="form-inline pt-lg-5 col-md-6 justify-content-end">
            <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search Daily Price Lists" aria-label="Search" />
          </form>

        </div>

        <hr className="col-3 col-md-12 mb-5"></hr>

        <div className="mb-5 col-md-6">
          <table className="table">

            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead> */}

            <tbody>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 10, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 11, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 10, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 11, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 10, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 11, 2023</td>
                <td>View</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Daily Price List</td>
                <td>February 12, 2023</td>
                <td>View</td>
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

      </Container>
    </>
  )
}

export default Hero