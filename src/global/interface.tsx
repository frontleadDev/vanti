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

export interface ModalProps{
    url:string;
}