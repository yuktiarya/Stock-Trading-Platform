import React from "react";

function Signup() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="asset/images/signup.png" alt="Signup" style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-4">Signup now</h1>
          <p className="text-muted mt-3">Or track your existing application.</p>
          <div className="mt-4">
            <label className="form-label">Mobile number</label>
            <div className="input-group mb-3" style={{ width: "80%" }}>
              <span className="input-group-text" id="basic-addon1">+91</span>
              <input type="text" className="form-control" placeholder="Mobile Number" autoFocus />
            </div>
            <p className="text-muted" style={{ fontSize: "12px" }}>You will receive an OTP on your number</p>
            <a className="btn btn-primary mb-3" style={{ width: "80%", padding: "10px", fontSize: "18px" }} href="https://stock-trading-platform-hf1u.onrender.com" target="_blank" rel="noopener noreferrer">Continue</a>
            <a href="/" style={{ textDecoration: "none", fontSize: "12px" }}>Want to open an NRI account?</a>
          </div>
        </div>
      </div>
      <div className="row mt-5 text-muted text-center" style={{ fontSize: "12px" }}>
        <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
        <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
      </div>
    </div>
  );
}

export default Signup;
