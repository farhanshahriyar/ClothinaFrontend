import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  padding: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 5px;
  bottom: 0px;
  left: 15px;
  width: 100%;
  height: 100%;
  display: flex-end;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;
  
  const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: black;
    color:white;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 1px 1px #000000;
`;


const CategoryItem = ({item}) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    </div>
  )
}

export default CategoryItem
