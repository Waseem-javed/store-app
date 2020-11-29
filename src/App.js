import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import ShopItem from './components/ShopItem/ShopItem';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Shoe from './components/Shoe/Shoe';


const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};


const sections=[
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
]


function Home() {
  return <div className="row justify-content-center px-2 my-2 mx-2">
    {sections.map(({id,title,imageUrl,size}) => (
    <Link to="/"  key={id} className={`card ${size ? 'col-sm-4': 'col-sm-3'} shadow-sm mx-1 p-0 my-1 text-center`}>
        <img src={imageUrl} alt="no img" height="200px" className="card-img-top" /> 
        <div className="card-title">{title.toUpperCase()}</div>
    </Link>
    ))}
</div>
}


function App() {
  return (
    <Router>
      <Header />
      <div className="container py-2">
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="Shop" element={<Shop />}>
            <Route path="/" element={<ShopItem shoes={shoes}/>} />
            <Route path=":slug" element={<Shoe shoes={shoes} />}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
