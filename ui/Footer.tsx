import { RoughNotation } from "react-rough-notation"
import cx from "clsx"
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import { ThemeSelect } from "./ThemeSelect"

export const Footer = () => {
  return (
    <div className="mt-24 pb-36">
      <div className="max-w-4xl px-4 mx-auto text-gray-800">
        <div className="pb-8 mb-2 border-t-2 border-gray-300"></div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p>Built with Next.js & ▲ Vercel</p>
          {/* <div className="pt-2 space-x-6 font-medium lg:pt-0">
          <a
            href="https://instagram.com/minumboba"
            className={cx(
              "transition-colors hover:text-sky-500",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/leonardodika/"
            className={cx(
              "transition-colors hover:text-sky-500",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            Linkedin
          </a>
          <a
            href="https://github.com/andikaleonardo"
            className={cx(
              "transition-colors hover:text-sky-500",
              FOCUS_VISIBLE_OUTLINE,
            )}
          >
            GitHub
          </a>
          </div> */}
        </div>
        <div id="skill">
          <ThemeSelect />
        </div>
      </div>
    </div>
  )
}
