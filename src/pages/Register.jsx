import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/702350/pexels-photo-702350.jpeg?auto=compress&cs=tinysrgb&w=950")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin: 20px 0px;
`;

const Register = () => {
  return (
    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input placeholder="your first name" />
        <Input placeholder="your last name" />
        <Input placeholder="your username" />
        <Input placeholder="your email" />
        <Input placeholder="your password" />
        <Input placeholder="your confirm password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b> <br></br><br></br>
        <Link>ALREADY HAVE ACCOUNT ?</Link>
        </Agreement>
        <Button>CREATE</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Register
