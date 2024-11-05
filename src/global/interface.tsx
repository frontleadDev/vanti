export interface Section {
    name: string;
    link: string;
}

export interface DistritosData {
    background_img: string;
    title: string;
    subtitle: string;
    sections: Section[];
}

export interface ModalProps {
    url: string;
    isVisible?: boolean; 
}
export interface Hexagon {
    id: string;
    label: string;
    link?: string;
    link_pdf?: string;
}

export interface Screen {
    id: number;
    backgroundImage: string;
    hexagons: Hexagon[];
}

export interface Redes {
    screens: Screen[];
}

export interface Home_link {
    url: string;
    title: string;
  }
  
 export interface Home {
    logo: string;
    background_img: string;
    link1: Home_link;
    link2: Home_link;
  }
  