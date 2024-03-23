import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      ///implentation
      // console.log('proceed');
      fetch("http://localhost:5000/user/" + username).then((res) => {
        return res.json();
      }).then((resp) => {
        //console.log(resp)
        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter valid username');
        } else {
          if (resp.password === password) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);
            usenavigate('/admin_board')
          } else {
            toast.error('Please Enter valid credentials');
          }
        }
      }).catch((err) => {
        // toast.error('Login Failed due to :' + err.message);
        toast.error('Wrong Username or Password');
      });
    }
  }


  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  }

  return (
    <>

      


      <div className="" style={{ marginTop: '100px' }}>
        <form onSubmit={ProceedLogin}>
          <div className="container col-md-4 pt-5 pb-5" style={{ backgroundColor: "#E3E3E3" }}>
            <div className="d-flex flex-row">
              <h1>Admin Login</h1>
              <div className="px-4" style={{ backgroundColor: "#191970", color: "white" }}>
              <Link to="/">
                <p className="pt-3">BSL Research Portal</p>
              </Link>
              </div>

            </div>
            <hr />
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input value={username} onChange={e => setUsername(e.target.value)} className="form-control"></input>
              {/* <input type="username" className="form-control" /> */}
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
              {/* <input type="password" className="form-control" /> */}
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm