import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  padding: 16px;
`;

export const ScrollableContainer = styled(ScrollView)`
  height: 584px;
`;

export const SectionTitle = styled(Text)`
  margin-top: 32px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title900};
`;
