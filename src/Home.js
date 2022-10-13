import React from 'react'
import Products from './Products';
import './Home.css';
import { Carousel } from 'react-bootstrap/Carousel';

//import Slideshow from './slideshow';

const Home = () => {
    return (
        <div>
             <div id="carouselExampleIndicators" class="carousel slide" 
             data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="0" class="active" aria-current="true" 
                    aria-label="Slide 1"></button>
                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="1" 
                    aria-label="Slide 2"></button>
                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="2" 
                    aria-label="Slide 3"></button>
                    <button type="button" 
                    data-bs-target="#carouselExampleIndicators" 
                    data-bs-slide-to="3" 
                    aria-label="Slide 4"></button>
                  </div>
                  <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="https://www.iwmbuzz.com/wp-content/uploads/2020/06/is-alia-bhatt-the-new-queen-of-bollywood.jpg" 
                      class="d-block w-100" alt="alia" height="650px"/>
                      <div class="carousel-caption">
                      <h3>Best Look Anywhere</h3>
                      <p>Find your style with The Fashion Club.</p>
                      </div>
                    </div>
                  <div class="carousel-item">
                      <img src="https://www.itl.cat/pngfile/big/310-3103646_hrithik-roshan-awesome-hd-wallpaper-best-quote-of.jpg" 
                      class="d-block w-100" alt="hritik" height="650px"/>
                      <div class="carousel-caption">
                      <h3>Dressed To be Noticed</h3>
                      <p>Make Your Fashion Look More Charming.</p>
                      </div>
                    </div>
                  <div class="carousel-item">
                      <img src="https://free4kwallpapers.com/uploads/originals/2015/12/09/priyanka-chopra-2015-wallpaper.jpg" 
                      class="d-block w-100" alt="priyanka" height="650px"/>
                      <div class="carousel-caption">
                      <h3>Fresh Look</h3>
                      <p>Discover The New Florel Inspired Collection.</p>
                      </div>
                    </div>
                  <div class="carousel-item">
                      <img src="https://www.filmibeat.com/wimgm/1366x70/desktop/2019/08/kartik-aaryan_10.jpg" 
                      class="d-block w-100" alt="barun" height="650px"/>
                      <div class="carousel-caption">
                      <h3>Better When It's on You</h3>
                      <p>We Provide Cloths More Than Just Stiched Fabric.</p>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                    <button class="carousel-control-prev" type="button" 
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" 
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>  
                  <Products /> 
              </div>
    )
}

export default Home;





{/*import React from 'react';
import './Home.css';
import Products from './Products';
//import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div class='hero'>
        <div class="card">
    <img src="https://www.iwmbuzz.com/wp-content/uploads/2020/06/is-alia-bhatt-the-new-queen-of-bollywood.jpg" class="card-img" alt="" height="600px"  />
    <div class="card-img-overlay">
    <div class='container'>    
    <h5 class="card-title">Best Look <br/> Anywhere</h5>
    
    
  </div>
  </div>
  </div>
    <Products />
  </div>
  );
};
https://free4kwallpapers.com/uploads/originals/2015/12/09/priyanka-chopra-2015-wallpaper.jpg
https://starsunfolded.co/wp-content/uploads/2021/11/Genelia-DSouza-1.jpg
export default Home;*/}