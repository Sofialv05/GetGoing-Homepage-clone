import React from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white px-8 py-12 lg:px-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">
          Kata <span className="text-red-500">Mereka</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Cerita dari mereka yang telah menjelajahi Eropa bersama kami
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <div className="space-y-4 p-6 text-gray-800 lg:w-2/3">
          <FaQuoteLeft className="text-6xl text-gray-200" />
          <h3 className="text-xl font-bold">
            Keluar negeri pertama kali tanpa rasa khawatir
          </h3>
          <p className="text-gray-700">
            GetGoing bikin liburan keluar negeri tanpa rasa khawatir dan
            benar-benar kerasa kayak cuma punya kami berdua. Apalagi ada
            aplikasinya juga yang bisa dipakai untuk mengeksplor kata dengan
            informasinya yang cukup lengkap. Bintang 5 pokoknya.
          </p>

          <div className="mt-6 flex space-x-4">
            <button className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200">
              <FaChevronLeft />
            </button>
            <button className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right - User Card */}
        <div className="flex space-x-4 lg:w-1/3">
          <UserCard
            imageUrl="https://example.com/image1.jpg"
            name="Herlika & Johan"
            role="Entrepreneur"
          />
          <UserCard
            imageUrl="https://example.com/image2.jpg"
            name="Tania"
            role="Traveler"
          />
        </div>
      </div>
    </section>
  );
};

interface UserCardProps {
  imageUrl: string;
  name: string;
  role: string;
}

const UserCard: React.FC<UserCardProps> = ({ imageUrl, name, role }) => {
  return (
    <div className="flex h-48 w-40 flex-col items-center justify-between rounded-lg bg-white p-4 shadow-lg">
      <img
        src={imageUrl}
        alt={name}
        className="h-28 w-full rounded-lg object-cover"
      />
      <div className="text-center">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Testimonials;
