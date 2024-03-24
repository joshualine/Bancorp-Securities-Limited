// import "./footer.css"



const Footer = ({ position = "fixed-bottom" }) => {
  return (
    <div>
      <div className={`text-white ${position}`} style={{ backgroundColor: '#191970' }}>
        <div className="container">
          <footer className="row py-5 border-top ">
            <div className="col">
              <a href="/" className="d-flex align-items-center mb-3 link-light text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
              </a>
              <h4 className="text-white">Bancorp Securities Ltd</h4>
              <p className="text-white">&copy; 2024</p>
            </div>

            <div className="col">

            </div>

            <div className="col">
              <h5>Informations</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 "><a href="https://bancorpsecurities.com/indemnity.html" className="nav-link p-0 text-white">Electronic Communication
                  Indemnity</a></li>
                <div className="b-example-divider">__________________________</div>
                <li className="nav-item mb-2 "><a href="https://bancorpsecurities.com/whistleblowing.html" className="nav-link p-0 text-white">Whistle Blowing</a></li>
                <div className="b-example-divider">__________________________</div>
                <li className="nav-item mb-2">Work Hours:
                  Monday-Friday <span>9:00AM to 4:00PM</span>
                </li>
              </ul>
            </div>

            <div className="col">
              <h5>Quick Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://bancorpsecurities.com/privacy.html" className="nav-link p-0 text-white">Privacy policy</a></li>
                <li className="nav-item mb-2"><a href="https://bancorpsecurities.com/Bancorp_TradePal_privacy.html" className="nav-link p-0 text-white">Bancorp Tradepal Policy</a></li>
                <li className="nav-item mb-2"><a href="https://bancorpsecurities.com/terms.html" className="nav-link p-0 text-white">Terms and Conditions</a></li>
                {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Emails:</a></li> */}
                <p className="font-weight-bold p-0 m-0">Emails:</p>
                <li className="nav-item mb-2"><a href="mailto:stockbroking@capitalbancorpgroup.com" className="nav-link p-0 text-white">stockbroking@capitalbancorpgroup.com</a></li>
                <li className="nav-item mb-2"><a href="mailto:info@capitalbancorpgroup.com" className="nav-link p-0 text-white">info@capitalbancorpgroup.com</a></li>

              </ul>
            </div>

            <div className="col">
              <h5>Contact Info</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">9, Wesley Street, beside Eleganza building,
                  Marina, Lagos, Nigeria.</li>
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></a></li>
                <i className="bi bi-instagram"></i>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer