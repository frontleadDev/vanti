'use client'
import { ModalProps } from "../../global/interface";
import './style.scss'
export default function Modal({url, isVisible = false}: ModalProps){
    function extractYouTubeID(url: string): string | null {
        const regex = /[?&]v=([^&#]*)|youtu\.be\/([^&#]*)/;
        const matches = url.match(regex);
        return matches ? matches[1] || matches[2] : null;
    }
    return (
      <div className="content-video inset-y-0 fixed h-full w-full flex items-center justify-center left-0">
        {isVisible == true ? 
          <iframe src={`${url}`} width="100%" height="100%" allowFullScreen></iframe>
          : 
          <iframe src={`https://www.youtube.com/embed/${extractYouTubeID(url)}`} width="100%" height="500px" allowFullScreen></iframe>
          }
      </div>
    );
  }
