import React, { Component } from "react";
import axios from "axios";

class addAct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newDescription: "",
      newValue: "",
      category: ""
    };
  }

  addNewActToDb = e => {
    e.preventDefault();
    const newAct = {
      title: this.state.newTitle,
      value: this.state.newValue,
      description: this.state.newDescription,
      category: this.state.category,
      categoriesFromBackEnd: null
      //   maybe add author
    };

    console.log("check");
    axios
      .post(`${process.env.REACT_APP_IMPACT_SERVER}/act/create`, newAct)
      .then(newAct => {
        this.props.history.push("/");
      })
      .catch(err => console.log("Error while adding the new Act ", err));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_IMPACT_SERVER}/category/allCats`)
      .then(responseCategories => {
        // console.log("Response is: ", responseCategories.data.allCategories);
        this.setState({
          categoriesFromBackEnd: responseCategories.data.allCategories
        });
      })
      .catch(err => console.log("Err while getting categories: ", err));
  };

  //   showCategory = () => {
  //       return this.state.categoriesFromBackEnd.map(())
  //   }

  render() {
    const { categoriesFromBackEnd } = this.state;
    console.log("@@@@", this.state);

    if (categoriesFromBackEnd) {
      return (
        <div>
          <h1>Add Act</h1>
          <form onSubmit={this.addNewActToDb}>
            <div>
              <label htmlFor="newTitle">Title of New Act</label>
              <input
                value={this.state.newTitle}
                id="newTitle"
                name="newTitle"
                onChange={this.handleChange}
                type="text"
              />
            </div>

            <div>
              <label htmlFor="newDescription">Describe Act</label>
              <input
                value={this.state.newDescription}
                id="newDescription"
                name="newDescription"
                onChange={this.handleChange}
                type="textarea"
              />
            </div>

            <div>
              <label htmlFor="newValue">Value</label>
              <input id="newValue" type="number" min="0" />
            </div>

            <div>
              Select Category
              <select name="category">
                <option value=""> Pick Category </option>
                {categoriesFromBackEnd.map(oneCat => {
                  return (
                    <option value={oneCat._id} key={oneCat._id}>
                      {oneCat.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      return <div>Loading ...</div>;
    }
  }
}

export default addAct;
