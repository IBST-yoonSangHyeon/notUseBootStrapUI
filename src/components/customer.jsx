import React, { Component } from 'react';




class Customer extends Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        );
    }
}

class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" width="60"/>
                <h1>{this.props.name}({this.props.id})</h1>
            </div>
        );
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.birthday}</p>
                <p>{ this.props.gender}</p>
                <p>{ this.props.job}</p>
            </div>
        );
    }
}




export default Customer;