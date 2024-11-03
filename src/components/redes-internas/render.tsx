import { useState, useEffect } from 'react'
import Modal from '../../components/modal/Modal'
import { fetchRedes } from './callApi'
import type { Redes } from "@/global/interface";
import './style.scss'
export default function Redes() {
  const [data, setData] = useState<Redes | null>(null);
  const [showSecondView, setShowSecondView] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [urlLink, setUrlLink] = useState('')

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
  const functionModal = (url: string) => {
    if (url !== 'second-view') {
      setIsVisible(!isVisible)
      setUrlLink(url)
    }
  }
  const renderTwo = () => {
    setShowSecondView(!showSecondView)
  }
  return (
    <div className='conatiner-redes' style={{ background: `url(${data?.screens[0].backgroundImage}) center/cover no-repeat` }}>
      <div className='conatiner-redes__general'>
        <ul className={`conatiner-redes__general__items ${showSecondView ? 'second-view' : ''}`}>
          {data?.screens[0].hexagons.map((item, index) => (
            <li
              key={index}
              className={`conatiner-redes__general__items--item ${item.id == 'flujogramas' ? 'flujogramas' : ''}`}
              id={`item--${index + 1}`}
              onClick={() => item.id == 'flujogramas' ? renderTwo() : functionModal(item.link ?? '')}
            >
              <div className='conatiner-redes__general__items--item__content-info content-info'>
                <h4 className='conatiner-redes__general__items--item__content-info__title'>{item.label}</h4>
              </div>
            </li>
          ))}
          {isVisible && (
            <div className="container-modal"><Modal url={urlLink} />
              <button onClick={() => { functionModal('close') }} className="fixed button-close item">
                <span className="inner">
                  <span className="label">Cerrar</span>
                </span>
              </button>
            </div>
          )}
          {data?.screens[1].hexagons.map((item, index) => (
            <li
              className='conatiner-redes__general__items--item second-list'
              id={`second-list-item--${index + 1}`}
            >
              <a href={item.link_pdf}></a>
              <div className='conatiner-redes__general__items--item__content-info content-info'>
                <h4 className='conatiner-redes__general__items--item__content-info__title'>{item.label.split('/').map((part, idx)=>(
                  <span key={idx} className={`span--${idx+1}`}>{part}</span>
                ))}</h4>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul className={`conatiner-redes__general__items second-list ${showSecondView ? 'active' : ''}`}>

        </ul> */}

      </div>
    </div>
  )
}