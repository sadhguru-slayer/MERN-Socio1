import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../client'
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { feedQuery, searchQuery } from '../utils/data';
const Feed = () => {
    const [loading, setLoading] = useState(false);
    const [pins,setPins] = useState(null);
    const {categoryId} = useParams();

    useEffect(() => {
      setLoading(true)
      
      if(categoryId){
      setLoading(false)

      const query = searchQuery(categoryId);
      
      client.fetch(query).then((data) =>{
        setPins(data);
      })
      }
      else{

        client.fetch(feedQuery).then((data)=>{
          setPins(data)
        });
      }
    }, [categoryId])
    

if(loading){
 return <Spinner message = "We are workin..If the feed is'nt working Relode the page"/>
}
else{
  return (
    <div>
      {pins && <MasonryLayout pins = {pins}/>}
    </div>
  );
}
}

export default Feed