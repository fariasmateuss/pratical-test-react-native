import { useQuery } from 'react-query';
import { clientNYTimes } from '../../config/clientNYTimes';
import { Book } from '../../shared/apiSchema';

const RECOMMENDEDBOOKS_QUERY_KEY = 'recommended';

async function getRecommendedBooks() {
  const { data } = await clientNYTimes.get('/overview.json');
  const recommendedBooks = data.results.lists[1].books;

  return recommendedBooks as Book[];
}

export function useRecommendedBooks() {
  return useQuery(RECOMMENDEDBOOKS_QUERY_KEY, getRecommendedBooks);
}
