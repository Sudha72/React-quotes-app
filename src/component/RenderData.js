import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Card from './Card';

function RenderData(props) {

const [ data , setData] = useState([]);
const [loading, SetLoading]=useState(true);


useEffect(()=>{
    if(props.text===""){
    axios.get("https:testapi-qsha.onrender.com").then(response=> {
        setData(response.data);
        SetLoading(false);
        console.log(response.data);
    })
    }
    else
    {
        axios.get(`https:testapi-qsha.onrender.com/${props.text}`).then(response=> {
            setData(response.data);
            SetLoading(false);
            console.log(response.data);
        })
    }

},[props.text])


if(loading){
    return <div className='Loading'> Loading ... </div>
}

  return (
    <div className='container'>
        {data.map((ele)=>{
           return <Card key={ele._id} author={ele.author} quote={ele.quote}/>
        })}
    </div>
  )
}


export default RenderData;