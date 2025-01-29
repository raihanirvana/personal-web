import Header from '../../components/NavigationBar/NavigationBar.component';
import ContactsList from '../../components/ContactsList/ContactsList.component';

const Home = () => (
  <div className="w-full bg-[url('assets/home-background.jpg')] bg-cover bg-no-repeat bg-[center_bottom_0.1rem] h-screen">
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2">
      <Header />
    </div>
    <div className="fixed bottom-0 left-40 pb-10">
      <ContactsList />
    </div>
  </div>
);

export default Home;
