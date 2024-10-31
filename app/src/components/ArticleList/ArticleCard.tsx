import React from "react";
import { Article } from "../../interfaces/Article";

const ArticleCard: React.FC<Article> = ({
  image,
  title,
  description,
  date,
}) => (
  <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md">
    <div className="relative">
      <img
        src={image}
        alt="Travel story"
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <img
        src="/logo.png"
        alt="GetGoing Logo"
        className="absolute left-4 top-4 h-10 w-10"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mb-4 text-sm text-gray-500">{date}</p>
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
