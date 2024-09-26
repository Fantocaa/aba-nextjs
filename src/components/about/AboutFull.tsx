import Image from "next/image";
import React, { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const AboutFull = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <>
      <section className="container py-16" ref={ref}>
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <>
            <div>
              <h1 className="font-semibold text-4xl pb-8">Our Story</h1>
              <p className="leading-loose">
                PT. BERLIMPAH ANUGERAH SEJATI merupakan perusahaan distribusi
                yang saat ini berdomisili di Pulau Bali. Dibangun pada masa
                pandemic yaitu Januari 2021 dimana principal pabrik berusaha
                untuk menekan biaya distribusi guna menyelamatkan organisasi
                secara keseluruhan. Jalur distribusi di Pulau Bali secara global
                berdampak besar sekitar 90% usaha harus terhenti akibat
                pandemic.
                <br />
                <br />
                Di saat perusahaan lain mundur karena pesimis, PT. BERLIMPAH
                ANUGERAH SEJATI melihat peluang dan yakin PASTI BISA untuk
                memenuhi setiap target yang diberikan principal. Hal ini yang
                membuat principal memberikan kesempatan kepada kami.
              </p>
            </div>
          </>
          <>
            <div>
              <Image
                src="/images/woman-wearing-safety-cap-work (1).jpg"
                alt="image-about"
                width={1080}
                height={1080}
                className="rounded-2xl"
              />
            </div>
          </>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-6 md:mt-16">
          <>
            <div className="md:order-last">
              <p className="leading-loose">
                Terbukti dengan kerja keras & inovasi yang dilakukan ternyata
                melebihi dari target yang diberikan oleh principal. Bahkan
                setelah 3 tahun, PT. BAS terus menunjukkan peningkatan yang
                signifikan melebihi dari target principal. Hal ini yang menjadi
                nilai tambah perusahaan kami sehingga bagi PT. BERLIMPAH
                ANUGERAH SEJATI ini hanya barulah permulaan.
                <br />
                <br />
                Tujuan kami kedepannya kami akan terus melebarkan zona
                distribusi kami bukan hanya di pulai bali, tapi sampai dengan
                area Indonesia Timur. Kami akan buktikan bahwa kami akan membawa
                perusahaan anda menjadi market leader di bidangnya ketika anda
                memilih PT. BERLIMPAH ANUGERAH SEJATI menjadi mitra distribusi
                anda.
              </p>
            </div>
          </>
          <>
            <div>
              <Image
                src="/images/man-safety-equipment-working.jpg"
                alt="image-about"
                width={1080}
                height={1080}
                className="rounded-2xl"
              />
            </div>
          </>
        </div>
      </section>
    </>
  );
});

export default AboutFull;
