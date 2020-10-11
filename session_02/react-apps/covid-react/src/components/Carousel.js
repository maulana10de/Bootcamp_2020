import React from 'react';
import banner1 from '../assets/img/img-banner-1.jpg';
import banner2 from '../assets/img/img-banner-2.jpg';
import banner3 from '../assets/img/img-banner-3.jpg';

class CarouselComp extends React.Component {
        constructor(props) {
    super(props);
    this.state = {
      info: [banner1, banner2, banner3],
    };
  }
  renderCarousel = () => {
    return this.state.info.map((item, idx) => {
      console.log(item);
      if (idx === 0) {
        return (
          <div className='carousel-item active' key={idx}>
            <img
              className='d-block w-100'
              style={{ height: 443 }}
              src={item}
              alt={`slide${idx + 1}`}
            />
          </div>
        );
      }
      return (
        <div className='carousel-item' key={idx}>
          <img
            className='d-block w-100'
            style={{ height: 443 }}
            src={item}
            alt={`slide${idx + 1}`}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div id='carouselInfo' className='carousel slide data-ride=' carousel>
        <div className='carousel-inner'>{this.renderCarousel()}</div>
        <a
          className='carousel-control-prev'
          href='#carouselInfo'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            arial-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselInfo'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            arial-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    );
  }
}

export default CarouselComp;
