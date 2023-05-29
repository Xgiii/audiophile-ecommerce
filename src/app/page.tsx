import Gallery from '@/src/Components/Gallery';
import GeneralDescription from '@/src/Components/GeneralDescription';
import Hero from '@/src/Components/Hero';
import HomeTiles from '@/src/Components/HomeTiles';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <HomeTiles />
      <GeneralDescription />
    </>
  );
}
