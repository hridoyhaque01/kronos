import React from "react";
import { Link } from "react-router-dom";

function Faq({ width }) {
  return (
    <section className="px-4 py-8 sm:py-16 lg:py-36 font-segoe">
      <div className={width}>
        <div className="sm:max-w-[20rem] md:max-w-[36rem] lg:max-w-[48rem] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-[44px]  font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-14 gap-4 md:gap-7">
          <div className="w-full max-w-lg flex flex-col gap-4 md:gap-7">
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                What is Design Maestro?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                Design Maestro is a FREE package of macros that you can use in
                the Keyboard Maestro app for macOS. Wonder how Design Maestro
                automations can help you? Read{" "}
                <Link className="underline" to="/">
                  this article.
                </Link>
              </p>
            </div>
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                I have an idea for automation! Where do I submit it?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                If you have an idea for automation that we could implement in
                the next versions of Design Maestro let us know{" "}
                <Link className="underline" to="/">
                  in this form
                </Link>
                . We’ll review it and if it will find it useful we will
                implement it!
              </p>
            </div>
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                How do I contact you?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                You can reach out to us via email at{" "}
                <Link className="underline" to="/">
                  hello@designmaestro.io.
                </Link>
              </p>
            </div>
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                I want to support this project. How can I do that?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                Enjoying Design Maestro? We are super happy! Rate us 5⭐️ on{" "}
                <Link className="underline" to="/">
                  Gumroad
                </Link>
                . Share a link to{" "}
                <Link className="underline" to="/">
                  our website
                </Link>{" "}
                with your friends. Donate on Gumroad by entering your amount in
                the Name a fair price input.
              </p>
            </div>
          </div>
          <div className="w-full max-w-lg flex flex-col gap-4 md:gap-7">
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                What is Keyboard Maestro?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                <Link className="underline" to="/">
                  Keyboard Maestro
                </Link>{" "}
                is an automation software for macOS where you can automate
                virtually anything. Applications or websites, text or images,
                simple or complex, on command or scheduled. If you can perform
                it manually, Keyboard Maestro can almost certainly automate it
                for you. Whether it is typing your email address, going to Gmail
                or Twitter, launching Pages, or duplicating a line, Keyboard
                Maestro can help.
              </p>
            </div>
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                Can I use Keyboard Maestro for Windows or Linux?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                No. Keyboard Maestro is only available for macOS.
              </p>
            </div>
            <div className="py-8 px-6 md:p-9 bg-blackSemi rounded-md">
              <h4 className="text-lg leading-8 font-semibold">
                Is Keyboard Maestro a free app?
              </h4>
              <p className="text-fade text-lg leading-8 mt-2">
                Keyboard Maestro is a paid app but there is a long free trial.
                What is more, we also provide a special discount for Keyboard
                Maestro that you can use: With coupon: DESIGNMAESTRO you’ll get
                a 20% discount. By the way, we don't get any cut from your
                purchase. We just managed to get a friendly discount from
                Keyboard Maestro founder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
