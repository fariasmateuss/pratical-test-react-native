import { capitalize } from '../../utils/capitalize';
import { Book as BookProps } from '../../shared/types/apiSchema'
import { Rating } from '../Rating';

import * as S from './styles';

export function BookItem({ author, book_image, title }: BookProps) {
  return (
    <S.Container>
      <S.BookImage source={{ uri: book_image }} />
      <S.BookTitle numberOfLines={1}>
        {capitalize(title.toLowerCase())}
      </S.BookTitle>
      <S.BookAuthor numberOfLines={1}>{author}</S.BookAuthor>
      <Rating />
    </S.Container>
  );
}
