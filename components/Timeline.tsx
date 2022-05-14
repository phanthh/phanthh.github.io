import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Year>2018</Year>
    <ul>
      <Step title="SAT and IELTS 📝">
        I finished my IELTS and SAT relatively late, but the score was
        surprisingly good (7.5 and 1520). I started to prepare my applications
        for university in the US but then realized the financial burden that it
        would have on my family if I decided to go. It was a tough decision.
      </Step>
      <Step title="Realizing my peers are going international ✈️">
        Many of my fellow peers started to prepare for college in the US, Europe
        and Singapore, which is something I have no experience or even
        considered at all. I was surprised and feel that I should do something
        about it.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Got accepted to High School for the Gifted 💯">
        It was the one of the most prestigous public school in Southern Vietnam
        and the acceptance rate was only 0.5% for the Math major. I was
        extremely lucky. The class was filled with talented students, not only
        excell at math but nearly all subjects: Physic, History, Foreign
        Language,... I feel humbled, inspired but also scared.
      </Step>
      <Step title="Silver medal 🥈 - Secondary school Math olympiad">
        I didn't pick up mathematics right away, but I started to like the
        euphoria when discovering an unique solution on my own and the
        excitement during competitions. Suprisingly, I got into the municipal
        team earn myself a medal.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="First Tablet 💻">
        This was the earliest portal to the Internet at the time for me and for
        my whole family since we didn't earn much during the time. The tablet
        was a Blackberry Playbook and a whole lot of Minecraft videos was
        watched by me at the time.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="First Encyclopedia 📖">
        My uncle give me a big encyclopedia full of imagery about the world as a
        Chrismas present. Looking back, this is one of the crucial moment in my
        life and I got really into science and mathematics at the time. Thank
        you uncle Hoang!
      </Step>
    </ul>
    <Divider />
    <Year>2001</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Ignite 2021! 🔥">
          Ignite was a startup acceleration program hosted annually every summer
          at Aalto. I was a cofounder and was in charge of the development of
          our company websites and piloting product. I also learned about many
          aspect of entrepreneurship and business managment during the program.
          It was a eye-opening experience for me.
        </Step>
        <Step title="Finally arrive in Finland! 🇫🇮"></Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Got accepted to Aalto! 🎒">
          I have always dreamt of studying abroad in Europe and Finland stoodout
          for me as a perfect place for an introvert like me 😅. When I received
          the acceptance email, I keep smiling like an idiot for the entire of
          my computer science class lol. However, COVID hits and unfortunately,
          all my plans were thrown out of the window 🥺.
        </Step>
        <Step title="First year in HCMUT - Computer Science">
          This was also the time I got my first laptop that is able to run a
          browser properly. Honestly, I nearly switch my major to International
          Business at a prestigous business school in Vietnam, but decided to go
          with my gut and go for Computer Science. This was one of few time that
          I made a good decision 😆.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="College entrance exam 🏆">
          I became a valedictorian! To say that I was surprised was an
          underestimate. I studied really hard and I was grateful that all the
          hardwork and long hours paid off. I couldn't have done it without the
          support from my family though.
        </Step>
      </ul>
      <Divider />
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
