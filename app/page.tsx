import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-2">
      <Image
        src="/my-image.jpeg"
        alt="My photo"
        width={300}
        height={400}
        className="rounded-full mx-auto"
      />
      <p className="mx-auto">
        <a href="https://www.linkedin.com/in/chitram-dasgupta" target="_blank">
          <Image src="/linkedin.svg" alt="linkedIn" width={33} height={33} />
        </a>
      </p>
      <p>
        As a software developer, I find genuine joy in writing code that tells a
        story . When I am not immersed in the world of programming, you can find
        me lost in the pages of a good book, appreciating the timeless classics
        of cinema, or spending time with my Rottweiler buddy, Golu.
      </p>
    </main>
  );
}
