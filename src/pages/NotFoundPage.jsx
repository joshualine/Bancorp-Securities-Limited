import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <h1>:(</h1><br />
        <h2>A <span>404</span> error occured, Page not found, check the URL and try again.</h2><br /><br />
        <h3><Link to="/">Return to Home Page</Link></h3>
      </div>
    </>
  )
}

export default NotFoundPage