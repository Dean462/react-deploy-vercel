import React from 'react';

class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dangerVisible: false,
      successVisible: false,
      name: '',
      phone: '',
      email: '',
      experience: '',
      designation: '',
      message: '',
      nameError: '',
      phoneError: '',
      emailError: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [`${name}Error`]: ''
    });
  };

  validateForm = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const { name, phone, email } = this.state;

    const empty = [name === '', phone === '', email === ''];

    if (empty.includes(true)) {
      this.setState({ dangerVisible: true });

      setTimeout(() => {
        this.setState({ dangerVisible: false });
      }, 2000);

      return false; // Prevent form submission
    }

    if (name.length < 3) {
      this.setState({ nameError: "Name must be at least 3 characters long." });
      return false; // Prevent form submission
    }

    if (name.length > 20) {
      this.setState({ nameError: "Name should not exceed 20 characters." });
      return false; // Prevent form submission
    }

    if (phone.length !== 10) {
      this.setState({ phoneError: "Phone number should have exactly 10 digits" });
      return false; // Prevent form submission
    }

    // Check for a valid email address
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex)) {
      this.setState({ emailError: "Invalid email address" });
      return false; // Prevent form submission
    }

    // Clear form fields
    this.setState({
      name: '',
      phone: '',
      email: '',
      experience: '',
      designation: '',
      message: ''
    });

    this.setState({ successVisible: true });

    setTimeout(() => {
      this.setState({ successVisible: false });
    }, 4000);

    return true; // Allow form submission
  };

  render() {
    return (
      <div className='careerForm'>
        <div className="detail">
          <div className="d1">
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" /><br />
            <span>{this.state.nameError}</span><br />
            <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Phone Number" maxLength="10" minLength="10" /><br />
            <span>{this.state.phoneError}</span><br />
            <label htmlFor="file">Choose File</label>
            <input type="file" id="file" name="file" />
          </div>
          <div className="d2">
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" /><br />
            <span>{this.state.emailError}</span><br />
            <input type="text" name="experience" value={this.state.experience} onChange={this.handleChange} placeholder="Experience" /><br /><br />
            <input type="text" name="designation" value={this.state.designation} onChange={this.handleChange} placeholder="Designation" />
          </div>
        </div>
        <textarea name="message" id="msg" placeholder="Message" rows="10" cols="83"></textarea>
        <button type="submit" className="submit" id="submit" onClick={this.validateForm}>Submit</button>
        <div className="message">
          <div className="success" style={{ display: this.state.successVisible ? 'block' : 'none' }}>
            Form is Submitted
          </div>
          <div className="danger" style={{ display: this.state.dangerVisible ? 'block' : 'none' }}>
            Fill the Form
          </div>
        </div>
      </div>
    );
  }
}

export default FormValidation;
