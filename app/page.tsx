import Gallery from '@/Components/Gallery';
import Hero from '@/Components/Hero';
import HomeTiles from '@/Components/HomeTiles';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <HomeTiles />
      <div className='mt-20'></div>
    </>
  );
}
