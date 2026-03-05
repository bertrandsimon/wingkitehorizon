import HomePageEn from "@/components/pages/HomePageEn";
import { SEO, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.en.home,
  path: "/en",
  locale: "en",
});

export default function Page() {
  return <HomePageEn />;
}
