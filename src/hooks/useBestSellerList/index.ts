import { useQuery } from 'react-query';
import { clientNYTimes } from '../../config/clientNYTimes';
import { Book } from '../../shared/apiSchema';

const BESTSELLERLIST_QUERY_KEY = 'best-seller';

async function getBestSellerList() {
  const { data } = await clientNYTimes.get('/overview.json');
  const bestSellerList = data.results.lists[0].books;

  return bestSellerList as Book[];
}

export function useBestSellerList() {
  return useQuery(BESTSELLERLIST_QUERY_KEY, getBestSellerList);
}
