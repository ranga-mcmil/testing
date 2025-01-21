import { NavBar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";


export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar
        scroll={true}
      />
      <main className="flex-1">{children}</main>
      <SiteFooter
        className="border-t border-border"
      />
    </div>
  );
}
