import React from "react";

class Additem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prodname: "",
      prodprice: 0,
    };
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.additem(this.state.prodname, Number(this.state.prodprice));
        }}
      >
        <div className="col-4">
          <div className="form-group ">
            <label htmlFor="inputname">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              name="prodname"
              onChange={(e) => {
                this.setState({ prodname: e.currentTarget.value });
              }}
              aria-describedby="name"
              value={this.state.prodname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice">price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="prodprice"
              onChange={(e) => {
                this.setState({ prodprice: e.currentTarget.value });
              }}
              value={this.state.prodprice}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </div>
      </form>
    );
  }
}

export default Additem;
