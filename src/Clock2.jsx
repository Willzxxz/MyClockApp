import React, { Component } from "react";
import Select from "./Select";
import Clocks from "./Clocks";
import { Button } from "@chakra-ui/react";

class Clock2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      submit: false,
      zones: [],
    };
  }
  handleChangeSelect(e) {
    let select = e.target.value;
    this.setState({ select: select, submit: true });
  }
  handleOnSubmit(e) {
    e.preventDefault();
    this.setState({
      zones: [...this.state.zones, this.state.select],
      select: "",
      submit: false,
    });
  }
  render() {
    return (
      <main className="Clock">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={this.handleOnSubmit.bind(this)}>
                <div className="form-group">
                  <select
                    onChange={this.handleChangeSelect.bind(this)}
                    value={this.state.select}
                  >
                    <Select />
                  </select>
                </div>
                <Button
                  type="submit"
                >Select Timezone</Button>
              </form>
            </div>
            <div className="col-md-8">
              <Clocks zones={this.state.zones} />
              <Clocks zones={this.state.zones} />
              <Clocks zones={this.state.zones} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Clock2;
