import React, { Component } from 'react';

class CustomerDelete extends Component {
    deleteCustomer(id){
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    render() {
        return (
            <div>
                <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
            </div>
        );
    }
}

export default CustomerDelete;