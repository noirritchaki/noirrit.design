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
                  Designing a Seamless Health Checkup Journey for All Ages
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
                      project overview
                    </h1>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      In this case study, we detail how our team redesigned the
                      end-to-end health checkup experience on our platform to
                      make it more intuitive and delightful for users. Our user
                      base ranges from young professionals in their 20s to older
                      dependents up to 80 years old, each with unique needs and
                      tech comfort levels. The goal was to address key pain
                      points in the existing journey – from booking a checkup to
                      receiving results and consulting a doctor – and deliver a
                      unified solution that works for all age groups. We walk
                      through the challenges identified, the research and design
                      process, the solutions implemented, and the outcomes
                      supported by data.
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
                      background & context
                    </h1>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      The current health checkup journey was fragmented and
                      confusing. Users reported difficulties at every step of
                      the process, and adoption of the free checkup benefit was
                      lower than expected. Given the broad age range of our
                      users (from 21-year-old first jobbers to 80-year-old
                      retirees), it was critical that the new design be
                      accessible, easy-to-use, and trustworthy for everyone.
                    </h2>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      Through user interviews, support tickets, and survey
                      feedback, we uncovered numerous pain points in the
                      original health checkup process. Some of the most
                      significant challenges were:
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                      <li>
                        Difficult Booking Process: Booking a health checkup was
                        complicated and happened on a third-party platform,
                        forcing users to leave our app. This disjointed
                        experience led to confusion and drop-offs. Older users
                        in particular struggled with the complex navigation and
                        forms required by the external site .
                      </li>
                      <li>
                        Poor Tracking & Communication: Once a checkup was
                        booked, users had trouble tracking the status (e.g.
                        appointment confirmation, sample collection schedule,
                        report readiness). There were minimal notifications or
                        updates, leaving users uncertain about next steps.
                      </li>
                      <li>
                        Limited control over the end-to-end experience and
                        insights, as it is dependent on third-party platforms.
                      </li>
                      <li>
                        Generic Checkup Packages: The platform offered a
                        one-size-fits-all health checkup package. There was no
                        distinction in checkup types for different age groups,
                        gender, or medical conditions. Users weren’t sure which
                        tests were relevant for them.
                      </li>
                      <li>
                        Report Overload, Hard to Understand: When lab reports
                        came in (typically as PDF files), users found them hard
                        to read and interpret. The reports were full of medical
                        jargon and raw numbers. Many patients struggle to
                        comprehend lab results.
                      </li>
                      <li>
                        Broken Doctor Consultation Journey: After getting a
                        report, if a user wanted to consult a doctor, it was not
                        seamlessly connected to the checkup. Users had to
                        manually book a separate doctor appointment and bring
                        their lab report. This gap caused delays and
                        frustration. In some cases, by the time the user saw a
                        doctor, they had lost the momentum or forgotten details
                        of their report.
                      </li>
                    </ul>
                  </div>

                  <div alt="the solution">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      the solution
                    </h1>
                    <h2
                      className="font-normal flex flex-row"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      Based on the above challenges, we set clear goals for the
                      redesign of the health checkup experience:
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                      <li>
                        Integrate the Booking Flow: Create a one-stop, in-app
                        booking system for health checkups. Users should be able
                        to select a checkup, choose a lab or service provider,
                        schedule an appointment, and pay if needed, all within
                        our app (no more redirection to third parties). ADD
                        IMAGE HERE
                      </li>
                      <li>
                        Personalize Checkup Options: Offer demographic-based
                        checkup packages tailored to the user’s profile (age,
                        gender) and health context. For example, a 25-year-old
                        might see a “Young Adult Wellness Panel” while a
                        60-year-old sees a “Senior Comprehensive Checkup” with
                        screenings relevant to their age. This ensures users get
                        relevant tests and not extraneous ones , improving both
                        trust and health outcomes. ADD IMAGE HERE
                      </li>
                      <li>
                        Seamless End-to-End Journey: Unify the journey from
                        checkup booking to doctor consultation. This meant once
                        lab results are ready, the user should be guided to
                        easily book a follow-up consultation (e.g., with a
                        general physician) within the same app. The doctor
                        should have access to the digital report ahead of time.
                        Our goal was a closed-loop system: Book → Test → Report
                        → Doctor Consult → Follow-up Actions. ADD IMAGE HERE
                      </li>
                      <li>
                        Enhanced Report Experience: Make reading and
                        understanding the checkup report easy. We aimed to
                        design a new Report UI within our app that presents key
                        findings in user-friendly language (with use of tooltips
                        or highlights for out-of-range values). We also decided
                        to integrate an AI-powered summary: for any abnormal lab
                        result, the app provides a brief, plain-language
                        explanation of what it could mean, and users can ask
                        follow-up questions to a health chatbot. This would
                        directly tackle the problem of medical jargon and
                        misinterpretation, reducing user anxiety. ADD IMAGE HERE
                      </li>
                      <li>
                        Actionable Insights & Next Steps: Beyond just showing
                        results, the app should provide an action plan. For
                        example, if cholesterol is high, suggest lifestyle tips
                        or prompt the user to schedule a dietician consult. The
                        idea was to help users go “from diagnosis to action”
                        easily. ADD IMAGE HERE
                      </li>
                      <li>
                        Tracking and Updates: From the moment a user books a
                        checkup, the app provides real-time tracking. There’s a
                        progress status on the Health Checkup home screen that
                        shows steps: “Sample Collection Scheduled → Sample
                        Collected → Lab Processing → Report Ready”. Users get
                        push notifications at each stage (“Your blood sample has
                        been collected and is on its way to the lab.”). This
                        continuous communication keeps users engaged and
                        reassured that things are on track. If any delays
                        happen, the app informs them proactively. Users can also
                        reschedule or contact support directly from the tracking
                        screen. ADD IMAGE HERE
                      </li>
                    </ul>
                  </div>

                  <div alt="booking journey">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      launch and rollout
                    </h1>
                    <h2
                      className="font-normal flex flex-col"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      <span>
                        We implemented the design in development over a span of
                        2-3 sprints. The new Health Checkup feature was rolled
                        out in a phased manner: first to a small pilot group of
                        500 users, then to all users a couple of weeks later.
                        This allowed us to monitor for any technical issues or
                        unforeseen user confusions in a controlled way.
                      </span>
                      <span className="block mt-6">
                        During the pilot, we closely watched analytics (e.g.,
                        funnel completion rates, where users might drop off) and
                        gathered feedback. The pilot feedback was positive
                        overall, with some users specifically praising the new
                        interface. We fixed a couple of minor bugs and then
                        proceeded to full launch.
                      </span>

                      {/* 
                      <span className="block mt-6">Each plan includes:</span> */}
                    </h2>

                    {/* need to blur from here :( */}
                    {/* <div className="relative w-full mt-6"> */}
                    {/* connect message */}
                    {/* <div className="absolute inset-0 z-10 rounded-md flex flex-col items-center justify-center text-center px-6 py-10">
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
                      </div> */}
                    {/* <div className="pointer-events-none select-none opacity-60 blur-sm"> */}
                    {/* <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
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
                        We give enough information to make an informed decision
                        on which check-up to book.
                      </h2> */}
                    {/* <div className="pointer-events-none select-none opacity-60 blur-md">
                        <div className="flex flex row justify-center rounded md:-mx-28 mt-10">
                          <img src={plans} alt="image of the plans" />
                        </div>
                      </div> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                  <div alt="booking journey">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      results & impact
                    </h1>
                    <h2
                      className="font-normal flex flex-col"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      <span>
                        The redesign of the health checkup journey has shown
                        significant positive impact in both user engagement and
                        business metrics. Here are some of the notable results
                        since launch (based on the first 3 months of data):
                      </span>
                      <span className="block mt-6">
                        During the pilot, we closely watched analytics (e.g.,
                        funnel completion rates, where users might drop off) and
                        gathered feedback. The pilot feedback was positive
                        overall, with some users specifically praising the new
                        interface. We fixed a couple of minor bugs and then
                        proceeded to full launch.
                      </span>
                    </h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                      <li>
                        Increased Bookings: The number of health checkup
                        bookings per month increased by ~40% after the redesign.
                        We went from an average of 1,000 bookings/month to about
                        1,400 bookings/month. Importantly, a large portion of
                        this growth came from first-time checkup users,
                        indicating that the new intuitive design and better
                        communication encouraged people who had never used the
                        service before to finally try it.
                      </li>
                      <li>
                        Higher Completion Rate: The funnel completion rate
                        (users who start booking and finish the checkout)
                        improved dramatically. It rose from 55% completion
                        (pre-redesign) to 88% completion post-launch. This means
                        far fewer users are dropping off mid-way. Eliminating
                        the third-party redirect and simplifying the steps had a
                        direct effect here.
                      </li>
                      <li>
                        Faster Booking Time: Usability analysis shows that the
                        average time to complete a booking (from starting the
                        process to confirmation) dropped from ~4 minutes before
                        to ~2.5 minutes now. Fewer pages and a smoother flow
                        contributed to this 37% faster booking experience.
                      </li>
                      <li>
                        Follow-up Doctor Consultations: One of the biggest wins
                        is the increase in follow-through to doctor
                        consultations. Historically, only ~20% of checkup users
                        went on to consult a doctor through our platform after
                        getting results. With the integrated flow and prompts,
                        that number has jumped to 55%. This means more than half
                        of our users are now taking the next step to discuss
                        their results with a physician – a great outcome for
                        preventive health management. It also brings additional
                        revenue (or benefit usage) to our platform, making it a
                        win-win.
                      </li>
                    </ul>
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
