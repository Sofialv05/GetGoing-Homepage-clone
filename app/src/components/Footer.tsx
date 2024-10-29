// import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white lg:text-left">
      <div className="container p-6">
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Informasi kontak</h5>

            <ul className="mb-0 list-none">
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

          <div className="mb-6">
            <img
              src="https://getgoing.co.id/content/img/MockupApp.png"
              alt=""
            />
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Download di</h5>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Lainnya</h5>

            <ul className="mb-0 list-none ">
              <li>
                <a href="#!" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Penghargaan
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#!" className="hover:underline">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-black/5 p-4 text-center flex justify-between">
        <div>© 2024 - PT. Gue Eksplorasi Terus. All rights reserved.</div>
        <div>
          <a>I</a>
          <a>F</a>
        </div>
      </div>
    </footer>
  );
}
