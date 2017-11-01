import React, {Component} from 'react'



class Revenue extends Component{
  render(){
    return(
      <div>
        <div className="col-lg-3 col-sm-6">
                        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-success text-center">
                                            <i className="ti-wallet"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                            <p>Revenue</p>
                                            $1,345
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-calendar"></i> Last day
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
    )
  }
}

export default Revenue;