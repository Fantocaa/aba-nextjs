import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  // const onSelectChange = (code: string) => {
  //   const nextLocale = code === "ID" ? "id" : "en";

  //   // Replace the locale in the current pathname
  //   const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);

  //   startTransition(() => {
  //     router.replace(newPathname, { scroll: false });
  //   });
  // };

  const onSelectChange = (code: string) => {
    const nextLocale = code === "ID" ? "id" : "en";

    // Get the current query parameters
    const queryParams = new URLSearchParams(window.location.search);

    // Replace the locale in the current pathname
    const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);

    // Combine the new path with the existing query parameters
    const newUrl = `${newPathname}?${queryParams.toString()}`;

    startTransition(() => {
      router.replace(newUrl, { scroll: false });
    });
  };

  return (
    <ReactFlagsSelect
      selected={localActive === "id" ? "ID" : "GB"}
      onSelect={onSelectChange}
      countries={["ID", "GB"]}
      showSelectedLabel={false}
      showOptionLabel={false}
      selectedSize={14}
      optionsSize={14}
      disabled={isPending}
      className="h-9 rounded-full bg-white"
      selectButtonClassName="h-9 rounded-full bg-white"
    />
  );
}
