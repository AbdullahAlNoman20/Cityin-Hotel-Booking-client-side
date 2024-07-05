const AboutUs = () => {
  return (
    <div>
      <section className="">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-yellow-600">
                <h3 className="text-3xl font-semibold">Experience Cityin</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  Where Luxury Meets Convenience
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Welcome to Cityin
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Dec 2020
                  </time>
                  <p className="mt-3">
                    Nestled in the heart of the vibrant cityscape, Cityin offers
                    you a luxurious sanctuary amidst the urban hustle. Immerse
                    yourself in the dynamic energy of the city, knowing that a
                    tranquil haven awaits your return. With our impeccable
                    service, modern amenities, and attention to detail, your
                    stay at Cityin will be nothing short of extraordinary.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Discover Urban Elegance
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jul 2022
                  </time>
                  <p className="mt-3">
                    At Cityin, we redefine the art of hospitality. Step into a
                    world where sophistication meets comfort, where every corner
                    is designed to inspire and delight. Whether you're here for
                    business or leisure, our hotel caters to your every need,
                    ensuring a seamless experience from check-in to check-out.
                    Come, indulge in the luxury of Cityin and create
                    unforgettable memories in the heart of the city.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Your Oasis in the City
                  </h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jan 2024
                  </time>
                  <p className="mt-3">
                    Escape the chaos of everyday life and retreat to the
                    serenity of Cityin. Located amidst the pulsating rhythm of
                    the city, our hotel offers a tranquil oasis where you can
                    relax, rejuvenate, and recharge. From our elegantly
                    appointed rooms to our world-class amenities, every aspect
                    of Cityin is crafted to provide you with a memorable stay.
                    Experience the perfect blend of comfort and convenience,
                    only at Cityin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
