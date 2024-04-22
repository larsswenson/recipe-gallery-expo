import React, { useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import carbonara from './carbonara.jpg';
import lentils from './lentils.jpg';
import crepes from './crepes.jpg';

const images = [
    { id: 1, url: carbonara, description: 'Spaghetti Carbonara: Spaghetti, Parmesano Reggiano, Egg, Pancetta, Garlic, Olive Oil, Black Pepper' },
    { id: 2, url: lentils, description: 'Lentil Soup: Lentils, Chicken Broth, Diced Tomatoes, Onion, Garlic, Celery, Carrot, Olive Oil' },
    { id: 3, url: crepes, description: 'Crepes: Flour, Egg, Milk, Butter, Lemon Zest' },
  ];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const navigatePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 300, height: 300 }}
        source={images[currentIndex].url}
      />
      <Text>{images[currentIndex].description}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Previous" onPress={navigatePrevious} />
        <Button title="Next" onPress={navigateNext} />
      </View>
    </View>
  );
};

export default Gallery;
