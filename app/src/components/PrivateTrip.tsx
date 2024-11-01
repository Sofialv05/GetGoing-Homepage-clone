import React from "react";
import { FaCalendarAlt, FaUserFriends, FaBus, FaStar } from "react-icons/fa";

const PrivateTrip: React.FC = () => {
  return (
    <section className="container flex flex-col gap-8 lg:flex-row lg:items-center">
      {/* Left Section */}
      <div className="space-y-4 lg:w-1/2">
        <h2 className="text-lg font-bold uppercase text-red-500">
          Private Trip
        </h2>
        <h3 className="text-2xl font-bold">
          Berangkat <span className="text-red-500">Kapan Saja</span> Semaumu
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            Tentukan tanggal keberangkatan sesukamu
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            Tidak ada kuota minimum, jadi pasti berangkat
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">✔</span>
            Liburan jadi lebih exclusive untuk kamu dan keluarga
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-4 rounded-lg bg-gradient-to-r from-red-500 to-orange-400 p-6 text-white lg:w-1/2">
        <FeatureCard
          icon={<FaCalendarAlt className="text-2xl" />}
          title="Konsultasi GRATIS"
          description="Curhatin aja semuanya!"
        />
        <FeatureCard
          icon={<FaUserFriends className="text-2xl" />}
          title="Local Guide"
          description="Biar ada temen!"
        />
        <FeatureCard
          icon={<FaBus className="text-2xl" />}
          title="Transportasi"
          description="Bebas pilih transportasi apa"
        />
        <FeatureCard
          icon={<FaStar className="text-2xl" />}
          title="Lengkap Pokoknya"
          description="Hotel, Asuransi, Visa, Wifi dll"
        />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white bg-opacity-20 p-4 text-center">
      <div className="mb-2">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default PrivateTrip;
