import Footer from "./footer"
function Body() {
  return (
    <div>
    <div className="container">
    <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6 col-lg-5">
        <div className="card shadow-sm">
            <div className="card-body p-4">
            <h3 className="text-center mb-4">Create an Account</h3>
            <form>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Full Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required=""
                />
                </div>
                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required=""
                />
                </div>
                <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    required=""
                />
                </div>
                <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Re-enter password"
                    required=""
                />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                Register
                </button>
            </form>
            <p className="text-center mt-3 mb-0">
                Already have an account? <a href="login.html">Login</a>
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
   <Footer />
   </div>
)
}

export default Body