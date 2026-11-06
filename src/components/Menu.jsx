import { Container, Row, Col, Card } from "react-bootstrap";
const MenuSection = () => {
    const menuItems = [
        {id: 1,
            name: 'Cheesecake',
            description: 'Creamy cake with rich flavor.',
            price: '5$',
            image: 'https://www.allrecipes.com/thmb/zbc2nW_7XNchZ0cwZB2ihatBRcU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276069-homemade-cheesecake-VAT-Beauty-4x3-56fe59996fbe4dba982f5358b2c98afb.jpg'
        },
          {id: 2,
            name: 'Iced Coffee',
            description: 'Cold and refreshing coffee.',
            price: '4.5$',
            image: 'https://www.torani.com/media/catalog/product/R/a/Raspberry_Dream_Iced_Coffee.jpg?optimize=medium&fit=bounds&height=815&width=650&canvas=650:815'
        },
          {id: 3,
            name: 'Latte',
            description: 'Espresso with creamy milk.',
            price: '4$',
            image: 'https://www.chilitochoc.com/wp-content/uploads/2022/12/homemade-caramel-latte-ft.jpg'
        },
          {id: 4,
            name: 'Espresso',
            description: 'Rich and strong concentrated.',
            price: '3$',
            image: 'https://www.sharmispassions.com/wp-content/uploads/2012/07/espresso-coffee-recipe04-500x375.jpg'
        }
    ];
    return(
        <div className="py-5">
            <p className="mt-5 text-center fw-bold fs-4" style={{color: '#c8a96b'}}>Our Delightful Menu</p>
            <Container>
                <Row>
                    {menuItems.map((item) => (
                        <Col key={item.id} lg='3' sm='6' md='6'>
                            <Card className="mt-5 border-0 shadow rounded-4">
                                <div className="overflow-hidden rounded-4 mb-3" style={{ height: '220px'}}>
                                    <Card.Img variant='top' src={item.image}
                                    alt={item.name} />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-4" style={{ color:'#3a2e2b', fontFamily:"'Playfair Display', serif"}}>
                                        {item.name}
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        {item.description}
                                    </Card.Text>
                                    <p className="fw-bold fs-5" style={{color:'#c8a96b'}}>{item.price}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
export default MenuSection;