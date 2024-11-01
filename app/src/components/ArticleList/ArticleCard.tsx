import React from "react";
import { Article } from "../../interfaces/Article";

const ArticleCard: React.FC<Article> = ({ image, title, date }) => (
  <div className="max-w-md overflow-hidden rounded-md bg-white shadow-md">
    <div className="relative">
      <img
        src={image}
        alt="Travel story"
        className="h-[30rem] w-full object-cover"
      />
      <div className="image-cover"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-center text-lg font-semibold">{title}</h3>
      </div>
    </div>
    <div className="px-4 py-10">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-md mb-4 py-8 text-gray-500">{date}</p>
      <a
        href="#"
        className="inline-flex items-center font-semibold text-red-500 hover:underline"
      >
        LANJUTKAN MEMBACA &rarr;
      </a>
    </div>
  </div>
);

export default ArticleCard;
