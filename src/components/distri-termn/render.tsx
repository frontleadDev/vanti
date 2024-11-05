
import { DistritosData } from "../../global/interface";
import { useEffect, useState } from "react";
import { fetchDistritosData } from './callApi'
import Modal from '../../components/modal/Modal'
import './style.scss';
import Image from "next/image";

export default function DistriTermn() {
  const [data, setData] = useState<DistritosData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [urlLink, setUrlLink] = useState('')
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetchDistritosData();
      setData(fetchData)
    }
    getData();
  }, [])
  const functionModal =(url: string)=>{
    setIsVisible(!isVisible)
    setUrlLink(url)
  }
  return (
    <div>
      {data ? (
        <div className="container-distri-termns"
          style={{
            background: `url(${data.background_img}) center/cover no-repeat`
          }}
        >
          <div className={`container-distri-termns__content ${isVisible ? 'active-modal' :''}`}>
            <ul className="container-distri-termns__content__items">
              <h2 className="container-distri-termns__content__items--title font-[family-name:var(--font-geist-mulish)]">{data.title}</h2>
              <div className="container-distri-termns__content__items--subtitle">
                <Image
                  className="container-distri-termns__content__items--subtitle__img"
                  src={`${data.subtitle}`}
                  alt="Subtitle"
                  width={167}
                  height={70}
                  priority
                />
              </div>
              {data.sections.map((section, index) => (
                <li key={index} className="container-distri-termns__content__items--item" id={`item-${index + 1}`} onClick={()=>{functionModal(section.link)}}>
                    <div className="container-distri-termns__content__items--item__content__title">
                      <h4 className="container-distri-termns__content__items--item__title">{section.name}</h4>
                    </div>
                </li>
              ))}
              {isVisible && (
                <div className="container-modal"><Modal url={urlLink}/>
                  <button onClick={()=>{functionModal('')}} className="fixed button-close item">
                    <span className="inner">
                      <span className="label">Cerrar</span>
                    </span>
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      ) :
        (<div>Cargando....</div>)}
    </div>
  );
}
