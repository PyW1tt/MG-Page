import Navbar from "./component/mainmenu/Navbar";
import Menu from "./component/mainmenu/Menu";
import Header from "./component/Header";
import View from "./component/View";
import Interior from "./component/Interior";
import Easy from "./component/Easy";
import Performance from "./component/Performance";
import Charge from "./component/Charge";
import ISmart from "./component/ISmart";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="w-full ">
      <Navbar />
      <Menu />
      <Header />
      <View />
      <Interior />
      <Easy />
      <Performance />
      <Charge />
      <ISmart />
      <Footer />
    </div>
  );
}

export default App;
