import Differences from "~/layouts/home/differences";
import Hero from "~/layouts/home/hero";
import Platform from "~/layouts/home/platform";
import SocialMedia from "~/layouts/home/social-media";

export default function Home() {
  return (
    <>
      <Hero />
      <Platform />
      <Differences />
      <SocialMedia />
    </>
  );
}
