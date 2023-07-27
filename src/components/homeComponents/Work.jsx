import React from "react";

function Work({ width }) {
  const works = [
    {
      id: 1,
      tag: "1",
      title: "Start Kronos Free Trial",
      text: "You’ll be able to test out Kronos 7 days for free without any hassle in order to start creating content.",
      previewLink: "Video preview",
    },
    {
      id: 2,
      tag: "2",
      title: "Create Content With AI",
      text: "Use your imagination and type in any photo or videos you’d like to create as your content.",
      previewLink: "Video preview 2",
    },
    {
      id: 3,
      tag: "3",
      title: "Share Your Imagination",
      text: "Share your content directly to your social media along with the help of our other AI marketing tools and modules.",
      previewLink: "Video preview 3",
    },
  ];
  return (
    <section className="px-4 mt-8 sm:mt-16 lg:mt-36">
      <div className={width}>
        <div className="sm:max-w-[20rem] md:max-w-[36rem] lg:max-w-[48rem] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-openSans font-semibold">
            How does Kronos work?
          </h2>
          <p className="text-xs md:text-lg text-fade font-openSans t mt-5">
            Kronos uses powerful AI to create and generate images and videos for
            you to overlay with your ideal style text and branding. No more need
            to spend hours sifting through stock photos or worrying about
            licensing images and videos.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 md:gap-10 lg:gap-24 mt-5 md:mt-14">
          {works?.map((work) => (
            <div className="text-center" key={work?.id}>
              <span className="w-11 h-11 flex items-center justify-center bg-fadeLightRgb rounded-full font-semibold text-xl mx-auto">
                {work?.tag}
              </span>
              <h4 className="font-openSans text-lg font-semibold mt-3 mb-4">
                {work?.title}
              </h4>
              <p className="text-fade font-openSans text-lg">{work?.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
