'use client'
import { ModalProps } from "../../global/interface";
import './style.scss'
export default function Modal({url}: ModalProps){
    function extractYouTubeID(url: string): string | null {
        const regex = /[?&]v=([^&#]*)|youtu\.be\/([^&#]*)/;
        const matches = url.match(regex);
        return matches ? matches[1] || matches[2] : null;
    }
    return (
      <div className="content-video inset-y-0 fixed h-full w-full flex items-center justify-center left-0">
        {/* <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">Modal Title</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-gray-500">Modal Body</p>
            </div>
          </div>
        </div> */}
            <iframe src={`https://www.youtube.com/embed/${extractYouTubeID(url)}`} width="100%" height="500px" allowFullScreen></iframe>
      </div>
    );
  }
