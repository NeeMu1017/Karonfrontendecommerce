import React from 'react'
import {Carousel} from "react-material-ui-carousel"
import { sidewin } from './CategoryofElement'


const Slide = () => {
  return (
    <div>
        <Carousel>
            {
                sidewin.map((e)=>(
                    <div key={e.id}>
                        <img src={e.name} alt="" />
                    </div>
                ))
            }
        </Carousel>
    </div>
  )
}

export default Slide