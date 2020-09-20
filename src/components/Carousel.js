import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import cboy from '../assets/C-BOI.png';
import me from '../assets/me.jpeg';
import hva from '../assets/hva.jpeg';
import b from '../assets/B.png';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Artjom Cubleac',
          subTitle: 'About me',
          imgSrc: me,
          link: '/about',
        },
        {
          id: 1,
          title: 'RosselChaslie',
          subTitle: 'Website I made for an upcoming Artist',
          imgSrc: cboy,
          link: 'https://www.rosselchaslie.com',
          selected: false,
        },
        {
          id: 2,
          title: 'School and Job experiences',
          subTitle: 'Check out my CV!',
          imgSrc: hva,
          link: '/resume',
          selected: false,
        },
        {
          id: 3,
          title: 'SvBazinga!',
          subTitle: 'Site I made for \n a student associtation',
          imgSrc: b,
          link: 'https://www.svbazinga.nl',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
