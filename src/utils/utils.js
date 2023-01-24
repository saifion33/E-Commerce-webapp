const API_BASE_URL ='https://dummyjson.com/'
export const fetchData = async(queryString) => {
    const response = await fetch(`${API_BASE_URL}${queryString}`).then(response.json());
    return response
}