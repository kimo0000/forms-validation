import React from 'react'


function Form(){
    return (
      <div>
       <form className="row g-3">
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
    <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="email@example.com" />
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
    <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form>
      </div>
  
  
    )
}

export default Form