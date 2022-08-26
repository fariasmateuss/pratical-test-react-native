import { useQuery } from 'react-query';
import { clientNYTimes } from '../../config/clientNYTimes';
import { Category } from '../../shared/apiSchema';

const CATEGORIES_QUERY_KEY = 'categories';

async function getCategories() {
  const { data } = await clientNYTimes.get('/names.json');
  const categories = data.results;

  return categories as Category[];
}

export function useCategories() {
  return useQuery(CATEGORIES_QUERY_KEY, getCategories);
}
