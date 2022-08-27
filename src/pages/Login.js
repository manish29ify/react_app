import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthProvider'

function Login() {
    const auth = useAuth()
    const navigate = useNavigate()


    const style = {
        backgroundImage: "url(assets/imgs/login_bg.jpg)",
        backgroundSize: "cover"
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('====================================');
        console.log(ev);
        auth.login("manish");
        console.log('====================================', auth);
        navigate("/", { replace: true })

    }


    return (
        <div className='login' style={style}>
            <div className="card" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-5">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-check mt-3 mb-5">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary pull-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login