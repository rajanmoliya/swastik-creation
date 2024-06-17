const LocationMap = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-10 ">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        {/* Left div with Google Map */}
        <div className="w-full lg:w-1/2 h-[450px] bg-white shadow-lg rounded-lg overflow-hidden mb-4 lg:mb-0 lg:mr-4">
          <iframe
            title="Location Map"
            className="w-full h-full border-0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=plot%20no-O/1B,%20Diamond%20industrial%20park,road%20number%2001+(Swastik%20Creations)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right div with company info */}

        <div className="w-full lg:w-1/2 p-4 bg-white shadow-lg rounded-lg h-[450px] text-center flex items-center justify-center bg-gradient-to-t from-indigo-400 via-transparent via-50% to-stone-100">
          <div>
            <h2 className="text-2xl font-bold mb-4">Swastik Creations</h2>
            <p className="text-gray-700 mb-1">
              Diamond Industrial Park, Road Number 01, Plot No-O/1B
            </p>
            <p className="text-gray-700 mb-4">Surat, Gujarat, 394230</p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> +91 1234567890
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Email:</strong> info@company.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

{
  /* <div style="width: 100%">
  <iframe
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=plot%20no-O/1B,%20Diamond%20industrial%20park,road%20number%2001+(Swastik%20Creations)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    width="100%"
    height="600"
    frameborder="0"
  >
    <a href="https://www.gps.ie/">gps devices</a>
  </iframe>
</div>; */
}
