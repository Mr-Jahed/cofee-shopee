import React from "react";

const ServicesData = [
  {
    id: 1,
    img: "/expresso.jpg", // Direct reference from the public folder
    name: "Espresso",
    description:
      "Espresso is known for its rich flavor and thick consistency, serving as the base for many other coffee drinks like lattes and cappuccinos.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/americco.jfif", // Direct reference from the public folder
    name: "Americano",
    description:
      "Americano is a diluted espresso with hot water, offering a milder flavor while retaining the essence of espresso’s boldness.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/capacino.jfif", // Direct reference from the public folder
    name: "Cappuccino",
    description:
      "Cappuccino is a popular coffee drink made with equal parts espresso, steamed milk, and milk foam, creating a smooth and creamy texture with a rich taste.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/200x122?text=Image+not+found"; // Fallback image
                    }}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
