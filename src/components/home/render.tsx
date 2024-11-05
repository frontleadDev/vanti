'use client'

import { fetchHome } from "./callApi";
import { Home } from "../../global/interface";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import './style.scss';
export default function HomeR(){
    const [data, setData] = useState<Home |null>(null)
    useEffect(() => {
        const getData = async () => {
          const fetchData = await fetchHome()
          setData(fetchData)
        }
        getData()
      }, [])
    return(
        <div className="container-home" style={{background: `url(${data?.background_img}) center/cover no-repeat`}}>
            <div className="container-home__logo">
            <Image
                  className="container-distri-termns__content__items--subtitle__img"
                  src='/img/logo_vanti.svg'
                  alt="Logo"
                  width={167}
                  height={70}
                  priority
                />
            </div>
            <div className="container-home__buttons">
                <Link href={data?.link1.url || ''}>{data?.link1.title}</Link>
                <Link href={data?.link2.url || ''}>{data?.link2.title}</Link>
            </div>
            {/* <iframe src="/pdf/multimedia-1.pdf" height="200" width="300" title="Iframe Example"></iframe> */}
        </div>
    )
}