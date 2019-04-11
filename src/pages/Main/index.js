import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

class styles extends Component {
  state = {
    newBox: "",
    loading: false
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      this.setState({
        loading: true
      });
      const response = await api.post("boxes", {
        title: this.state.newBox
      });

      this.props.history.push(`/box/${response.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  handleInputChange = e => {
    this.setState({
      newBox: e.target.value
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Logotipo" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Criando a sua box..." : "Criar"}
          </button>
        </form>
      </div>
    );
  }
}

export default styles;
