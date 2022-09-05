import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';
import Header from './Page/Header';
import Footer from './Page/Footer';

function App() {
  return (
    <div>
      <Header/>
      <MenuUtama/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>

    </div>
  );
}

export default App;
