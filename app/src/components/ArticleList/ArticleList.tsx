import React from "react";
import { Article } from "../../interfaces/Article";
import ArticleCard from "./ArticleCard";

const articles: Article[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Cerita Perjalanan Bersama GetGoing dari Kak Meta",
    date: "25 Jul 2024",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522199873717-bc67b1a5e32b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Mengungkap Sejarah dan Keajaiban Christmas Market di Seluruh Dunia",

    date: "18 Des 2023",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    title:
      "Keindahan Anggur di Weingut Anselmann Menjadi Sebuah Pengalaman Mempesona",
    date: "18 Mar 2024",
  },
];

const ArticleList: React.FC = () => (
  <section className="container">
    <div className="">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Baca Juga</h2>
        <div className="flex justify-center">
          <a href="#" className="font-semibold text-red-500 hover:underline">
            Lihat Semua Artikel &rarr;
          </a>
        </div>
      </div>
      <div className="my-10 flex justify-between">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  </section>
);

export default ArticleList;
