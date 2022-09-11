import { ReactProps } from '../types';

const PortfolioItem: React.FC<
  ReactProps & { title: string; subTitle: string }
> = ({ title, subTitle, children }) => {
  return (
    <section className='my-12 border-l-2 pl-5'>
      <h3 className='text-3xl md:text-3xl'>{title}</h3>
      <div className='font-mono text-lg'>{subTitle}</div>
      <div className='pt-2 prose max-w-none'>{children}</div>
    </section>
  );
};

export default PortfolioItem;
