import Image from "next/image"
import './style.scss'
export default function Header(){
    return(
        <header className="header header-container" id="header">
            <div className="header header-container__logo">
                <Image
                  className="container-distri-termns__content__items--subtitle__img"
                  src='/img/logo_vanti.svg'
                  alt="Subtitle"
                  width={167}
                  height={70}
                  priority
                />
            </div>
        </header>
    )
}