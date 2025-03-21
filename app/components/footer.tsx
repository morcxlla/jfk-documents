import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-2 md:space-y-0 mt-8 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">rss</p>
          </Link>
        </li>

        <li>
          <Link
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/morcxlla/jfk-documents"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
          </Link>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed |{" "}
        <Link
          href="https://mcx.rocks"
          className="hover:text-neutral-800 dark:hover:text-neutral-100 underline transition-all"
        >
          MCX
        </Link>
      </p>
    </footer>
  );
}
