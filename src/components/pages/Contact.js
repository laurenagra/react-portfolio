import React, { useState } from 'react';




export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

  // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
    //if statement containing the name and value for email and message???
  };

  const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };

return (
  <div>
    <p>
      Hello {firstName} {lastName}
    </p>
         {/*Add in form with fields for a name, email, and a message.*/}
    <form className="form">
      <input
        value={firstName}
        name="firstName"
        onChange={handleInputChange}
        type="text"
        placeholder="First Name"
      />
      <input
        value={lastName}
        name="lastName"
        onChange={handleInputChange}
        type="text"
        placeholder="Last Name"
      />
      {/*inputs for a message and an email */}
      <input 
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Email"
      />
      <input 
        value={msg}
        name="Message"
        onChange={handleInputChange}
        type="text"
        placeholder="Message"
      />
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  </div>
);
}
