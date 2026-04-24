import HomePage from "@/components/pages/HomePage";
import { buildMetadata, SEO } from "@/lib/seo";

export const metadata = buildMetadata({
  ...SEO.fr.home,
  path: "/",
  locale: "fr",
});

export default function Page() {
  return <HomePage />;
}
