import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import * as S from './styles';

export function Rating() {
  const { colors } = useTheme()

  return (
    <S.Container>
      <Entypo name="star" size={10} color={colors.secondary100} />
      <Entypo name="star" size={10} color={colors.secondary100} />
      <Entypo name="star" size={10} color={colors.secondary100} />
      <Entypo name="star" size={10} color={colors.secondary100} />
      <Entypo name="star" size={10} color={colors.secondary100} />
    </S.Container>
  );
}
