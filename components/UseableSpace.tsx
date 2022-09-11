import { ReactProps } from '../types';

const UseableSpace: React.FC<ReactProps> = ({ children }) => {
  return <div className='max-w-4xl mx-auto px-5'>{children}</div>;
};

export default UseableSpace;
