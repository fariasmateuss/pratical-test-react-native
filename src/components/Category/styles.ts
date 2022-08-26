import { Text, View } from 'react-native';
import styled from 'styled-components';

import { ColorProps } from './types';

export const Container = styled(View)`
  margin-right: 12px;
  margin-bottom: 4px;
  margin-top: 16px;
`;

export const Color = styled(View)<ColorProps>`
  background-color: ${({ color }) => color};
  height: 74px;
  width: 74px;
  border-radius: 4px;
`;

export const CategoryName = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.primary100};
  width: 74px;
`;
