import React from "react";
import { Link } from "react-router-dom";

function Features({ width }) {
  const features = [
    {
      id: 1,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview",
    },
    {
      id: 2,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 2",
    },
    {
      id: 3,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 3",
    },
    {
      id: 4,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 4",
    },
    {
      id: 5,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 5",
    },
    {
      id: 6,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 6",
    },
    {
      id: 7,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 7",
    },
    {
      id: 8,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 8",
    },
    {
      id: 9,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 9",
    },
    {
      id: 10,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 10",
    },
    {
      id: 11,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 11",
    },
    {
      id: 12,
      tag: "lorem",
      title: "Lorem Ipsum Generator2",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 12",
    },
    {
      id: 13,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 13",
    },
    {
      id: 14,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 14",
    },
    {
      id: 15,
      tag: "lorem",
      title: "Lorem Ipsum Generator",
      text: "Quickly type a “Lorem Ipsum” sentence by typing ;lorem.",
      previewLink: "Video preview 15",
    },
  ];

  return (
    <section className="px-4 mt-8 sm:mt-20 lg:mt-40">
      <div className={width}>
        <div className="sm:max-w-[20rem] md:max-w-[36rem] lg:max-w-[48rem] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-openSans font-semibold">
            Features for busy designers
          </h2>
          <p className="text-xs md:text-lg text-fade font-openSans t mt-5">
            Kronos has quick action tools and modules for helping creators
            generate organic images and videos through text for perfect original
            content. I’m addition, we also offer a hub of other marketing tools
            to help you on your branding journey. Check it out for yourself.
          </p>
        </div>
        <div className="grid gap-4 md:gap-x-6 md:gap-y-8 lg:gap-x-9 lg:gap-y-11 sm:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-14">
          {features?.map((feature) => (
            <div
              className=" bg-fadeRgb rounded-2xl text-lg py-9 px-6"
              key={feature?.id}
            >
              <span className="bg-white px-2 py-0.5 rounded-md text-blackHigh text-sm">
                {feature?.tag}
              </span>
              <h4 className="text-white font-semibold mt-5 mb-2 ">
                {feature?.title}
              </h4>
              <p className="text-fade mb-5">{feature?.text}</p>
              <Link to="/" className="text-white border-b border-white">
                Video preview
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
