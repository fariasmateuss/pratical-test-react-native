import { FlatList } from 'react-native';

import { BookItem } from '../../components/Book';
import { Header } from '../../components/Header';
import { SearchBar } from '../../components/SearchBar';
import { Category } from '../../components/Category';
import { useBestSellerList } from '../../hooks/useBestSellerList';
import { useRecommendedBooks } from '../../hooks/useRecommendedBooks';
import { useCategories } from '../../hooks/useCategories';

import * as S from './styles';

export function Bookshelf() {
  const { data: bestSellerList } = useBestSellerList();
  const { data: recommendedBooks } = useRecommendedBooks();
  const { data: categories } = useCategories();

  return (
    <S.Container>
      <Header />
      <S.ScrollableContainer >
        <SearchBar />
        <S.SectionTitle>Para Você</S.SectionTitle>
        <FlatList
          data={recommendedBooks}
          keyExtractor={(recommendedBooks) => recommendedBooks.title}
          renderItem={(recommendedBooks) => (
            <BookItem
              author={recommendedBooks.item.author}
              book_image={recommendedBooks.item.book_image}
              title={recommendedBooks.item.title}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <S.SectionTitle>Categorias</S.SectionTitle>
        <FlatList
          data={categories}
          keyExtractor={(category) => category.list_name_encoded}
          renderItem={(category) => (
            <Category name={category.item.display_name} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <S.SectionTitle>Os mais lidos da semana</S.SectionTitle>
        <FlatList
          data={bestSellerList}
          keyExtractor={() => Math.random().toString()}
          renderItem={(bestSellerList) => (
            <BookItem
              author={bestSellerList.item.author}
              book_image={bestSellerList.item.book_image}
              title={bestSellerList.item.title}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </S.ScrollableContainer>
    </S.Container>
  );
}
