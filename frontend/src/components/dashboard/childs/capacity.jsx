import React , {Component} from 'react'

class Capacity extends Component{
  render(){
    return(
      <div>
        <div className="col-lg-3 col-sm-6">
        <div className="card">
                            <div className="content">
                                <div className="row">
                                    <div className="col-xs-5">
                                        <div className="icon-big icon-warning text-center">
                                            <i className="ti-server"></i>
                                        </div>
                                    </div>
                                    <div className="col-xs-7">
                                        <div className="numbers">
                                            <p>Capacity</p>
                                            105GB
                                        </div>
                                    </div>
                                </div>
                                <div className="footer">
                                    <hr />
                                    <div className="stats">
                                        <i className="ti-reload"></i> Updated now
                                    </div>
                                </div>
                            </div>
                        </div>
          </div>
      </div>
    )
  }
}

export default Capacity;