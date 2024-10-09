import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactBranch() {
  const Branch = [
    {
      id: 1,
      branch: "Surabaya",
      phone: "+031 280 578 717",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Jl. Perak Timur No.110, Perak Timur, Surabaya, Jawa Timur 60164",
    },
    {
      id: 2,
      branch: "Semarang",
      phone: "+031 280 578 717",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Jl. Perak Timur No.110, Perak Timur, Surabaya, Jawa Timur 60164",
    },
    {
      id: 3,
      branch: "Gorontalo",
      phone: "+031 280 578 717",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Jl. Perak Timur No.110, Perak Timur, Surabaya, Jawa Timur 60164",
    },
    {
      id: 4,
      branch: "Manado",
      phone: "+031 280 578 717",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Jl. Perak Timur No.110, Perak Timur, Surabaya, Jawa Timur 60164",
    },
    {
      id: 5,
      branch: "Makassar",
      phone: "+031 280 578 717",
      link: "https://maps.app.goo.gl/na7JMpdxgYPP2naj9",
      location:
        "Jl. Perak Timur No.110, Perak Timur, Surabaya, Jawa Timur 60164",
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
              <span className="flex gap-2">
                <MapPin size={20} />
                <Link href={slide.link} target="__blank">
                  <h1 className="underline decoration-black underline-offset-2 hover:text-blueaba-500 hover:decoration-white">
                    {slide.location}
                  </h1>
                </Link>
              </span>
            </div>
          ))}
        </>
      </div>
    </>
  );
}
