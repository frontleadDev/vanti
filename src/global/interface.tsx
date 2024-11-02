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
}
export interface Hexagon {
    id: string;
    label: string;
}

export interface Screen {
    id: number;
    backgroundImage: string;
    hexagons: Hexagon[];
}

export interface Redes {
    screens: Screen[];
}
