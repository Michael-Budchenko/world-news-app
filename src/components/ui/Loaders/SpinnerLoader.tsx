import { cn } from '@/libs/utils/classNameHelper';

interface SpinnerLoaderProps {
  className?: string;
}

const SpinnerLoader = ({ className = '' }: SpinnerLoaderProps) => {
  return <div className={cn('loader-spinner', { [className]: Boolean(className) })}></div>;
};

export default SpinnerLoader;
