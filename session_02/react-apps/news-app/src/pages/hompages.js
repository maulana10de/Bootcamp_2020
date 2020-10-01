import Axios from 'axios';
import React from 'react';
import CardNews from '../components/CardNews';
import CardNewsPage from '../components/CardNewsPage';
import CarouselCom from '../components/Carousel';
import CardInfoCorona from '../components/CardInfoCorona';

const API_URL = 'http://newsapi.org/v2/top-headlines?country=id&';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [
        'Business',
        'Entertainment',
        'Health',
        'Science',
        'Sports',
        'Technology',
      ],
      selectedCategory: 'business',
      newsDetails: [],
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    Axios.get(
      API_URL +
        `category=${this.state.selectedCategory}&apiKey=4eff9925a7004074a21cec851737871c`
    )
      .then((res) => {
        console.log('get data business:', res.data.articles);
        this.setState({ newsDetails: res.data.articles, reload: false });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  btSelect = (category) => {
    console.log(category);
    this.setState({ selectedCategory: category, reload: true });
  };

  renderCategory = () => {
    return this.state.category.map((item, idx) => {
      return (
        <a
          className='nav-link text-muted'
          key={idx}
          onClick={() => this.btSelect(item.toLowerCase())}
          style={{ cursor: 'pointer' }}
        >
          {item}
        </a>
      );
    });
  };

  renderCarousel = () => {
    return this.state.newsDetails.map((item, idx) => {
      if (idx === 0) {
        return (
          <div className='carousel-item active' key={idx}>
            <CarouselCom data={item} />
          </div>
        );
      } else if (idx <= 2) {
        return (
          <div className='carousel-item' key={idx}>
            <CarouselCom data={item} />
          </div>
        );
      }
    });
  };

  renderNews = () => {
    let tempNews = [...this.state.newsDetails];
    tempNews.splice(0, 5);
    return tempNews.map((item, idx) => {
      return (
        <div key={idx}>
          <CardNewsPage berita={item} />
        </div>
      );
    });
  };

  render() {
    if (this.state.reload) {
      this.getNews();
    }
    return (
      <>
        <div className='nav-scroller py-1 mb-1 border-bottom'>
          <nav
            className='nav d-flex flex-nowrap justify-content-between'
            style={{ overflow: 'auto' }}
          >
            {this.renderCategory()}
          </nav>
        </div>
        <div
          id='carouselExampleIndicators'
          className='carousel slide'
          data-ride='carousel'
        >
          <ol className='carousel-indicators mb-5'>
            <li
              data-target='#carouselExampleIndicators'
              data-slide-to='0'
              className='active'
            ></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
            <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
          </ol>
          <div className='carousel-inner'>{this.renderCarousel()}</div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon mb-5'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleIndicators'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon mb-5'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
        <CardNews
          berita={[this.state.newsDetails[3], this.state.newsDetails[4]]}
          kategori={this.state.selectedCategory}
        />
        <div className='row'>
          <div className='col-md-8'>{this.renderNews()}</div>
          <div className='col-md-4'>
            <CardInfoCorona />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
