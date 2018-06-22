import React, { Component } from "react";
import { Card, Row, Col } from 'reactstrap';
// import API from "../utils/API";
import deals from "../../deals.json";
// import reviews from "../../reviews.json";
import {BusinessCard, BusinessNameCard, DealCard} from "../../components/Business";

import SearchBar from "../../components/SearchBar";
// import  BusinessNameCard from "../../components/BusinessNameCard";
// import DealCard from "../../components/DealCard";

// import { BackBtn, ReportDealBtn, RateDealBtn, ViewAllBtn, SuggestEditBtn } from "../../../components/Buttons";


class Results extends Component {
  state = {
    
    deals,
    name: "Ermanos",
    address: "http://www.ermanosbrew.com/",
    stars: "****"

   
  };

  



  render() {

    return (
      <div>
        <SearchBar />
        <Row>
          <Col sm="4">
          {/* <SearchBar /> */}
            <BusinessCard>
              <BusinessNameCard 
              name={this.state.name} 
              address={this.state.address} 
              stars={this.state.stars} 
              />

              <DealCard
              // onClick={() => this.handleClickEvent(pic.id)}
              id={deals[0].id}
              key={deals[0].id}
              day={deals[0].day}
              beginTime={deals[0].beginTime}
              endTime={deals[0].endTime}
              info={deals[0].info}
              />
            
            </BusinessCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Results; 