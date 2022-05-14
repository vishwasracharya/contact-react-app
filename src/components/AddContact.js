import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      // alert("ALl the fields are mandatory!");
      document.getElementById("errMsgName").style.display = "";
      document.getElementById("errMsgEmail").style.display = "";
      return;
    } 
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main" style={{padding: '5px 0px', margin: '100px'}}>
      <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
          <label>Name <sup>*</sup></label>
          <div className="ui input">
            <input
              type="text"
              name="name"
              placeholder="xyz"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              style={{borderRadius: '10px'}}
            />
          </div>
          <div class="ui pointing red basic label" id="errMsgName" style={{display: 'none'}}>Please enter a value</div>
          </div>
          <div className="field">
            <label>Email <sup>*</sup></label>
            <div className="ui input">
            <input
              type="text"
              name="email"
              placeholder="xyz@gmail.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              style={{borderRadius: '10px'}}
            />
          </div>
          <div class="ui pointing red basic label" id="errMsgEmail" style={{display: 'none'}}>Please enter a value</div>
          </div>
          <div>
          <button className="mini ui button violet labeled icon" id="addBtn" style={{borderRadius: '10px'}}><i class="address card icon"></i>Add Details</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
