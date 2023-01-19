import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
    <Navbar />
    <Announcement />
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/323877373_1607886309663164_5165197639010191606_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wdah9LFmSa8AX8XM1Sw&_nc_ht=scontent.fdac136-1.fna&oh=00_AfDpQ6YC9OLPsl5dl-S0jueQnw-ZYoKOjz4L_2-KtYiQfg&oe=63CDBEBE" />
              <Details>
                <ProductName>
                  <b>Product:</b> Pink Hoodies
                </ProductName>
                <ProductId>
                  <b>ID:</b> 93813718293
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size:</b> 37.5
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>3</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>$ 90</ProductPrice>
            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <Image src="https://scontent.fdac136-1.fna.fbcdn.net/v/t39.30808-6/323449221_563503425299730_8385008006671067284_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xgxwCVhex7QAX8Q6-ok&_nc_ht=scontent.fdac136-1.fna&oh=00_AfArydUPfGQFYJ_4jwGtu2HQrq0YPW-DlVEccOfoSO2qiQ&oe=63CD6022" />
              <Details>
                <ProductName>
                  <b>Product:</b> Black Hoodies
                </ProductName>
                <ProductId>
                  <b>ID:</b> 93813718293
                </ProductId>
                <ProductColor color="gray" />
                <ProductSize>
                  <b>Size:</b> M
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <Add />
                <ProductAmount>1</ProductAmount>
                <Remove />
              </ProductAmountContainer>
              <ProductPrice>$ 25</ProductPrice>
            </PriceDetail>
          </Product>
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 115</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 6</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -6</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 115</SummaryItemPrice>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </Wrapper>
    <Footer />
  </Container>
  )
}

export default Cart
