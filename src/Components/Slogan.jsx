import image1 from "/src/assets/Rectangle 1.jpg";
import image2 from "/src/assets/Rectangle 2.jpg";

function Slogan() {
  return (
    <div className="relative w-full  flex justify-center items-center bg-[#f4f3ee] px-10  py-10 md:py-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={image1}
          alt="House 1"
          className="w-full h-full object-cover rounded-xl"
        />
        <img
          src={image2}
          alt="House 2"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-[#f4f3ee] text-center rounded-xl px-6 py-4 shadow-md max-w-xl w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#7a5a43]">
            One-stop shop for your
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7a5a43] mt-2">
            Furniture & Interior
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
