import Link from "next/link";
import Image from "next/image";

// Img
import github from "@/app/img/github.svg";
import discord from "@/app/img/discord.svg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-16 sm:gap-8 sm:p-24 p-4 pt-16 sm:pt-0 sm:h-screen max-w-7xl mx-auto">
      <div className="PageMid sm:flex-row flex-col flex w-full h-full gap-20 sm:gap-0 ">
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
      <div className="flex gap-4">
        {links.map((link) => (
          <Button key={link.title} asChild variant="ghost">
            <Link href={link.href}>
              <div className="flex items-center justify-center gap-2 p-4">
                <Image src={link.image} alt={link.title} className="w-6 h-6" />
                <span>{link.title}</span>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </main>
  );
}

const Signups = () => (
  <ul className="flex flex-col w-72 gap-4">
    {signups.map((signup) => (
      <Button
        key={signup.title}
        asChild
        variant="outline"
        className="h-fit p-4"
      >
        <Link href={signup.href}>
          <span className="text-xl">{signup.title}</span>
        </Link>
      </Button>
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

const links = [
  {
    title: "Discord",
    href: "https://discord.gg/gkCkydB8b6",
    image: discord,
  },
  {
    title: "Github",
    href: "https://github.com/jaydarius/nextjs-atx",
    image: github,
  },
];
