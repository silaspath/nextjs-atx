import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between sm:p-24 p-4 pt-16 sm:pt-0 h-screen max-w-7xl mx-auto">
      <div className="PageMid sm:flex-row flex-col flex w-full h-full gap-28 sm:gap-0 ">
        <div className="Left w-full flex flex-col justify-center items-center sm:items-start gap-4">
          <h1 className="text-3xl sm:text-6xl font-bold">Next.js ATX Meetup</h1>
          <h2 className="text-2xl sm:text-4xl text-center sm:text-left">
            Every 2nd Thursday of the month
          </h2>
        </div>
        <div className="Right w-full justify-center items-center flex flex-col">
          <div className="flex flex-col p-4 rounded-lg items-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-semibold">RSVP</h2>
            <Signups />
          </div>
        </div>
      </div>
    </main>
  );
}

const Signups = () => (
  <ul className="flex flex-col w-72 gap-4">
    {signups.map((signup) => (
      <Link
        key={signup.title}
        href={signup.href}
        className="border border-neutral-700 p-4 rounded-md"
      >
        <span className="text-xl">{signup.title}</span>
      </Link>
    ))}
  </ul>
);

const signups = [
  {
    title: "Luma",
    href: "https://lu.ma/6ea9w6ri",
  },
  {
    title: "Meetup",
    href: "https://www.meetup.com/next-js-atx",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/next-js-atx",
  },
  {
    title: "Eventbrite",
    href: "https://eventbrite.com",
  },
];
