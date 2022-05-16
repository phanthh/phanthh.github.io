import Timeline from '../components/Timeline';
import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Hau Phan">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400 ">
          <p>
            Hi, I'm Hau - an asprising data scientist, web developer and Linux
            enthusiast. Solving problems and learning news thing about the
            world, especially technology and mathematics, are two of my
            dedicated life-long hobbies. Complexity intrigues me deeply and
            always make me motivated to understand it. At the moment, I am
            studying full time at{' '}
            <a
              href="https://www.aalto.fi/en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Aalto University
            </a>{' '}
            and it has been a wonderful experience so far.
          </p>
          <p>
            I grew up in the sprawling city of Ho Chi Minh, graduated highschool
            majoring in mathematics. In 2019, I was lucky enough to become the
            valeditorian of the national college entrance exam in Vietnam and it
            is one of my proudest achievement.
          </p>
          <p>
            Around this time, I also developed an interest in programming and
            technology, which leads me to study Computer Science and eventually
            Data science. After my first college year, I decided to pursue a
            degree abroad and to start all over again in the beautiful country
            of Finland.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}
