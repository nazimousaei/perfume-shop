import { useQuery } from "react-query";

function useInfoProduct (id:string) {
    return useQuery(['infoProduct' , id] , () => {
        return fetch(`http://localhost:3000/productInfo/${id}`).then(res => res.json())
    })
}

export default useInfoProduct