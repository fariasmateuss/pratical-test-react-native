import { FontAwesome } from '@expo/vector-icons';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.IconWrapper>
        <FontAwesome name="user-circle-o" size={32} color="black" />
      </S.IconWrapper>
    </S.Container>
  );
}
