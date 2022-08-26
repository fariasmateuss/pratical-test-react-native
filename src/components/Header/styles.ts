import { SafeAreaView, View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 104px;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.title900};
  margin-left: 12px;
`;

export const IconWrapper = styled(View)`
  margin-right: 4px;
`;
