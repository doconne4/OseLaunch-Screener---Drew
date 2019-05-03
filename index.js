import React from 'react';
import ReactDOM from 'react-dom';

//parent class, constructs and handles variables/save states
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            phoneNumber: '',
            age: '',
            submitted: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.lastEntry = this.lastEntry.bind(this);
    }

    //handler responsible for saving current state
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //sends save state to child class
    lastEntry() {
        return (
            <LastEntry
                first={this.state.first}
                last={this.state.last}
                phoneNumber={this.state.phoneNumber}
                age={this.state.age} />);
                
    }

    //submit button handler, sets submission state and optional submission message
    onSubmit(event) {
        event.preventDefault();
        this.setState({
            submitted: true
        });
        //alert('Submission successful.');
    }

    //rendering, sends data to handlers and creates submission form
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <label>
                    First Name:<br />
                    <input
                        name="first"
                        type="text"
                        value={this.props.first}
                        onChange={this.handleInputChange} />
                </label>
                <pre />
                <label>
                    Last Name:<br />
                    <input
                        name="last"
                        type="text"
                        value={this.props.last}
                        onChange={this.handleInputChange} />
                </label>
                <pre />
                <label>
                    Phone Number:<br />
                    <input
                        name="phoneNumber"
                        type="number"
                        value={this.props.phoneNumber}
                        onChange={this.handleInputChange} />
                </label>
                <pre />
                <label>
                    Age:<br />
                    <input
                        name="age"
                        type="number"
                        value={this.props.age}
                        onChange={this.handleInputChange} />
                </label> <pre />
                <input
                        type="submit"
                        value="Submit" />
                </form>
                {this.state.submitted && this.lastEntry()}
                </div>
        );
        
    }
}

//child class responsible for rendering last entry
class LastEntry extends React.Component {
    render() {
        return (
            <div>
                    <p>First Name: {(this.props.first)}</p>
                    <pre />
                    <p>Last Name: {this.props.last}</p>
                    <pre />
                    <p>Phone Number: {this.props.phoneNumber}</p>
                    <pre />
                    <p> Age: {this.props.age} </p>
                    <pre />
            </div>
        );
    }
}

//render initial form
ReactDOM.render(
    <Form />,
    document.getElementById('root')
);
