import React from 'react';
import { View, Image } from 'react-native';

import landingImg from '../../assets/images/landing.png';

function Landing() {
  return (
    <View>
      <Image source={landingImg} />
    </View>
  );
}

export default Landing;