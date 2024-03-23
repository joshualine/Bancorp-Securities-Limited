import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ListButton from "../../components/listButton/ListButton"


const AdminWelcomePage = () => {
  return (
    <>
      <Header />
      <div className=" row mb-5 p-5 card_container d-flex">
        <ListButton title={"Post Daily Market Summary"}>
          <Link to="/post_summary" className="btn btn-primary">Post</Link>
        </ListButton>
        <ListButton title={"Upload Reports"}>
          <Link to="/upload_reports" className="btn btn-primary">Upload</Link>
        </ListButton>
      </div>
      <Footer />
    </>
  )
}

export default AdminWelcomePage