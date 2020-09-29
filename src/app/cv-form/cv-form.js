import React, { Component } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'

class CvForm extends Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        summary: '',
        degree: '',
        degreeDuration: '',
        college: '',
        jobTitle: '',
        jobDuration: '',
        company: '',
        motherLang: '',
        nativeLang: '',
        project: ''
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    HandleClick =  (e) => {
        e.preventDefault()
        // axios.post('http://localhost:150/', this.state)
        axios.post('https://server-init.herokuapp.com/', this.state)
        .then(res => console.log(res))
        this.props.history.push('/cv')

    }
    render() {
        return (
            <div className="container mt-3">
                <h1 className="text-info text-center mb-3">Online CV Generator</h1>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="fname">First Name</label>
                                <input type="text" name="fname" onChange={(e) => this.HandleChange(e)} placeholder="M Shakir" className="form-control" id="fname" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="lname">Last Name</label>
                                <input type="text" name="lname" onChange={(e) => this.HandleChange(e)} placeholder="Jamil" className="form-control" id="lname" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="text" name="email" onChange={(e) => this.HandleChange(e)} placeholder="info@shakirjamil.com" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" name="phone" onChange={(e) => this.HandleChange(e)} placeholder="+92XXXXXXXX63" className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" name="address" onChange={(e) => this.HandleChange(e)} placeholder="Lahore Cantt" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <label>Summarize Yourself</label>
                            <textarea className="form-control" name="summary" onChange={(e) => this.HandleChange(e)} rows="5" placeholder="Tell us about your Education, Experience and Projects (if any)"></textarea>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <h3>Education</h3>
                            <label>Degree</label>
                            <input type="text" name="degree" onChange={(e) => this.HandleChange(e)} className="form-control" placeholder="BSCS" />
                            <label>Duration</label>
                            <input type="text" name="degreeDuration" onChange={(e) => this.HandleChange(e)} className="form-control" placeholder="Aug 2018 - Sep 2019" />
                            <label>College/University</label>
                            <input type="text" name="college" onChange={(e) => this.HandleChange(e)} className="form-control" placeholder="LUMS" />
                        </div>
                        <div className="col-md-6">
                            <h3>Experience</h3>
                            <label>Job Title</label>
                            <input type="text" name="jobTitle" onChange={(e) => this.HandleChange(e)} className="form-control" placeholder="Software Engg." />
                            <label>Duration</label>
                            <input type="text" name="jobDuration" onChange={(e) => this.HandleChange(e)} className="form-control" placeholder="Jan 2013 - Jul 2017" />
                            <label>Organization</label>
                            <input type="text" name="company" onChange={(e) => this.HandleChange(e)} className="form-control" placeholder="Vvork Cloud Technologies" />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <h3>Languages</h3>
                            <div className="form-group">
                                <label>Mother Language</label>
                                <input type="text" name="motherLang" onChange={(e) => this.HandleChange(e)} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className='lang'>...</h3>
                            <div className="form-group">
                                <label>Native Language</label>
                                <input type="text" name="nativeLang" onChange={(e) => this.HandleChange(e)} className="form-control" />
                            </div>
                        </div>

                    </div>

                    <div className="row mt-3 mb-3">
                        <div className="col-md-12">
                            <h3>Projects</h3>
                            <div className="form-group">
                                <textarea className="form-control" name="project" onChange={(e) => this.HandleChange(e)} rows="5" placeholder="http://shakirjamil.com,
http://neoreach1.herokuapp.com"></textarea>
                            </div>
                        </div>
                    </div>
                     <button onClick={this.HandleClick} type="button" className="btn btn-outline-success mb-5 btn-block">Build Your CV</button>
                </form>
            </div>
        );
    }
}

export default CvForm
