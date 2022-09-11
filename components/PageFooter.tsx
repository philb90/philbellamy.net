import Head from 'next/head';
import NavElement from './NavElement';

const PageFooter: React.FC = () => {
  return (
    <footer className='border-t py-2 my-5 text-gray-500 text-sm'>
      Site created using NextJS / TypeScript / Tailwind CSS by Phil Bellamy.
    </footer>
  );
};

export default PageFooter;
