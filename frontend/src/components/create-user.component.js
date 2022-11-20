import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }

        console.log(user);

        axios.post('http://localhost:5000/users/add',user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Username: </label>
                        <input type='text' className='form-control' value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className='mb-3'>
                        <input type='submit' className='btn btn-primary' value="Create New user"/>
                    </div>
                </form>
            </div>
        )
    }
}