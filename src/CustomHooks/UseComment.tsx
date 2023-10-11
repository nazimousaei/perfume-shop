import { useQuery } from "react-query";

function useComments () {
    return useQuery('comments' , () => {
        return fetch('http://localhost:3000/comments').then(res => res.json())
    })
}

export default useComments