import axios from 'axios'

export const fetchData = () => {
	// 发异步请求
	return axios.get('/').then(res => res.data)
}