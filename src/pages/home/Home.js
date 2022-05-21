import React from 'react'
import './home.css'
import movieImg from '../../assests/film-thumb.png'
import Card from '../../components/cards'
function Home() {

    const movie =[
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
        {
            img:{movieImg},
            title:"Name",
            dist:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. "
        },
    ]

  return (
    <div className='homepage'>
        <div className="head p-4">
            <h1 className='mx-1'>SAM AWAY</h1>
            <div className="detail col-4">
                <ul className='d-flex align-items-center p-0'>
                    <li className='mx-2 br' >Adventure Fantacy </li>
                    <li className='mx-2 br' >2019</li>
                    <li className='mx-2' > 136 min</li>
                </ul>
                <p className='mx-2 intro'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestias eos tempora labore totam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, nesciunt.</p>
                <div className="about mx-2">
                    <p className='p-0 m-0'>Director: Todd Burns</p>
                    <p className='p-0 m-0'>Cast: Jonny Loifer , Sarah Obrien</p>
                </div>
            </div>
            <div className="homebtn mx-2 my-5">
                <button> <i class="fa-solid fa-play mx-2"></i> Watch Now</button>
            </div>
        </div>
        <div className="recommend m-4">
            <h3 className="py-2" >Recently Added Films</h3>
            <div className="filmCards d-flex justify-content-start align-items-start flex-wrap">
                {movie.map((data, index)=>{
                    console.log(data)
                    return(
                        <Card img = {data.img}/>
                    )
                })}
            </div>
        </div>
        <div className="recommend m-4">
            <h3 className="py-2" >Top Rated Films</h3>
            <div className="filmCards d-flex justify-content-start align-items-start flex-wrap">
                {movie.map((data, index)=>{
                    console.log(data)
                    return(
                        <Card img = {data.img}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home