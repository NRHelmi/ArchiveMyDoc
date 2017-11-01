import React, {Component} from 'react'
import axios from 'axios'

class TableList extends Component{
    constructor(props){
        super(props)

        this.state = {
                    data:[]
                }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url:    'http://localhost:5000/getCustomers'
        })
        .then(response =>{
            this.setState({data: response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        return(
            <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title"></h4>
                                <p className="category"></p>
                            </div>
                            <div className="content table-responsive table-full-width">
                                <table className="table table-striped">
                                    <thead>
                                        <th>Company</th>
                                    	<th>Username</th>
                                    	<th>Email</th>
                                    	<th>Firstname</th>
                                    	<th>Lastname</th>
                                        <th>Country</th>
                                        <th>AboutMe</th>
                                    </thead>
                                    <tbody>{this.state.data.map((item,key)=>{
                                        return (
                                            <tr key = {key}>
                                                <td>{item.company}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.firstname}</td>
                                                <td>{item.lastname}</td>
                                                <td>{item.country}</td>
                                                <td>{item.aboutme}</td>
                                            </tr>
                                        )})}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default TableList;