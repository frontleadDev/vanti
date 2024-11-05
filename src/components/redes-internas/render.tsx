import { useState, useEffect } from 'react'
import Modal from '../../components/modal/Modal'
import { fetchRedes } from './callApi'
import type { Redes } from "@/global/interface";
import './style.scss'
export default function Redes() {
  const [data, setData] = useState<Redes | null>(null);
  const [showSecondView, setShowSecondView] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePdf, setIsVisiblePdf] = useState(false);
  const [urlLink, setUrlLink] = useState('')
  const [urlLinkPdf, setUrlLinkPdf] = useState('')

  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetchRedes()
      setData(fetchData)
    }
    getData()
  }, [])

  const functionModal = (url: string) => {
    if (url && url !== 'second-view') {
      setIsVisible(!isVisible)
      setUrlLink(url)
    }
  }
  const funcionModalPdf = (url: string)=>{
        setUrlLinkPdf(url);
        setIsVisiblePdf(!isVisiblePdf);
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
            <div className="container-modal"><Modal url={urlLink} isVisible={false}/>
              <button onClick={() => { setIsVisible(!isVisible)}} className="fixed button-close item">
                <span className="inner">
                  <span className="label">Cerrar</span>
                </span>
              </button>
            </div>
          )}
          {isVisiblePdf && (
            <div className="container-modal"><Modal url={urlLinkPdf} isVisible={true}/>
              <button onClick={() => { setIsVisiblePdf(!isVisiblePdf) }} className="fixed button-close item">
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
              key={index}
              onClick={() => item.link_pdf && funcionModalPdf(item.link_pdf)}
            >
              <div className='conatiner-redes__general__items--item__content-info content-info'>
                <h4 className='conatiner-redes__general__items--item__content-info__title'>{item.label.split('/').map((part, idx)=>(
                  <span key={idx} className={`span--${idx+1}`}>{part}</span>
                ))}</h4>
              </div>
            </li>
          ))}
          {isVisiblePdf &&(<Modal url={urlLinkPdf} isVisible={isVisiblePdf}/>)}
        </ul>
        {showSecondView && (<button className='conatiner-redes__general__button' onClick={renderTwo}></button>)}
      </div>
    </div>
  )
}