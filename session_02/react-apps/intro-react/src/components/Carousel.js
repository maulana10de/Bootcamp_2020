import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [
        {
          image:
            'https://images.unsplash.com/photo-1530442620790-29fad255207a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          alt: 'First slide',
        },
        {
          image:
            'https://images.unsplash.com/photo-1484704324500-528d0ae4dc7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          alt: 'Second slide',
        },
        {
          image:
            'https://images.unsplash.com/photo-1549586073-f4c3b7ff044a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          alt: 'Third slide',
        },
      ],
    };
  }

  renderImageCarousel = () => {
    return this.state.imageUrl.map((item, i) => {
      if (i === 0) {
        return (
          <div className='carousel-item active' key={i}>
            <img className='d-block w-100' src={item.image} alt={item.alt} />
          </div>
        );
      }
      return (
        <div className='carousel-item' key={i}>
          <img className='d-block w-100' src={item.image} alt={item.alt} />
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div
          id='carouselExampleSlidesOnly'
          className='carousel slide'
          data-ride='carousel'
        >
          <div className='carousel-inner'>{this.renderImageCarousel()}</div>
        </div>
      </>
    );
  }
}

export default Carousel;
