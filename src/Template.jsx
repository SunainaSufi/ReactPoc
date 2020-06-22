import React, { Component } from 'react';
import EmployeeDataService from './EmployeeDataService';

class Template extends Component {

constructor(props) {
        super(props)
        this.state = {
            displayBio: false ,
            employeeDetails: [],
            message: null
            }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    refreshCourses() {
        EmployeeDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({employeeDetails : response.data})
                }
            )
    }

    render() {
        return (
            <div className="container">
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <h3>Employee Details</h3>
                <button style={{ marginLeft: "auto" }} onClick={this.refreshCourses}> Fetch Employee Details </button>
                </div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Employee Name</th>
                                <th>Employee Salary </th>
                            </tr>
                        </thead>
                        <tbody>
                                                    {
                                                        this.state.employeeDetails.map(
                                                            course =>
                                                                <tr key={course.id}>
                                                                    <td>{course.id}</td>
                                                                    <td>{course.name}</td>
                                                                    <td>{course.salary}</td>
                                                                </tr>
                                                        )
                                                    }
                                                </tbody>
                    </table>
                </div>
            </div>
        )
    }


}

export default Template