import type { NextPage } from 'next';
import PortfolioItem from '../components/PortfolioItem';

const Work: NextPage = () => {
  return (
    <>
      <PortfolioItem title='FATMAP' subTitle='Since September 2022'>
        <p>
          I joined FATMAP as a Senior Web Engineer in September 2022. FATMAP has
          an awesome product which lines up with my passions for the outdoors,
          an interesting stack, and a cool office in Chamonix - applying to work
          here was a no-brainer.
        </p>
      </PortfolioItem>
      <PortfolioItem
        title='Nevis Technology'
        subTitle='December 2018 - September 2022'>
        <p>
          I co-founded Nevis Technology along with three other directors at the
          end of 2018. Together with my brother Ben, I led the development of a
          software suite which included both desktop and web applications
          powering the same web user interface.
        </p>
        <p>
          By the time I got itchy feet we were a team of nine and we had managed
          to bootstrap the company to a turnover of over £1 million without any
          investment.
        </p>
      </PortfolioItem>
      <PortfolioItem title='Icon Software' subTitle='June 2012 - November 2018'>
        <p>
          Developing bespoke software for the sophisticated processing and
          analysis of meteorological and oceanographic data. This is where I
          learnt to code, mentored by my big bro. During my time at Icon we
          probably delivered ~8 new applications to clients.
        </p>
      </PortfolioItem>
      <PortfolioItem title='BP' subTitle='October 2011 - March 2012'>
        <p>
          First job after university - manual software testing. It wasn't a heap
          of fun but was interesting enough to see such a huge operation from
          the inside.
        </p>
      </PortfolioItem>
      <PortfolioItem
        title='Higher Education'
        subTitle='October 2008 - June 2011'>
        <p>I have a first class BA in Physics from the University of Oxford.</p>
      </PortfolioItem>
    </>
  );
};

export default Work;
