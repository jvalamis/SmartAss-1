import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick (value) {
    this.setState({
      
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <h1>Smart-Ass Sign Up</h1>
        <div className="row">
          <div className="col-md-12">
            <form role="form">
              <div className="form-group">
                <label>Create Username</label>
                <input type="email" className="form-control" id="UsernameCreate" />
              </div>
              <div className="form-group">

                <label>
                  Email address
					</label>
                <input type="email" className="form-control" id="EmailInputSign-In" />
              </div>
              <div className="form-group">

                <label id="passwordInput">
                  Password
					</label>
                <input type="password" className="form-control" id="passwordInputSign-In" />
              </div>
              <div className="form-group">

                <label id="passwordInput2">
                  Re-Enter Password to confirm
					</label>
                <input type="password" className="form-control" id="passwordInputSign-InConfirm" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
				</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;