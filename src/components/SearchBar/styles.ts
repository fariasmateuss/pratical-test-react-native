import { View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary20};
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;
`;
