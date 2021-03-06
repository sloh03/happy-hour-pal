import React, { Component } from "react";
import { Col, Row } from 'reactstrap';
// import deals from "../../deals.json";
import { BusinessCard, BusinessNameCard, DealCard } from "../../components/Business";

import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import "./EditBusiness.css";

class EditBusiness extends Component {

  state = {
    businesses: [],
    day: "",
    beginTime: "",
    endTime: "",
    info: "",
    visibility: "visible",
    name: "",
    address: "http://www.ermanosbrew.com/",
    stars: "****",
    currentBusiness: [],
    currentBusinessDeals: []
  };

  handleClickEvent = () => {
      // this.props.history.push("/submitedit");
      if (this.props.loggedIn) {
          this.props.history.push("/submitedit");
      } else {
          this.props.history.push("/login");
      }
  }

  // Load all businesses from the Business collection.
  componentDidMount() {
    this.loadBusinesses();
  }

  // Retrieve all businesses to be displayed in select drop-down.
  loadBusinesses = () => {
    API.getBusinesses()
      .then(res =>
        this.setState({
          businesses: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  handleSelectedOption = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // Upon select, get info of selected business (by id).
  loadTargetBusiness = (event) => {
    const select = event.target;
    const selectedOption = select[select.selectedIndex];
    API.getBusiness(selectedOption.getAttribute('data-id'))
      .then(res =>{
        this.setState({currentBusiness: res.data[0]})
        console.log(res)
      })
      .catch(err => console.log(err))

      // Next, get the deals that go with the business (by same id).
      .then(
        API.getDeals(selectedOption.getAttribute('data-id'))
          .then(results =>{
            this.setState({currentBusinessDeals: results.data});
            console.log(results.data)
            console.log(this.state.currentBusinessDeals)
          })
      )
  }

  render() {

    // Option A ... avoids declaring initially in state.
    const {currentBusiness} = this.state

    return (
      <div>
        <Row>
          <Col sm="4">

            {/* <BackBtn /> */}

            <BusinessCard>
              {currentBusiness &&
                <BusinessNameCard
                  name={currentBusiness.name}
                  address={this.state.address}
                  stars={this.state.stars}
                />
              }

              {/* Deal Card displays all data from business collection. */}
              {this.state.currentBusinessDeals.length ? (
                <div>
                  {this.state.currentBusinessDeals.map(business => (
                    <DealCard
                      // onClick={() => this.handleClickEvent(pic.id)}
                      id={business._id}
                      key={business._id}
                      day={business.day}
                      beginTime={business.beginTime}
                      endTime={business.endTime}
                      info={business.info}
                      // canEdit={this.state.canEdit}
                      // visibility={this.state.visibility}
                      showButton={true}
                      handleClickEvent={this.handleClickEvent}
                    />
                  ))}
                </div>
              ) : (
                <h3>No current happy hour deals</h3>
              )}

            </BusinessCard>
          </Col>
          <Col sm="4">

            {/* Component for drop-down business list. */}
            <SearchForm
              handleSelectedOption={this.handleSelectedOption}
              businesses={this.state.businesses}
              loadTargetBusiness={this.loadTargetBusiness}
              // loadTargetDeals={this.loadTargetDeals}
            />

          </Col>
        </Row>
      </div>
    );
  }
}

export default EditBusiness;
