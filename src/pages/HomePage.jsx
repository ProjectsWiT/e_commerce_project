import HomeHero from "../components/home/HomeHero";
import HomeCategories from "../components/home/HomeCategories";
import HomeProducts from "../components/home/HomeProducts";
import HomeBrands from "../components/home/HomeBrands";
import HomeCTA from "../components/home/HomeCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <HomeHero />
      <HomeCategories />
      <HomeProducts />
      <HomeBrands />
      <HomeCTA />
    </div>
  );
}
