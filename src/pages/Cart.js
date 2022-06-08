import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import Shoeimg from '../assets/Shoe.png'
import Roundneckimg from '../assets/roundneck.png'


const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: '10px'})}

`


const Title = styled.h1`
font-weight: 300;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=> props.type === 'filled' && 'none'};
background: ${props=> props.type === 'filled' ? 'black' : 'transparent'};
color: ${props=> props.type === 'filled' && 'white'};
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}

`

const TopTexts = styled.div`
${mobile({display: 'none'})}

`


const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})}

`

const ProductDetail = styled.div`
flex: 2;
display: flex;
`

const Image = styled.img`
width: 200px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background: ${props=> props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProductAmount = styled.div`
font-size:24px;
margin: 5px;
${mobile({margin: '5px 15px'})}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: '20px'})}

`

const Hr = styled.hr`
background: #eee;
border: none;
height: 1px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

`
const SummaryTitle = styled.h1`
font-weight: 200;
`


const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total' && '500'};
font-size: ${props=>props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
width: 100%;
padding: 10px;
background: #000000;
color: #fff;
font-size: 600;
`




const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bags(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src={Shoeimg} />
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b> 93862789373</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src={Roundneckimg} />
                            <Details>
                                <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                <ProductId><b>ID:</b> 93862789373</ProductId>
                                <ProductColor color='gray' />
                                <ProductSize><b>Size:</b> M </ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
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