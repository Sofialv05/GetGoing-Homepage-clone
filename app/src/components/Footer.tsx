// import React from 'react'

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AppStoreButton, GooglePlayButton } from "./Button";

export default function Footer() {
  return (
    <footer className="text-surface flex flex-col items-center bg-red-700 pt-20 text-center lg:text-left dark:text-white">
      <div className="container">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6 justify-center">
            <h5 className="mb-2.5 font-bold uppercase">Informasi kontak</h5>

            <ul className="mb-0 list-none justify-self-center">
              <li>
                BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten
                15345
              </li>
              <li>24/7 - Online</li>
              <li>abcd@GoGoTrip.co.id</li>
              <li>@GoGoTrip.co.id</li>
              <li>@GoGoTrip.co.id</li>
            </ul>
          </div>

          <div className="mb-6 justify-self-center">
            <img
              src="https://getgoing.co.id/content/img/MockupApp.png"
              alt=""
              className="h-60"
            />
          </div>

          <div className="mb-6 justify-self-center">
            <h5 className="mb-10 font-bold uppercase">Download di</h5>
            <div>
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>

          <div className="mb-6 justify-self-center">
            <h5 className="mb-2.5 font-bold uppercase">Lainnya</h5>

            <ul className="mb-0 list-none">
              <li>
                <a href="#" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Penghargaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex h-20 w-full justify-between bg-black text-center">
        <div className="container flex items-center justify-between">
          <div>© 2024 - PT. Gue Eksplorasi Terus. All rights reserved.</div>
          <div className="flex gap-2">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebookSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
