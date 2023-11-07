import React from 'react'

import testImage from '../slides/Slide1.JPG'



const imagePath = "./../slides/"
    const imgPrefix = "Slide";
    const imgSuffix = ".jpg";
    let imageNum = 1;

    let imageName = imagePath + imgPrefix + imageNum + imgSuffix;

    function Images() {

    

    

    return (
           <img src={testImage}  className="slide" />
    
    );
}

export default Images