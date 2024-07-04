import videoplayer from "../assets/video-player.svg";

import React, { useState } from "react";

export default function VideoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-start min-h-20 mt-10">
      <button
        onClick={openModal}
        className="text-customTeal font-bold py-2 rounded justify-start 
        flex items-center space-x-2"
      >
        <img src={videoplayer} alt="video player" width={60} />
        <p>WATCH THE VIDEO</p>
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
