import React, { Component } from 'react';
import './cv-output.css'
import axios from 'axios'
import Spinner from './spinner.gif'

class CV extends Component {
    state = {
        init: true,
        data: []
    }

    componentDidMount() {
        console.log('did mount');
        setTimeout(() => {
            // axios.get('http://localhost:150/data').then(res => {
            //     this.setState({
            //         data: [...res.data],
            //         init: false,
            //     })
            // })
            axios.get('https://server-init.herokuapp.com//data').then(res => {
                this.setState({
                    data: [...res.data],
                    init: false,
                })
            })
        }, 500)
    }


    render() {
        console.log('render');
        let response = this.state.data.splice(-1).map((obj, i) => {
            return (
                <div key={i} className="container" style={{ padding: '50px' }}>
                    <div className="row" style={{ padding: '0 130px 0 130px' }}>
                        <div className="col-md-4 bg-dark text-light" style={{ padding: '30px' }}>

                            <div className="row mt-5 mb-5">
                                <div className="col-md-12"><h3>{obj.fname} {obj.lname}</h3></div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="border-bottom mb-3">Contact</h4>
                                    <h6>Address</h6>
                                    <p>{obj.address}</p>
                                    <h6>Phone</h6>
                                    <p>{obj.phone}</p>
                                    <h6>Email</h6>
                                    <p>{obj.email}</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-8 border d-flex justify-content-around flex-column" style={{ height: '130vh', padding: "30px" }}>
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <h4 className="border-bottom">Professional Summary</h4>
                                    <p className="ml-3">{obj.summary}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="border-bottom">Work Experience</h4>
                                    <h6 className="ml-3">{obj.company}</h6>
                                    <p className="ml-3">{obj.jobTitle} <span className="ml-5">({obj.jobDuration})</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="border-bottom">Education</h4>
                                    <h6 className="ml-3">{obj.college}</h6>
                                    <p className="ml-3">{obj.degree} <span className="ml-5">({obj.degreeDuration})</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="border-bottom">Languages</h4>
                                    <h6 className="ml-3">{obj.motherLang} <span className="ml-5">- Conversational</span></h6>
                                    <h6 className="ml-3">{obj.nativeLang} <span className="ml-5">- Fluent</span></h6>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="border-bottom">Reference</h4>
                                    <p className="ml-3">{obj.project}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return (
            <div>
                {this.state.init ?
                    <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={Spinner} />
                    </div> :
                    <div>{response}</div>}
                {/* {!this.state.data.length ? <div>loading...</div> : <div> {response}</div>} */}
            </div>
        )


    }
}

export default CV