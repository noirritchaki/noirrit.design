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
import Booking from "../assets/booking-hc.png";
import Track from "../assets/track-hc.png";
import Track2 from "../assets/track-hc2.png";
import Report from "../assets/report-hc1.png";
import Report2 from "../assets/report-hc2.png";
import Action from "../assets/actions-hc.png";

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
                  Designing an end-to-end, delightful checkup journey from
                  booking to doctor follow-up.
                </h2>
                <div className="w-[32px] border-t border-[#D0D5DD] h-3 mt-3"></div>
                <h2
                  className="font-normal flex flex-row gap-2 items-center"
                  style={{ fontSize: "14px", color: "#182230" }}
                >
                  2025 / Plum
                </h2>

                <div className="pointer-events-none select-none">
                  <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
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
                      className="font-normal flex flex-col"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      We serve a wide spectrum: ages 21–30 first-jobbers to ages
                      70–80 dependent family members. Pre-redesign, the journey
                      fell apart at key seams:
                      <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                        <li>
                          Booking was off-platform (redirects, unfamiliar UI,
                          drop-offs).
                        </li>
                        <li>
                          Tracking was unclear (Was it scheduled? Collected?
                          Ready?)
                        </li>
                        <li>Reports were PDF-heavy and hard to interpret.</li>
                        <li>Doctor consults weren’t connected to results.</li>
                        <li>No personalization, same checkup for everyone.</li>
                        <li>
                          Value props (free employer-sponsored first checkup,
                          at-home collection, book for family) were hidden in
                          plain sight.
                        </li>
                      </ul>
                      <span className="mt-4">
                        <span className="font-medium">North-star:</span> “A
                        checkup flow my 25-year-old self finishes in minutes and
                        my 75-year-old dad can navigate without help.”
                      </span>
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
                      lower than expected.
                    </h2>
                    <h2
                      className="font-normal flex flex-row mt-2"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      Through user interviews, support tickets, and survey
                      feedback, we uncovered numerous pain points in the
                      original health checkup process.
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
                      what we built and how it works
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
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-[#182230] mt-4">
                      <li>
                        <h2
                          className="font-medium flex flex-row mb-2 mt-12"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          In-App Booking
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                          <li>
                            Package list with personalized defaults (e.g., Young
                            Adult, Women’s Health, Senior Comprehensive,
                            Condition-specific).
                          </li>
                          <li>
                            “Free for you - covered by your employer” sits next
                            to price, not in a banner.
                          </li>
                          <li>
                            Straightforward booking process making it simple to
                            proceed to the check-up without hassle.
                          </li>
                          <li>
                            Family booking: making it easier to book a check-up
                            for you or your family.
                          </li>
                          <li>Slot booking made easy and understandable.</li>
                        </ul>
                        <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
                            <img src={Booking} alt="main image" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <h2
                          className="font-medium flex flex-row mb-2 mt-12"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          Live tracking that reduces anxiety
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                          <li>
                            A single status rail: Scheduled → Collected →
                            Processing → Ready.
                          </li>
                          <li>
                            Push updates at each step, reschedule inline,
                            contact support in 1 tap.
                          </li>
                          <li>
                            Clear prep details shown to ensure a smooth
                            collection process (“12h–24h fasting is required”).
                          </li>
                        </ul>
                        <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
                            <img src={Track} alt="main image" />
                          </div>
                        </div>
                        <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
                            <img src={Track2} alt="main image" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <h2
                          className="font-medium flex flex-row mb-2 mt-12"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          Reports you can actually read
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                          <li>
                            Key biomarkers summarized at top with plain-English
                            interpretations.
                          </li>
                          <li>
                            Out-of-range highlights + contextual “what this
                            could mean” (safe, non-diagnostic). Giving a clear
                            picture into your health report.
                          </li>
                          <li>
                            Accessible AI explainer that helps you understand
                            what every biomarker could mean and follow-up Q&A
                            (“What should I ask my doctor?”).
                          </li>
                          <li>
                            The doctor can view the same report. It's
                            automtically shared with the doctor once you have
                            booked your doctor appointment.
                          </li>
                        </ul>
                        <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
                            <img src={Report} alt="main image" />
                          </div>
                        </div>
                        <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
                            <img src={Report2} alt="main image" />
                          </div>
                        </div>
                      </li>
                      <li>
                        <h2
                          className="font-medium flex flex-row mb-2 mt-12"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          One-tap doctor consult, in context
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                          <li>
                            Whenever your health reports are ready we show “Talk
                            to a doctor” with pre-filled context.
                          </li>
                          <li>
                            The report is automatically shared with the doctor
                            of your choice once booked.
                          </li>
                        </ul>
                        {/* <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-6 mt-8">
                            <img src={Booking} alt="main image" />
                          </div>
                        </div> */}
                      </li>
                      <li>
                        <h2
                          className="font-medium flex flex-row mb-2 mt-12"
                          style={{
                            fontSize: "14px",
                            color: "#182230",
                            lineHeight: "21px",
                          }}
                        >
                          Action plans that stick
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                          <li>A simple plan with doable steps.</li>
                          <li>
                            The action plan is provided by the doctor you have
                            consulted into a simple, readble format.
                          </li>
                          <li>
                            A simple nudge is given to ensure a re-booking is
                            done after 6 months from the last check-up. This is
                            done to ensure a well-rounded health experience is
                            prioritised for our customers.
                          </li>
                        </ul>
                        <div className="pointer-events-none select-none">
                          <div className="flex flex row justify-center rounded md:-mx-32 mt-8">
                            <img src={Action} alt="main image" />
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div alt="booking journey">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      principles we shipped with
                    </h1>
                    <h2
                      className="font-normal flex flex-col"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                        <li>
                          One place, one language. Kill the redirects, keep the
                          vocabulary human.
                        </li>
                        <li>
                          Show, don’t make me guess. Transparent progress, prep,
                          turnaround.
                        </li>
                        <li>
                          Right care, right person. Defaults personalized by
                          age, gender, conditions.
                        </li>
                        <li>
                          Explain the “why”. Reports with plain-English context
                          + safe, clear next steps.
                        </li>
                        <li>
                          Respect attention. Fewer steps, bigger targets,
                          predictable patterns.
                        </li>
                      </ul>

                      {/* 
                      <span className="block mt-6">Each plan includes:</span> */}
                    </h2>
                  </div>

                  <div alt="booking journey">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      research to design
                    </h1>
                    <h2
                      className="font-normal flex flex-col"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      {" "}
                      Before we started the project we needed to understand the
                      pain points of our users before we dove into our
                      solutions. We needed to make sure we got it right and made
                      the health care experience as clear as possible.
                      <ol className="list-decimal pl-5 space-y-2 text-sm text-[#182230] mt-4">
                        <li>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-12"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            Listening to our Plum Patrons
                          </h2>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            who we spoke to
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              18 Plum Patrons. A mix of employees across various
                              age groups.
                            </li>
                            <li>Age split: 21–30 (9), 31–45 (6), 46–60 (3)</li>
                            <li>
                              Prior usage: all had attempted or completed a
                              checkup in the old, third-party booking flow.
                            </li>
                          </ul>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            what we ran
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              45-min moderated sessions remotely over a video
                              call, task-based session where they would
                              think-aloud their experience.
                            </li>
                            <li>
                              Some of the tasks were “Show me how you’d book a
                              checkup,” “Find the price,” “Book for a parent,”
                              “Where would you see results?” and so on.
                            </li>
                            <li>
                              What did we try to observe - awareness of free
                              employer benefit, at-home collection, book for
                              family, perceived trust at redirect, clarity of
                              prep, rescheduling.
                            </li>
                          </ul>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            what we heard
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              Trust drop at redirect: “I thought I left Plum. Is
                              this safe to pay here?”
                            </li>
                            <li>
                              Lack of discoverability: “I was unaware of the
                              free health check-up benefit”
                            </li>
                            <li>
                              Family booking friction: “Booking for my mom felt
                              like a hack—no clear dependent flow.”
                            </li>
                            <li>
                              Report confusion: “PDF came in mail; I don’t know
                              what these numbers mean.”
                            </li>
                            <li>
                              Blind to progress: "I'm unaware of what's going on
                              with my check-up."
                            </li>
                          </ul>
                          <div className="pointer-events-none select-none">
                            <div className="flex flex row justify-center rounded md:-mx-6 mt-8">
                              <img src={Booking} alt="main image" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-12"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            Data deep dive (drop-offs, replays, and support)
                          </h2>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            instrumentation baseline (old flow)
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              We tracked the flow of our users from dicovery of
                              the benefit to completing the booking. We, of
                              course, could not track what was going on in the
                              external site.
                            </li>
                            <li>90-day lookback; n ≈ 28,400 unique users.</li>
                          </ul>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            the funnel (old flow)
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              100% click on health check-up benefit (28,400)
                            </li>
                            <li>
                              17% successfully complete the booking. (4,800) →
                              completion 17%
                            </li>
                          </ul>
                          <h2
                            className="font-normal flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            We saw a significant drop-off from discovering the
                            benefit to completing the check-up. We wanted to
                            ensure we had significant increase in our booking
                            completion.
                          </h2>
                          <div className="pointer-events-none select-none">
                            <div className="flex flex row justify-center rounded md:-mx-6 mt-8">
                              <img src={Booking} alt="main image" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-12"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            project kickoff (how we aligned & moved)
                          </h2>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            workshop: Align on problems & outcomes
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              Inputs: Patron insights, funnel, support tags
                            </li>
                            <li>
                              Problem statements (“Users lose trust at redirect;
                              can’t see if it’s free for them”)
                            </li>
                            <li>
                              North-star metric: Completed checkups/user/month
                            </li>
                            <li>
                              Guardrails: safety & accuracy of medical info - no
                              dark patterns on consults
                            </li>
                            <li>
                              Ensuring AI summaries are not read as a
                              diagnoosis.
                            </li>
                            <li>
                              Service blueprint of Booking → Collection →
                              Processing → Report → Consult → Actions
                            </li>
                          </ul>
                          <h2
                            className="font-medium flex flex-row mb-2 mt-4"
                            style={{
                              fontSize: "14px",
                              color: "#182230",
                              lineHeight: "21px",
                            }}
                          >
                            hypotheses we wrote down
                          </h2>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                            <li>
                              H1: If we remove redirect, can we manage a booking
                              increase rate to 70%.
                            </li>
                            <li>
                              H2: If we add AI explanations for out-of-range
                              biomarkers, can we increase the rate of telehealth
                              consultations to 80%. (vs ~40% baseline)
                            </li>
                            <li>
                              H3: If consult is one-tap from report, can our
                              telehealth consultation increase to 80%%.
                            </li>
                          </ul>
                          <div className="pointer-events-none select-none">
                            <div className="flex flex row justify-center rounded md:-mx-6 mt-8">
                              <img src={Booking} alt="main image" />
                            </div>
                          </div>
                        </li>
                      </ol>
                      {/* 
                      <span className="block mt-6">Each plan includes:</span> */}
                    </h2>
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
                      <h2
                        className="font-normal flex flex-col"
                        style={{
                          fontSize: "14px",
                          color: "#182230",
                          lineHeight: "21px",
                        }}
                      >
                        We closely monitored our results post launch for 6
                        months. We saw a significant changes in our overall
                        health check-up experience.
                      </h2>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-[#182230] mt-4">
                        <li>+60% monthly bookings</li>
                        <li>Checkout completion 55% → 88%</li>
                        <li>−37% time to book</li>
                        <li>Report opens 50% → 90%</li>
                        <li>Doctor consult from report 20% → 72%</li>
                        <li>−30% support tickets</li>
                      </ul>
                    </h2>
                  </div>
                  <div alt="booking journey">
                    <h1
                      className="font-medium mb-4"
                      style={{ fontSize: "16px", color: "#182230" }}
                    >
                      and that's a wrap!
                    </h1>
                    <h2
                      className="font-normal"
                      style={{
                        fontSize: "14px",
                        color: "#182230",
                        lineHeight: "21px",
                      }}
                    >
                      thanks for going through one of my favourite projects i've
                      worked on. if you have any questions or just want to say
                      "wow you did an awesome job!" you can{" "}
                      <Link
                        to="/connect"
                        className="inline font-normal underline underline-offset-2 hover:underline decoration-[#182230]"
                        style={{ fontSize: "14px", color: "#182230" }}
                      >
                        reach out to me here.
                      </Link>
                    </h2>
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
