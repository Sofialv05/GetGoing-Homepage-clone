import React from "react";
import { Article } from "../../interfaces/Article";
import ArticleCard from "./ArticleCard";

const articles: Article[] = [
  {
    id: 1,
    image: "https://example.com/image1.jpg",
    title: "Cerita Perjalanan Bersama GetGoing dari Kak Meta",
    description: "Cerita Perjalanan Bersama GetGoing dari Kak Meta",
    date: "25 Jul 2024",
  },
  {
    id: 2,
    image: "https://example.com/image2.jpg",
    title: "Mengungkap Sejarah dan Keajaiban Christmas Market di Seluruh Dunia",
    description:
      "Mengungkap Sejarah dan Keajaiban Christmas Market di Seluruh Dunia",
    date: "18 Des 2023",
  },
  {
    id: 3,
    image: "https://example.com/image3.jpg",
    title:
      "Keindahan Anggur di Weingut Anselmann Menjadi Sebuah Pengalaman Mempesona",
    description:
      "Keindahan Anggur di Weingut Anselmann Menjadi Sebuah Pengalaman Mempesona",
    date: "18 Mar 2024",
  },
];

const ArticleList: React.FC = () => (
  <section className="p-8">
    <h2 className="mb-6 text-2xl font-bold">Baca Juga</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
    <div className="mt-6 flex justify-center">
      <a href="#" className="font-semibold text-red-500 hover:underline">
        Lihat Semua Artikel &rarr;
      </a>
    </div>
  </section>
);

export default ArticleList;
