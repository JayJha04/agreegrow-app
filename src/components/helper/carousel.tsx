import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-multi-carousel/lib/styles.css';
import AgreegrowImageMagnifier from './agreegrowImageMagnifier';

const AgreegrowCarousel: React.FC = () => {
    return (
        <div className='container agreegrow-carousel-container'>
            <Carousel
                showArrows={false}
                width={500}
                dynamicHeight={true}
                renderThumbs={() => [<img src="../../Cold-Pressed-Groundnut-Oil.jpg" />, <img src="../../Cold-Pressed-Groundnut-Oil.jpg" />, <img src="../../Cold-Pressed-Groundnut-Oil.jpg" />, <img src="../../Cold-Pressed-Groundnut-Oil.jpg" />, <img src="../../Cold-Pressed-Groundnut-Oil.jpg" />, <img src="../../Cold-Pressed-Groundnut-Oil.jpg" />]}>
                <div>
                    <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' />
                </div>
                <div>
                    <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' />
                </div>
                <div>
                    <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' />
                </div>
                <div>
                    <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' />
                </div>
                <div>
                    <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' />
                </div>
                <div>
                    <AgreegrowImageMagnifier imageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' largeImageSrc='../../Cold-Pressed-Groundnut-Oil.jpg' />
                </div>
            </Carousel>
        </div>
    );
};

export default AgreegrowCarousel;
