import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import me from "../assets/me.png";
import test from "../assets/test.png";

const Navbar = () => {
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-2xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-24">
          <div className="grid w-8 h-8 mb-8 group">
            <a alt="logo" aria-label="Go to homepage" href="/">
              <img width="32" height="32" src={logo} alt="logo" />
            </a>
          </div>
          <motion.div
            className="flex flex-col gap-24 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-1 w-fit">
                <h1 className="inline font-medium" style={{ fontSize: "20px" }}>
                  noirrit chaki
                </h1>
                <h2 className="inline font-light" style={{ fontSize: "14px" }}>
                  <span>product designer at </span>
                  <a
                    href="https://www.plumhq.com/"
                    className="underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  >
                    PlumHQ
                  </a>
                </h2>
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="/about"
                  className="inline font-light text-zinc-400 underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  style={{ fontSize: "14px" }}
                >
                  about
                </a>
                <a
                  href="/connect"
                  className="inline font-light text-zinc-400 underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  style={{ fontSize: "14px" }}
                >
                  connect
                </a>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <img
                src={me}
                alt="an image of me"
                width={512}
                height={512}
                className="object-cover"
              />
            </div> */}

            {/* work section */}

            <div className="z-10 flex flex-col gap-2 w-fit shrink-0">
              <h2 className="inline font-semibold" style={{ fontSize: "14px" }}>
                work
              </h2>

              {/* start of the work list */}

              <motion.div
                className="relative w-fit"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="#"
                  className="relative inline-flex flex-col gap-1 py-2 no-underline  text-black text-black"
                >
                  <span className="underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-transparent">
                    cashless claims(placeholder)
                  </span>
                  <span className="text-sm font-normal text-zinc-400">
                    2024
                  </span>

                  {/* case study preview on hover */}

                  <motion.img
                    src={test}
                    alt="preview image"
                    className="absolute top-[-10px] left-[210%] w-32 h-32 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>

              <span className="inline w-fit">
                <a
                  href="#"
                  className="relative inline-flex flex-col gap-1 py-2 no-underline  text-black text-black"
                >
                  <span className="underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-transparent">
                    plum health wallet(placeholder)
                  </span>
                  <span className="text-sm font-normal text-zinc-400">
                    2024
                  </span>
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
