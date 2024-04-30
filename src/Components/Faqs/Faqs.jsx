
const Faqs = () => {
  return (
    <div className="hero-content gap-6 mx-10 lg:mx-24 mb-10 flex flex-col lg:flex-row ">
        <img className="md:w-2/3" src="/faq.webp" alt="" />
      <div className="join join-vertical w-full">
        {/* faqs */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-semibold text-blue-600">
            How can I book a tour or activity through your website?
          </div>
          <div className="collapse-content">
            <p className=" text-gray-600 font-medium">
              Booking a tour or activity is simple! Navigate to our Tours or
              Activities section, browse through the available options, select
              the one that interests you, and follow the prompts to complete
              your booking. You can also filter tours based on your preferences,
              such as location, duration, and price range, to find the perfect
              match for your travel plans.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-semibold text-blue-600">
            What safety measures are in place for the tours and activities
            offered through your website?
          </div>
          <div className="collapse-content">
            <p className=" text-gray-600 font-medium">
              Your safety and well-being are our top priorities. We work closely
              with our tour operators and activity providers to ensure that all
              experiences meet stringent safety standards. This includes regular
              inspections of equipment, adherence to local regulations, and
              training for guides and staff. Additionally, we provide detailed
              safety information for each tour or activity so you can make
              informed decisions before booking.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-semibold text-blue-600">
            Can I customize or tailor a tour to suit my preferences?
          </div>
          <div className="collapse-content">
            <p className=" text-gray-600 font-medium">
              Absolutely! Many of our tours and activities offer customization
              options to cater to your specific interests and needs. Whether
              you are traveling solo, with family, or in a group, we can help you
              create a personalized itinerary that aligns with your preferences.
              Simply reach out to our customer support team or inquire with the
              tour operator directly to discuss customization options, such as
              private tours, special accommodations, or unique experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
