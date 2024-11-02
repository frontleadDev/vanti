import { useState, useEffect } from 'react'
import { fetchRedes } from './callApi'
import type { Redes } from "@/global/interface";
import './style.scss'
export default function Redes() {
  const [data, setData] = useState<Redes | null>(null);
  const [showSecondView, setShowSecondView] = useState(false)
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetchRedes()
      setData(fetchData)
    }
    getData()
  }, [])
  const handleClick = () => {
    setShowSecondView(!showSecondView);
  };

  return (
    <div className='conatiner-redes' style={{ background: `url(${data?.screens[0].backgroundImage}) center/cover no-repeat` }}>
      {!showSecondView ?
        (<div className='conatiner-redes__general'>
          <ul className='conatiner-redes__general__items'>
            {data?.screens[0].hexagons.map((item, index)=>(
              <li key={index} className='conatiner-redes__general__items--item' id={`item--${index +1}`}>
                <div className='conatiner-redes__general__items--item__content-info content-info'>
                  <h4 className='conatiner-redes__general__items--item__content-info__title'>{item.label}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>)
        :
        (<div></div>)}
    </div>
  )
}