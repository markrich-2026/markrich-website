// Add participant video testimonials here. embedUrl is a YouTube or Vimeo
// embed link, e.g. "https://www.youtube.com/embed/VIDEO_ID" or
// "https://player.vimeo.com/video/VIDEO_ID". The section stays hidden while empty.
const videos = [
  // {
  //   embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
  //   name: "Participant name",
  //   role: "Designation – Company",
  //   programme: "Generative AI Training",
  // },
];

const VideoTestimonials = () => {
  if (videos.length === 0) return null;

  return (
    <section className="py-20 px-12 lg:px-6">
      <div className="container mx-auto max-w-[1200px] flex flex-col gap-12">
        <div className="flex flex-col gap-3 items-center text-center">
          <h6 className="text-[#ED3630] font-medium md:text-sm">
            Video Testimonials
          </h6>
          <h2 className="text-5xl font-semibold tracking-tighter md:text-4xl">
            Hear It From Our{" "}
            <span className="text-[#F58A07]">Participants</span>
          </h2>
          <p className="text-[#18181B] max-w-2xl">
            Participants share their experiences, key learnings and feedback
            from Markrich Solutions training programmes.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-sm border border-[#E5E7EB]"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={video.embedUrl}
                  title={`${video.name} – ${video.programme} testimonial`}
                  className="w-full h-full"
                  loading="lazy"
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5 flex flex-col gap-1">
                <p className="font-semibold text-[#F58A07]">{video.name}</p>
                <p className="text-sm font-semibold text-[#ED3630]">
                  {video.role}
                </p>
                <p className="text-sm text-slate-500">{video.programme}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
