const WorkGallery = () => {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Work Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <img
                src={img}
                alt={`Painting work ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkGallery;
