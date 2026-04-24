import HomePageEn from "@/components/pages/HomePageEn";
import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en.home,
  path: "/en",
  locale: "en",
});

export default function Page() {
  return <HomePageEn />;
}
