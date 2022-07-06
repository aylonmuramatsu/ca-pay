import React from 'react';
import Box from '../../components/common/Box';
import Text from '../../components/common/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from 'react-native';
import Logo from '../../assets/logo.png';

const Login = () => {
  return (
    <Box flex={1} bg="Green.50">
      <Box
        pt={16}
        px={49}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Icon name="times" size={30} />
        <Text fontSize={19.6} fontFamily="DMSans-Regular">
          Login Screen
        </Text>
      </Box>

      <Box flex={1} bg={'Neutral.00'} mt={100.8} borderRadius={42}>
        <Box
          style={{
            top: -60,
          }}
          position="absolute"
          width={130}
          height={130}
          bg="#79F2C0"
          border={10}
          borderColor="Neutral.00"
          borderRadius={130}
          alignItems="center"
          alignSelf="center">
          <Image
            source={Logo}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="cover"
          />
        </Box>
        <Box mt={160}>
          <Text
            fontFamily="DMSans-Bold"
            fontSize="heading6"
            color="Neutral.800"
            textAlign="center">
            Let’s Sign You In
          </Text>
          <Text
            mt={2}
            fontFamily="DMSans-Regular"
            fontSize="body"
            color="Neutral.100"
            textAlign="center">
            Welcome back, you’ve been missed!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
