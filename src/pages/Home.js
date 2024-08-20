import React, { useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

const data = [
    {
        img : "/images/perfume.jpeg"
    },
    {
        img : "/images/watch.jfif"
    },
    {
        img : "/images/bag.jfif"
    }
]
const Home = () => {

    const navigate = useNavigate()

    const buyerToken = localStorage.getItem("buyerToken")
    useEffect(()=>{
        if(!buyerToken){
            navigate("/login")
        }
    })
  return (
    <Carousel>

        {
        
            data.map((car)=>(
                <div>
                <img src = {car.img}  />
                </div>
            ))
        }

</Carousel>
  )
}

export default Home