import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data);

export const useFetch = query => {
  const { data, error } = useSWR(
		`${process.env.REACT_APP_API_URL}/api/${query}`,
		fetcher
	)

  return {
    data,
    error
  }
}

export default useFetch