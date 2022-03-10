import Image from 'next/image'
import { bgWrap, bgText, bgBlur, link1, link2, Description, noDisplay } from '../styles/styles.module.css'
import {useState} from 'react'

const teste = false
const Background = () => {
  const [blur, setBlur] = useState(false)
  setTimeout( ()=>{
    setBlur(true)
  },3000)
  return (
  <div>
    <div className={blur?bgBlur:bgWrap} >
      <Image
        alt="Tomorrowedance"
        src="/tomorrowImg.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
 
    </div>
         <p className={blur?Description:noDisplay}>
      Tomorrow We Dance first event will take place on an abandoned garage, with outstanding scenography and incredible line up with both national and international guest's from d-edge, dance different and afterlife. 19.03.2022. São Paulo, Brasil
      </p>
    <a className={blur?link1:noDisplay} href="https://www.eventbrite.com/e/tomorrowedance-19032022-tickets-293538851607">Tickets</a>
    <a className={blur?link2:noDisplay} href="https://www.instagram.com/tomorrowedance/">Instagram</a>

  </div>
)
}

export default Background