import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardHeader, CardBody } from 'reactstrap'
import Datas from './../Components/Data'

const Details = () => {

    const { id } = useParams()

    const [ article, setArticle ] = useState({}) 

    useEffect(() =>{
        const clickData = Datas?.filter((data) => data?.id === id)
        setArticle(clickData)
    }, [id])

  return (
    <div>
       <Card>
          <CardHeader>
            <p>Created By: {article[0]?.name}</p>
          </CardHeader>
      

          <CardBody> 
            <marquee behavior="" direction="">{article[0]?.title} </marquee>
            {article[0]?.body}
          </CardBody>
       </Card>
    </div>
  )
}

export default Details