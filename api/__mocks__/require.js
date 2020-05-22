export const fetchData = () => {
	// 做假请求
	return new Promise((resolved, reject) => {
		resolved("(function(){return '123'})()")
	})
}