import CarouselComponent from '@/components/CarouselComponent'
import SpinnerComponent from '@/components/SpinnerComponent'

export default function Home() {
  return (
    <main className="container m-auto">
      <div className="lg:gap-[13.3px] md:gap-8 w-auto flex flex-wrap justify-center grid-cols-3">
        {/* to say */}
        <CarouselComponent/>
      </div>
    </main>
  );
}
