import type { NextPage } from 'next';
import PortfolioItem from '../components/PortfolioItem';

const Side: NextPage = () => {
  return (
    <>
      <div className='prose max-w-none'>
        <p>
          Outside of work I try to find time to build cool things on the web. My
          main project is Summit Bag. Where my side-hussles have a financial
          element then it goes through my company Rupicapra Ltd.
        </p>
      </div>
      <PortfolioItem title='Summit Bag' subTitle='Launched December 2021'>
        <p>
          A web application whith integrates with the Strava API and
          automatically identifies peaks and cols "bagged" in your activities.
          Launched November 2021, Summit Bag has over 10,000 registered users
          from 50 different countries as of September 2022.
        </p>
      </PortfolioItem>
      <PortfolioItem title='Ninety 180' subTitle='Launched sometime 2022'>
        <p>
          Ninety 180 is a quick and easy tool for planning your 90/180 day
          visa-free Schengen travel.
        </p>
      </PortfolioItem>
    </>
  );
};

export default Side;
