import { FaStar, FaGoogle } from "react-icons/fa";

// Reviews copied from the Markrich Solutions LLP Google Business Profile.
// Update averageRating / totalReviews and add new reviews as they come in.
const profileUrl = "https://share.google/WNzXK5RIgNVg0EVra";
const averageRating = 5.0;
const totalReviews = 5;
const reviews = [
  {
    name: "Savan Kanabar",
    rating: 5,
    title: "A Transformational Training Experience!",
    text: "We are a service based IT startup and we recently embarked on a journey of acquiring skills in Business Analytics and Scrum methodologies through Markrich Solutions LLP and the experience has been amazing. … Markrich Solutions LLP has exceeded our expectations and this is the place to go for Agile and Project Management trainings.",
    role: "Founder, Nebula Software",
  },
  {
    name: "Kayenat Yasmeen",
    rating: 5,
    text: "I attended a training on Business Analytics, and it really helped me with my work. The trainer used practical data sets, that enabled me to learn new skills.",
  },
  {
    name: "Abhi",
    rating: 5,
    text: "I had zero knowledge about Business Analytics and how it's done. Markrich Solutions helped me to understand the core concepts and basic fundamentals of BA and that helped me to widen my prospects in my digital marketing career!",
  },
  {
    name: "Apurva Trivedi",
    rating: 5,
    text: "The practical data sets used by the trainer in the sessions has definitely helped in the day to day work set ups. It has truly helped in value addition of the work done in general.",
  },
  {
    name: "Saumya Agarwal",
    rating: 5,
    text: "I attended the financial acumen training and it helped me immensely. I can now understand financial statements and make strategic decisions for my company.",
  },
];

const Stars = ({ rating }) => (
  <div className="flex gap-1 text-[#FBBC04]" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <FaStar key={n} className={n <= rating ? "" : "text-gray-300"} />
    ))}
  </div>
);

const GoogleReviews = () => {
  if (reviews.length === 0) return null;

  return (
    <section className="py-20 px-12 bg-[#FAFAFA] lg:px-6">
      <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
        <div className="flex flex-col gap-3 items-center text-center">
          <h6 className="text-[#ED3630] font-medium md:text-sm">
            Google Reviews
          </h6>
          <h2 className="text-5xl font-semibold tracking-tighter md:text-4xl">
            Trusted by <span className="text-[#F58A07]">Our Clients</span>
          </h2>
          {averageRating && (
            <div className="flex items-center gap-3 mt-2">
              <FaGoogle className="text-xl text-[#4285F4]" />
              <span className="text-2xl font-semibold">
                {averageRating.toFixed(1)}
              </span>
              <Stars rating={Math.round(averageRating)} />
              {totalReviews && (
                <span className="text-sm text-slate-500">
                  {totalReviews} reviews
                </span>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-[24px] bg-white p-6 shadow-sm border border-[#E5E7EB]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#FFF7ED] text-[#F58A07] font-semibold flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#18181B]">{review.name}</p>
                    {review.role && (
                      <p className="text-xs text-slate-500">{review.role}</p>
                    )}
                  </div>
                </div>
                <FaGoogle className="text-[#4285F4]" />
              </div>
              <Stars rating={review.rating} />
              {review.title && (
                <p className="font-semibold text-[#18181B]">{review.title}</p>
              )}
              <p className="text-sm text-[#52525B] leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-center rounded-full border border-[#F58A07] text-[#F58A07] px-6 py-3 font-medium hover:bg-[#F58A07] hover:text-white transition"
          >
            See all reviews on Google
          </a>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;
