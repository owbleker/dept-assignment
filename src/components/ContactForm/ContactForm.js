import React, { Component } from 'react';

class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formFields: {},
            err: [],
        }
    }

    changeHandler = (field, event) => {
        let formFields = this.state.formFields;
        formFields[field] = event.target.value;
        this.setState({
            formFields
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        if (this.validationHandler()) {
            alert('Message sent!');
        } else {
            alert('Please check the form for any errors.')
        }
    }
    
    validationHandler = () => {
        let formFields = this.state.formFields;
        let formValid = true;
        let err = {};
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!formFields["name"]){
            formValid = false;
            err["name"] = "Please fill in a name";
        }

        if(typeof formFields["name"] !== "undefined"){
            if(!formFields["name"].match(/^[a-zA-Z]+$/)){
                formValid = false;
                err["name"] = "Only letters";
            }        
        }

        if(!formFields["email"]){
            formValid = false;
            err["email"] = "Please fill in your email";
        }
        if(typeof formFields["email"] !== "undefined"){
            if (!re.test(formFields["email"])) {
                formValid = false;
                err["email"] = "Please enter a valid email";
            }
        }

        if(!formFields["message"]){
            formValid = false;
            err["message"] = "Please fill in a message";
        }

        this.setState({
            err: err
        })

        return formValid;
    }

    render() {
        return (
            <div className="contact-form container">
                <div className="row">
                    <div className="col-12 col-4--md">
                        <h2 className="contact-form__title ">
                            Question? We are here to help!
                        </h2>
                    </div>
                    <div className="col-12 col-8--md">
                        <div className="form-fields__wrapper wrapper">
                            <form onSubmit={this.submitHandler.bind(this)}>
                                    <div className="row">
                                    <div className="form-fields__input name-input col-12 col-5--md">
                                        <label className="form-fields__label" htmlFor="name">
                                            Name
                                        </label>
                                        <input  type="text" name="name" onChange={this.changeHandler.bind(this, "name")} value={this.state.formFields["name"]}/>
                                        <span className="error name-error">{this.state.err["name"]}</span>
                                    </div>
                                    <div className="form-fields__input email-input col-12 col-5--md">
                                        <label className="form-fields__label" htmlFor="email">
                                            Email
                                        </label>
                                        <input name="email" type="text" onChange={this.changeHandler.bind(this, "email")} value={this.state.formFields["email"]}/>
                                        <span className="error email-error">{this.state.err["email"]}</span>
                                    </div>
                                    <div className="form-fields__input message-input col-12 col-5--md">
                                        <label className="form-fields__label" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea name="message" type="text" onChange={this.changeHandler.bind(this, "message")} value={this.state.formFields["message"]}/>
                                        <span className="error message-error">{this.state.err["message"]}</span>
                                    </div>
                                    <div className="form-fields__submit form-input col-12">
                                        <button className="button">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;