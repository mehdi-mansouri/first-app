
import './App.css';
import React, { useState,useEffect } from 'react';
//import Product from '../Components/Products/Product/Product';
import Products from '../Components/Products/Products';
import Toolbar from '../Components/Products/Toolbars/Toolbars';
function App() {
  useEffect(
    ()=>{
      console.log('[app.js] use Effect');
    }
  );
  const [pData, setpData] = useState([
    {
      id: 1,
      ptitle: "T-Shirt Blue",
      prise: "30€",
      src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
    },
    {
      id: 2,
      ptitle: "T-Shirt Red",
      prise: "200€",
      src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
    },
    {
      id: 3,
      ptitle: "T-Shirt Pumma",
      prise: "10€",
      src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
    },
    {
      id: 4,
      ptitle: "T-Shirt Yellow",
      prise: "29€",
      src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
    }

  ]);
  const changeLanguage = (lang) => {
    if (lang === 'de') {
      setpData([
        {
          id: 1,
          ptitle: "T-Shirt Blue-DE",
          prise: "30€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
          id: 2,
          ptitle: "T-Shirt Red-DE",
          prise: "200€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
          id: 3,
          ptitle: "T-Pumma-DE",
          prise: "10€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
          id: 4,
          ptitle: "T-Shirt -DE",
          prise: "29€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        }

      ])

    } else {
      setpData([
        {
          id: 1,
          ptitle: "T-Shirt Blue",
          prise: "30€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
          id: 2,
          ptitle: "T-Shirt Red",
          prise: "200€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
          id: 3,
          ptitle: "T-Shirt Pumma",
          prise: "10€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        },
        {
          id: 4,
          ptitle: "T-Shirt Yellow",
          prise: "29€",
          src: "https://dkstatics-public.digikala.com/digikala-products/117515975.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90"
        }

      ])
    }
  }
  const [addrres, setAddress] = useState('First My app');
  const changeAddress = (e) => {
    setAddress(e.target.value);
  }
  const [isVisible, setIsVisible] = useState(false);
  const deleteProduct = (id) => {
    console.log(id)
    let index = pData.findIndex(p => p.id === id);
    if (index > -1) {
      let templateProduct = [...pData];
      templateProduct.splice(index, 1);
      setpData(templateProduct);
    }
  }
  const MyStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '10px'

  }
  
  return (
    <div className='app'>
      <Toolbar isVisible={isVisible} addrres={addrres} changeAddress={changeAddress} changeLanguage={changeLanguage} setIsVisible={setIsVisible}/>
      {isVisible ? <Products Data={pData} changeLanguage={changeLanguage} deleteProduct={deleteProduct} />: null}
    </div>
  );
}

export default App;
