import React, { Component, } from 'react';
import { Grid, } from "semantic-ui-react";
import styled from "styled-components";
import cityscape from "../images/cityscape.jpeg"

class HomePage extends Component {

  render() {
    return(
      <Grid celled style={{margin: "0"}}>
        <Grid.Row>
          <FullContainer>
          
          </FullContainer>
        </Grid.Row>
      </Grid>
    )
  }
}

const FullContainer = styled.div`
  background: url(${cityscape}) no-repeat
  center center/cover;
  height: 600px;
  width: 100vw;
`

export default HomePage