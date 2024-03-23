
const LoginForm = () => {
  return (
    <>
      <form>
        <div className="container col-md-4 pt-5 pb-5" style={{ backgroundColor: "#E3E3E3" }}>
          <div className="d-flex flex-row">
          <h1>Admin Login</h1>
          <div className="px-4" style={{ backgroundColor: "#191970", color: "white" }}>

          <p className="pt-3">BSL Research Portal</p>
          </div>

          </div>
          <hr />
          <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="username" className="form-control" />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
        </div>
      </form>
    </>
  )
}

export default LoginForm