import React from "react";
import { FaCalendarAlt, FaUserFriends, FaBus, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";

const PrivateTrip: React.FC = () => {
  return (
    <section className="container flex flex-col gap-8 lg:flex-row">
      <div className="flex flex-col justify-between space-y-4 lg:w-1/2">
        <div className="w-1/2">
          <h2 className="text-lg font-bold uppercase text-red-500">
            Private Trip
          </h2>
          <h3 className="text-2xl font-bold">
            Berangkat <span className="text-red-500">Kapan Saja</span> Semaumu
          </h3>
        </div>
        <ul className="grid grid-cols-2 gap-6 space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle className="text-red-600" />
            Tentukan tanggal keberangkatan sesukamu
          </li>
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle />
            Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan
          </li>
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle />
            Tidak ada kuota minimum, jadi pasti berangkat
          </li>
          <li className="flex items-center gap-2">
            <IoIosCheckmarkCircle />
            Liburan jadi lebih exclusive untuk kamu dan keluarga
          </li>
        </ul>
      </div>

      <div className="feature-container grid grid-cols-2 gap-4 bg-gradient-to-r from-red-600 to-orange-400 p-14 text-white lg:w-1/2">
        <FeatureCard
          icon={<RiCustomerService2Fill className="text-5xl" />}
          title="Konsultasi GRATIS"
          description="Curhatin aja semuanya!"
        />
        <FeatureCard
          icon={<FaLocationDot className="text-5xl" />}
          title="Local Guide"
          description="Biar ada temen!"
        />
        <FeatureCard
          icon={<FaBus className="text-5xl" />}
          title="Transportasi"
          description="Bebas pilih transportasi apa"
        />
        <FeatureCard
          icon={<FaStar className="text-5xl" />}
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
    <div className="flex flex-col rounded-xl bg-white bg-opacity-20 px-4 py-8 text-center">
      <div className="mr-6">
        <div className="mb-2">{icon}</div>
      </div>
      <div className="flex flex-1 flex-col items-start">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
};

export default PrivateTrip;
