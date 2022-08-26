import { TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function SearchBar() {
  const { colors } = useTheme()

  return (
    <S.Container>
      <TextInput placeholder="Qual livro você gostaria de ler hoje?" />
      <MaterialIcons name="search" size={24} color={colors.primary50} />
    </S.Container>
  );
}
