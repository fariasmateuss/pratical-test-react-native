import { useCallback } from 'react';

import { CategoryProps } from './types';
import * as S from './styles';
import { Text } from 'react-native';


export function Category({ name }: CategoryProps) {
  const randomColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    return `#${randomColor}`;
  }, [])
  
  return (
    <S.Container>
      <S.Color color={randomColor()} />
      <S.CategoryName as={Text} numberOfLines={2}>{name}</S.CategoryName>
    </S.Container>
  );
}
