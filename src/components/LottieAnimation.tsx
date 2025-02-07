import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  path: string;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  path,
  className = 'w-64 h-64 mx-auto',
}) => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    if (!path) return;

    const loadLottie = async () => {
      try {
        const response = await fetch(path);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };

    loadLottie();
  }, [path]);

  if (!animationData) return <p>Loading animation...</p>;

  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
