import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url, params) => axios.post(url, params).then(res => res.data);

export const usePost = (url, params) => {
  const { data, error } = useSWR(
		`${process.env.REACT_APP_API_URL}/api/${url}`,
		fetcher,
    params
	)

  return {
    data,
    error
  }
}

export default usePost