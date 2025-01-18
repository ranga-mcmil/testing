import { Suspense } from "react";

// import { getCurrentUser } from "@/packages/auth";
import { Locale } from "@/config/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { NavBar } from "@/components/navbar";
import { getMarketingConfig } from "@/config/ui/marketing";
// import { ModalProvider } from "@/components/modal-provider";
import { SiteFooter } from "@/components/site-footer";


export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  const user = {
    name: "John Doe",
    image: "/path/to/image.jpg",
    email: "john.doe@example.com",
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar
          items={
            (await getMarketingConfig({ params: { lang: `${lang}` } })).mainNav
          }
          params={{ lang: `${lang}` }}
          scroll={true}
          user={user}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        />
      </Suspense>
      {/* <ModalProvider dict={dict.login} /> */}
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  );
}
