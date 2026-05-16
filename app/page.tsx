import Intro from '@/sections/home/intro/Intro';
import Properties from '@/sections/home/properties/Properties';
import Reviews from '@/sections/home/reviews/Reviews';
import Faq from '@/sections/shared/faq/Faq';
import Start from '@/sections/shared/start/Start';

export default function Home() {
  return (
    <>
      <Intro />
      <Properties />
      <Reviews />
      <Faq />
      <Start />
    </>
  );
}
