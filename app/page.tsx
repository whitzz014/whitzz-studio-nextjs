import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="mb-12 ">
      <ul className="flex w-full justify-evenly text-lg font-medium mt-8">
          <li className="absolute left-10 headerHover">
            <Image
              src="/images/white-w.svg"
              alt="Whitzz Studio Logo"
              width={40}
              height={40}
            />
          </li>
          <li className="headerHover">Calendar</li>
          <li className="headerHover">Faith</li>
          <li className="headerHover">Finance</li>
          <li className="headerHover">Fitness</li>
          <li className="headerHover">Portfolio</li>
          
        </ul>
      </header>
      <div className="openingScreen">
        <h1 className="welcomeH1">Welcome To Whitzz Studio</h1>

      </div>

      <div className="calenderSection">
        <h2 className="titleHeads">Calendar</h2>
      </div>
    </main>
  );
}
