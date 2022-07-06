/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import Box from '../../components/common/Box';
import OnboardingImageStep01 from '../../assets/OnboardingStep01.png';
import OnboardingImageStep02 from '../../assets/OnboardingStep02.png';
import OnboardingImageStep03 from '../../assets/OnboardingStep03.png';
import Text from '../../components/common/Text';
import {Button} from '../../components/Button';
import Swiper from 'react-native-swiper';
const Step01 = () => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Box height={'60%'} width={'100%'} p={25}>
      <Image
        source={OnboardingImageStep01}
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />
    </Box>
    <Box>
      <Text
        fontSize="heading6"
        fontFamily="DMSans-Bold"
        textAlign="center"
        color="Neutral.800">
        Leading Payment {'\n'}Application
      </Text>
      <Box mt={12 * 1.4}>
        <Text
          fontSize="body"
          textAlign="center"
          color="Neutral.100"
          fontFamily="DMSans-Regular">
          More than 100 million users with 1,000 thousand {'\n'} partners and
          services in the world
        </Text>
      </Box>
    </Box>
  </Box>
);

const Step02 = () => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Box height={'60%'} width={'100%'} p={25}>
      <Image
        source={OnboardingImageStep02}
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />
    </Box>
    <Box>
      <Text
        fontSize="heading6"
        fontFamily="DMSans-Bold"
        textAlign="center"
        color="Neutral.800">
        Prestige and Absolute {'\n'} Security
      </Text>
      <Box mt={12 * 1.4}>
        <Text
          fontSize="body"
          textAlign="center"
          color="Neutral.100"
          fontFamily="DMSans-Regular">
          Licensed by all banks in the world & secured with {'\n'}
          multi-tier PCI-DSS international standards
        </Text>
      </Box>
    </Box>
  </Box>
);

const Step03 = () => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Box height={'60%'} width={'100%'} p={25}>
      <Image
        source={OnboardingImageStep03}
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />
    </Box>
    <Box>
      <Text
        fontSize="heading6"
        fontFamily="DMSans-Bold"
        textAlign="center"
        color="Neutral.800">
        Receive "Hot" Gifts from {'\n'}CaPay Right Away
      </Text>
      <Box mt={12 * 1.4}>
        <Text
          fontSize="body"
          textAlign="center"
          color="Neutral.100"
          fontFamily="DMSans-Regular">
          Sign up now to receive a large gift pack. Eating, {'\n'} watching
          movies & many other services.
        </Text>
      </Box>
    </Box>
  </Box>
);
const Onboarding = ({navigation}: any) => {
  const btnGetStarted = () => navigation.navigate('Login');
  return (
    <Box flex={1} p={10} bg="#fff" justifyContent="space-evenly">
      <Box height="80%">
        <Swiper
          contentContainerStyle={{
            flex: 1,
          }}
          activeDot={
            <Box
              mx={2}
              width={16 * 1.4}
              height={5 * 1.4}
              bg="Green.400"
              borderRadius="16"
            />
          }
          dot={
            <Box
              mx={2}
              width={8 * 1.4}
              height={5 * 1.4}
              bg="Neutral.30"
              borderRadius="16"
            />
          }>
          <Step01 />
          <Step02 />
          <Step03 />
        </Swiper>
      </Box>
      <Box px={35} pb={16} flex={1} justifyContent="flex-end">
        <Button onPress={btnGetStarted}>
          <Text
            color="Neutral.00"
            textAlign="center"
            fontSize="body"
            fontFamily="DMSans-Medium">
            Get Started
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Onboarding;
