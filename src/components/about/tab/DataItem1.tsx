import React from "react";

export default function DataItem1() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">Jaringan Distributor</h1>
        <br />
        <p className="leading-loose">
          Pasar di Bali tersebar luas & dibagi dengan beberapa segmen. Adapun
          sebagai gambaran pelanggan yang sudah bekerja sama dengan kami.
        </p>
        <br />
        <h1>Modern Trade Nasional dan Lokal Bali</h1>
        <ul className="list-disc pl-5 leading-loose">
          <li>Indomaret, Alfamart, Lotte, PrimaFood, STL</li>
          <li>180 Outlet modern trade local Bali</li>
        </ul>
        <br />
        <h1>Traditional Trade Bali</h1>
        <ul className="list-disc pl-5 leading-loose">
          <li>70 Outlet Grosir Traditional</li>
          <li>3650 Outlet retail Traditional</li>
        </ul>
      </div>
    </>
  );
}
