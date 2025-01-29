import Header from "../../components/NavigationBar/NavigationBar.component";
import ContactsList from "../../components/ContactsList/ContactsList.component";

const Home = () => (
  <div className="w-full bg-[url('assets/home-background.jpg')] bg-cover bg-no-repeat bg-[center_bottom_0.1rem] h-screen">
    <Header />
    <div className="absolute bottom-0 left-40 pb-10">
    <ContactsList />
    </div>
  </div>
)

export default Home;
