import React from 'react';
import Card from '../components/Card'
import headshot from '../assets/images/claudia.jpg'
import experience from '../assets/images/interest.png'
import interests from '../assets/images/writing.jpg'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            items: [
                {
                    id: 0,
                    title: 'My Writing',
                    subTitle: '',
                    imgSrc: experience,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'My Experience',
                    subTitle: '',
                    imgSrc: headshot,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My Interests',
                    subTitle: '',
                    imgSrc: interests,
                    link: '',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item ={item} onClick={(e => this.handleCardClick(item.id, e))} 
            key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;