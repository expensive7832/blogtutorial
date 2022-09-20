import React, { useState, useEffect} from 'react'
import Header from '../Components/Header'
import Slider from 'react-slick'
import img1 from "./../assets/house2.jpg"
import img2 from "./../assets/house5.jpg"
import { Card, CardHeader, CardBody, NavLink } from 'reactstrap'
import Datas from "./../Components/Data"



function Home() {


//const getData = async() =>{
//  try {
//    await Datas?.map((data) =>{
//      console.log(data)
//    })
//  } catch (err) {
//    console.log(err)
//  }
//}
//
//useEffect(() =>{
// getData()
//}, [Datas])

  return (
  <div>
    <Header/>
    <section className='banner'>
      <Slider dots={true}>
      <img src={img1} alt="banner" />
      <img src={img2} alt="banner" />
 
      </Slider>
    </section>

    <section className="article">
      <Card>
        <CardHeader bg-secondary>
            <p className="text-center">LASOP CLASS</p>
        </CardHeader>

        <CardBody className='text-center'>
        {Datas?.map((data) => (
          <NavLink href={`/details/${data?.id}`} key={data?.id} className='text-underline fw-bold text-primary'>{data?.title?.length > 30 ? `${data?.title?.slice(0, 30)}.....` : data?.title}</NavLink>
        ))} 
        </CardBody>
      </Card>
    </section>
  </div>
  )
}

export default Home