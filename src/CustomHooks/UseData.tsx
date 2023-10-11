import { useQuery } from "react-query";

function useData (url:string) {
    return useQuery('products' , () => {
        return fetch(url).then(res => res.json())
    })
}

export default useData