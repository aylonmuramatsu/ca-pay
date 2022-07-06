import React from 'react';
import styled from 'styled-components/native';
import {layout, space} from 'styled-system';

export const Button = styled.TouchableOpacity`
  ${layout}
  ${space}
  border-radius: 21px;
  background-color: ${({theme}: any) => theme.colors.Green[400]};
  padding: 16.8px;
`;
