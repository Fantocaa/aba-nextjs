import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
// import Link from "next/link";

export default function ContactBranch() {
  const Branch = [
    {
      id: 1,
      branch: "Surabaya",
      phone: "+62 812 9048 4892",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location: "Jl. Perak Timur No.110, Perak Timur, Surabaya",
    },
    {
      id: 2,
      branch: "Semarang",
      phone: "+62 812 3122 7180",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location: "Jl. Puri Anjasmoro blok J4/10, Semarang Barat",
    },
    {
      id: 3,
      branch: "Gorontalo",
      phone: "+62 812 354 2688",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location: "Desa Tinelo No.3, Dusun III, Kec. Telaga Biru, Gorontalo",
    },
    {
      id: 4,
      branch: "Manado",
      phone: "+62 822 9637 0375",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Citraland Miracle Walk cmw 06 No.03, Desa Bumi Ngiur, Kec. Wanea, Manado",
    },
    {
      id: 5,
      branch: "Makassar",
      phone: "+62 811 308 9090",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Jl. Kumala Ruko blok A No.05, Desa Bongaya, Kec. Ramalate, Makassar",
    },
  ];

  const t = useTranslations("Contact");

  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{t("title-branch")}</h1>
          <p className="text-gray-500 text-lg">{t("sub-branch")}</p>
        </div>
        <>
          {Branch.map((slide, index) => (
            <div key={slide.id}>
              <h1 className="text-xl font-semibold mb-3">{slide.branch}</h1>
              <span className="flex items-center gap-2 mb-2">
                <Phone size={20} />
                <h1>{slide.phone}</h1>
              </span>
              <span className="flex gap-2 items-center">
                <MapPin size={20} />
                {/* <Link href={slide.link} target="__blank"> */}
                <h1>{slide.location}</h1>
                {/* </Link> */}
              </span>
            </div>
          ))}
        </>
      </div>
    </>
  );
}
