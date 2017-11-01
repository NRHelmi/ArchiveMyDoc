import React, {Component} from 'react'

class Sales extends Component{
    render(){
        return(
             <div className="col-md-6">
                        <div className="card ">
                            <div className="header">
                                <h4 className="title">2015 Sales</h4>
                                <p className="category">All products including Taxes</p>
                            </div>
                            <div className="content">
                                <div id="chartActivity" className="ct-chart"></div>

                                <div className="footer">
                                    <div className="chart-legend">
                                        <i className="fa fa-circle text-info"></i> Tesla Model S
                                        <i className="fa fa-circle text-warning"></i> BMW 5 Series
                                    </div>
                                    
                                    <div className="stats">
                                        <i className="ti-check"></i> Data information certified
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Sales;