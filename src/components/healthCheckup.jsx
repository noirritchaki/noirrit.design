import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { color, motion } from "framer-motion";
import me from "../assets/me.png";
import test from "../assets/test.png";
import styles from "./Navbar.module.css";
import WorkLink from "./WorkLink";
import About from "./About";
import game from "../assets/video-game.svg";
import album from "../assets/album.svg";
import book from "../assets/book.svg";
import pheart from "../assets/plumheart.svg";
import homeme from "../assets/home-me.jpg";
import redplum from "../assets/red-plum.svg";
import plans from "../assets/plans.png";
import mainimg from "../assets/mockup.png";
import arrowBack from "../assets/arrow.svg";
import GoBack from "./GoBack";

const healthCheckup = () => {
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
          <div className="flex items-center w-full h-8 mb-12 group">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="absolute -top-16 -left-[42px] flex flex-col items-center gap-1"
              >
                <GoBack />
              </motion.div>
            </div>
            <a
              alt="logo"
              aria-label="Go to homepage"
              href="/"
              className="mr-10"
            >
              <img
                width="56"
                height="56"
                src={homeme}
                alt="logo"
                className="rounded-[16px] shadow-lg hover:shadow-xl hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="flex flex-row gap-4">
              <a alt="about" aria-label="Go to about">
                <Link
                  to="/about"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  about
                </Link>
              </a>
              <a alt="connect" aria-label="Go to connect">
                <Link
                  to="/connect"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  connect
                </Link>
              </a>
              <a alt="resume" aria-label="Go to resume">
                <Link
                  to="https://read.cv/noirrit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  resume
                </Link>
              </a>
            </div>
          </div>
          <motion.div
            className="flex flex-col gap-16 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-0 w-fit">
                <h1
                  className="inline font-medium"
                  style={{ fontSize: "20px", color: "#182230" }}
                >
                  health checkup
                </h1>
                <h2
                  className="font-normal flex flex-row gap-2 items-center mt-2"
                  style={{
                    fontSize: "14px",
                    color: "#182230",
                    lineHeight: "21px",
                  }}
                >
                  Designing a Single-Platform Health Checkup Journey to Enhance
                  User Experience and Unlock Deeper Insights
                </h2>
                <div className="w-[32px] border-t border-[#D0D5DD] h-3 mt-3"></div>
                <h2
                  className="font-normal flex flex-row gap-2 items-center"
                  style={{ fontSize: "14px", color: "#182230" }}
                >
                  2025 / Plum
                </h2>

                <div className="pointer-events-none select-none">
                  <div className="flex flex row justify-center rounded md:-mx-6 mt-8">
                    <img src={mainimg} alt="main image" />
                  </div>
                </div>

                {/* case study starts here */}

                <div className="flex flex-col items-top mt-16 gap-16">
                  <div>
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      goal
                    </h1>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      Our goal was to create a seamless, engaging, and
                      personalized health check-up experience for users within
                      the Plum platform by enabling discovery, booking,
                      tracking, insights, and doctor consultations — all in one
                      unified journey. This aims to improve user engagement,
                      empower users with meaningful health data, and allow
                      organizations to sponsor and manage employee health
                      check-ups through the app
                    </h2>
                  </div>
                  <div>
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      project details
                    </h1>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row gap-auto">
                        <h1
                          className="font-normal flex flex-row min-w-[100px]"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          Timeline
                        </h1>
                        <h1
                          className="font-medium flex flex-row"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          2 months
                        </h1>
                      </div>
                      <div className="flex flex-row gap-auto">
                        <h1
                          className="font-normal flex flex-row min-w-[100px]"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          Role
                        </h1>
                        <h1
                          className="font-medium flex flex-row"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          IC Product Designer
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div alt="inital problem">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      initial problem
                    </h1>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      Users currently face a fragmented and inefficient
                      experience when trying to book, track, and act on health
                      check-ups through Plum. Specifically, the issues include:
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                      <li>
                        Users must unlock a coupon and get redirected to partner
                        platforms (e.g., Redcliffe, Healthians) — breaking the
                        journey and lowering engagement.
                      </li>
                      <li>
                        The experience is not personalized — health check-up
                        packages are not tailored by age, gender, or medical
                        history.
                      </li>
                      <li>
                        Limited control over the end-to-end experience and
                        insights, as it is dependent on third-party platforms.
                      </li>
                      <li>
                        Users struggle to track bookings, sample collections,
                        and reports from within Plum.
                      </li>
                      <li>
                        Lack of a seamless follow-up journey such as doctor
                        consultations based on their reports.
                      </li>
                    </ul>
                  </div>

                  <div alt="what currently exists">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      what currently exists
                    </h1>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      Plum currently enables users (primarily employees from
                      partner organizations) to access health check-ups through
                      third-party providers like Redcliffe or Healthians. This
                      process involves:
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                      <li>
                        Unlocking a unique coupon code on the Plum platform.
                      </li>
                      <li>
                        Getting redirected to the partner platform to complete
                        booking.
                      </li>
                      <li>
                        No direct tracking or visibility from within the Plum
                        app.
                      </li>
                      <li>
                        No personalized recommendations based on the user’s
                        health profile, demographics, or past tests.
                      </li>
                    </ul>
                  </div>

                  <div alt="booking journey">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      booking a health checkup
                    </h1>
                    <h2
                      className="font-normal flex flex-col"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      <span>This journey is pretty straight forward. </span>
                      <span className="block mt-6">
                        Users land on a health check-up page with curated plans.
                        We offer 5 plans that the user can pick from depending
                        on their needs. Ensuring they're able to make their
                        decision on what to pick without overwhelming them was
                        the goal here.
                      </span>

                      <span className="block mt-6">Each plan includes:</span>
                    </h2>

                    {/* need to blur from here :( */}
                    <div className="relative w-full mt-6">
                      {/* connect message */}
                      <div className="absolute inset-0 z-10 rounded-md flex flex-col items-center justify-center text-center px-6 py-10">
                        <p
                          className="text-[#182230] mb-8"
                          style={{ fontSize: "16px" }}
                        >
                          i can't show the rest sadly :(
                          <br />
                          reach out if you'd like to learn more
                        </p>
                        <Link to="/connect">
                          <button
                            className="font-medium px-4 py-2 bg-black rounded-md hover:bg-zinc-800 transition duration-300"
                            style={{ fontSize: "16px", color: "#ffffff" }}
                          >
                            connect
                          </button>
                        </Link>
                      </div>
                      <div className="pointer-events-none select-none opacity-60 blur-sm">
                        <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                          <li>Number of biomarkers tested</li>
                          <li>Who it’s for</li>
                          <li>
                            Sample type (blood, urine) & fasting requirements
                          </li>
                          <li>
                            Categories of health markers covered (e.g., liver,
                            heart, vitamin levels)
                          </li>
                        </ul>
                        <h2
                          className="font-normal flex flex-col mt-6"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          We give enough information to make an informed
                          decision on which check-up to book.
                        </h2>
                        <div className="pointer-events-none select-none opacity-60 blur-md">
                          <div className="flex flex row justify-center rounded md:-mx-28 mt-10">
                            <img src={plans} alt="image of the plans" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default healthCheckup;
