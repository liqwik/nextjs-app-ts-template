import SidebarLayout from '@/components/layouts/sidebar/SidebarLayout';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-slate-900 w-screen h-screen">
      <h1 className="text-4xl text-white font-medium tracking-wide">
        Welcome to Maxipleng!
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
