import Brand from '../../components/home/BrandSection';
import Faq from '../../components/home/Faq';
import FeaturesSection from '../../components/home/FeaturesSection';
import HeaderMain from '../../components/home/HeaderMain';
import HeaderSection from '../../components/home/HeaderSection';
import TimerSection from '../../components/home/TimerSection';

const HomeView = () => {
  return (
    <>
      <HeaderMain />
      <TimerSection />
      <HeaderSection />
      <FeaturesSection />
      <Brand />
      <Faq />
    </>
  );
};

export default HomeView;
