import queryString from "query-string";
import { useLocation, useParams } from "react-router-dom"

export default function About(props){
    const location = useLocation();
    // console.log(useLocation.search)
    const name = location.search;
    // console.log(name)

    const obj =new URLSearchParams();
    // console.log(obj)
    const query = queryString.parse(name)
    // console.log(query)
    // console.log(obj.get("name"))
    return <p>
    쿼리 스트링: <b>{query.name}</b>
  </p>
}