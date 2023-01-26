import styles from '@/styles/Home.module.scss';
import PhotoMenu from '@/Components/PhotoMenu/PhotoMenu';
import NewBlock from '@/Components/NewBlock/NewBlock';
import AboutShop from '@/Components/AboutShop/AboutShop';
import Ticker from '@/Components/Ticker/Ticker';
import PopularGoods from '@/Components/PopularGoods/PopularGoods';
import SuitsBlock from '@/Components/SuitsBlock/SuitsBlock';
import Benefits from '@/Components/Benefits/Benefits';
import Instagram from '@/Components/InstagramBlock/Instagram';

function Home() {
  return (
    <>
      <PhotoMenu />
      <NewBlock />
      <AboutShop />
      <Ticker />
      <PopularGoods />
      <SuitsBlock />
      <Benefits />
      <Instagram />
    </>
  );
}
export default Home;
