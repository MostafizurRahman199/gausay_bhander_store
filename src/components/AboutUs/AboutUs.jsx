import React from "react";

const AboutUs = () => {
  const content = [
    {
      title: "Our History",
      description:
        "Gausay Bhander Store, established in 1995, is the country’s first fresh and cut-ready-to-frozen/cook fruits & vegetable supplier company. 1st Frozen Vegetable which exported from Bangladesh is supplied by us and cut in our home kitchen. GBS runs the business in the domestic Frozen Food exporters market. Whereas GBS contributes more than 50% of total Frozen Vegetables export from Bangladesh. Gausay Bhander Store supplies raw fresh cut and frozen vegetables to frozen export companies in Bangladesh. The business has been growing day by day with the excellence of youthful and energetic leadership. Contributing to the economic growth of the country and assuring the satisfaction of valued clients is the prime policy of Gausay Bhander Store.",
      image: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Blog/2c/ea/2cea0338-3fdd-4eec-ab96-0ec99b6b8ab0.jpg", // Replace with actual image path
    },
    {
      title: "Our Strength",
      description:
        "Quality consciousness, modern supply chain strategy, customer service, and economical pricing policy have given us a unique position in the competitive market.",
      image: "https://eastcoasttours.in/wp-content/uploads/2023/08/OUR.jpg", // Replace with actual image path
    },
    {
      title: "Why We Are Different?",
      description:
        "We are the leading vegetable supplier and frozen food exporter in Bangladesh.",
      image: "https://www.kitchenmasterdesign.com/wp-content/uploads/why-we-are-different.jpg", // Replace with actual image path
    },
    {
      title: "How We Do It",
      description:
        "We have developed an expert team over the years for sourcing high-quality fresh vegetables from traditional farmers across Bangladesh.",
      image: "https://sciani.com/wp-content/uploads/2022/08/Process.png", // Replace with actual image path
    },
    {
      title: "What We Do",
      description:
        "Bangladesh’s subtropical weather, with its six seasons, is ideal for the agricultural cultivation of fruits and vegetables.",
      image: "https://t3.ftcdn.net/jpg/04/40/93/40/360_F_440934026_wZt6WJ2dkG4kYJ9Owsngill0iLbbsM43.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
      <h2 className="text-center text-5xl font-bold text-gray-900 mb-16">
        About Us
      </h2>
      <div className="max-w-7xl mx-auto">
        {/* Our History Section */}
        <div className="bg-white p-8 rounded-xl shadow-2xl mb-8">
          <div className="overflow-hidden rounded-lg">
            <img
              src={content[0].image}
              alt={content[0].title}
              className="w-full h-56 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            {content[0].title}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {content[0].description}
          </p>
        </div>

        {/* Remaining Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.slice(1).map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-300 hover:shadow-3xl"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;