import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: URL('https://www.filmibeat.com/ph-big/2018/07/barun-sobti_153129118720.jpg'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image: URL('https://pbs.twimg.com/media/CyHWCjIVEAAgcAT.jpg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image: URL('https://i.pinimg.com/originals/c6/24/e6/c624e6df60a21d1f3fbd72050997ba15.jpg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;