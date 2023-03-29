import React from "react";
import image1 from '../../assets/image1.jpg'
const Gallery = () => {
  return (
    <section
      className="px-4 h-full pb-10 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      id="gallery"
    >
      <div >
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              <span className="text-red-accent-700">Our Creative Gallery</span>
              <br />
              <span className="leading-none lg:leading-loose">
                Spare a Though & Get Inspired
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 scale-x-30 group-hover:scale-x-100 mt-2 sm:mt-0" />
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="font-body text-base text-gray-700 md:text-lg">
              Weddings in Bangladesh mark the union of rituals, lights and
              traditions. Being the greatest occasion for most of the
              Bangladeshi families, everybody wants to make these weddings worth
              looking back to. You can be just a little more sure that down the
              years, your pictures help you feel alive in the moment. Check out
              our Gallery for more.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div className="py-6 text-red-900">
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4 transition-all duration-500 ease-in-out">
          <img
            src={image1}
            alt="Gallery"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 hover:opacity-90"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src={image1}
          />
          <img
            src={image1}
            alt="Gallery"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;