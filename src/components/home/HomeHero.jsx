import HeroSlider from "../HeroSlider";

export default function HomeHero() {
  return (
    <section className="-mx-4 md:-mx-12 lg:-mx-24">
      {/* HeroSlider full-bleed gibi dursun diye container paddingini kırıyoruz */}
      <HeroSlider />
    </section>
  );
}
