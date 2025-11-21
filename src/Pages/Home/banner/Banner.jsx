import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <section className=" relative bg-[url('assets/b1.jpg')]  bg-cover bg-center h-[500px] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative  text-center text-white max-w-2xl w-full  gap-20">
        <h1 data-aos="flip-left" className="text-3xl  font-bold mb-4">
          Allah is the best of provider
        </h1>
        <p className="mb-6 text-sm md:text-lg">
          Search through thousands of items and discover the best deals.
        </p>

        {/* Search Box */}
      </div>
    </section>
  );
};

export default Banner;
