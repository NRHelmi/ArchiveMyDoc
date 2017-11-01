import React, {Component} from 'react'

class User extends Component{
    render(){
        return(
        <div className="container-fluid">
            <div className="col-lg-8 col-md-7">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Edit Profile</h4>
                            </div>
                            <div className="content">
                                <form action="http://localhost:5000/saveCustomer" method="post">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input type="text" className="form-control border-input" name="company"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control border-input" name="username"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label >Email address</label>
                                                <input type="email" className="form-control border-input" name="email"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control border-input" name="firstname"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control border-input" name="lastname"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input type="text" className="form-control border-input" name="country"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>About Me</label>
                                                <textarea rows="5" className="form-control border-input" name="aboutme"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-info btn-fill btn-wd" value="Submit">Add Customer</button>
                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default User;