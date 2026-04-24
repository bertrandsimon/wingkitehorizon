import HomePageEs from "@/components/pages/HomePageEs";
import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.es.home,
  path: "/es",
  locale: "es",
});

export default function Page() {
  return <HomePageEs />;
}
