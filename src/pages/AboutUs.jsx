import React from 'react';
import { Parallax, ParallaxLayer} from 'react-spring'

const AboutUs = () => {
  return (
    <div>
      <div className='to-black'>
        <img src="../assets/images/greenbush.png" alt="duar" className='absolute'/>
        <h1 className='font-bold'>MISSION</h1>
        <p>Our mission is to serve great food while saving our users time and most importantly we want to serve delicious food effortlessly</p>
        {/* <Parallax pages={4}>

        </Parallax> */}

      </div>
    </div>
  );
}

export default AboutUs;
