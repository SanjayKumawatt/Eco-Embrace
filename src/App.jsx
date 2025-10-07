import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import HiddenPotentialSeedJewelry from "./Pages/HiddenPotentialSeedJewelry";
import ProductDetailPage from "./Components/productDetail.jsx/ProductDetailPage";
import TerracottaJewelry from "./Pages/TerracottaJewelry";
import DaringDokraTribalJewelry from "./Pages/DaringDokraTribalJewelry";
import SilkThreadJhumkaEarrings from "./Pages/SilkThreadJhumkaEarrings";
import TussarSilkSarees from "./Pages/TussarSilkSarees";
import IkatSarees from "./Pages/IkatSarees";
import MaheshwariSilkSarees from "./Pages/MaheshwariSilkSarees";
import ChanderiCottonSarees from "./Pages/ChanderiCottonSarees";
import SouthCottonSarees from "./Pages/SouthCottonSarees";
import BagruBlockPrintSarees from "./Pages/BagruBlockPrintSarees";

import { CartProvider } from "./context/CartContext"; // 👈 Import CartProvider
import KotaDoriaSarees from "./Pages/KotaDoriaSarees";
import ReadyMadeSareeBlouses from "./Pages/ReadyMadeSareeBlouses";
import BanarasiBrocadeBlouses from "./Pages/BanarasiBrocadeBlouses";
import SummerTops from "./Pages/SummerTops";
import WomenTunics from "./Pages/WomenTunics";
import WomenKurtis from "./Pages/WomenKurtis";
import LongSkirts from "./Pages/LongSkirts";
import WomenPalazzoPants from "./Pages/WomenPalazzoPants";
import HalterNeckSareeBlouses from "./Pages/HalterNeckSareeBlouses";
import NoProductsPage from "./Pages/NoProductsPage";
import PremiumLinenStoles from "./Pages/PremiumLinenStoles";
import PremiumLinenStolesTwoCol from "./Pages/PremiumLinenStolesTwoCol";
import BohemianHeadbands from "./Pages/BohemianHeadbands";
import LeatherDiaries from "./Pages/LeatherDiaries";
import PattachitraBookmarks from "./Pages/PattachitraBookmarks";
import KalamkariToteBags from "./Pages/KalamkariToteBags";
import NoSalePage from "./Pages/NoSalePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "jewelry/hidden-potential-seed-jewelry",
          element: <HiddenPotentialSeedJewelry />
        },
        
        {
          path: "shop/clearance",
          element: <HiddenPotentialSeedJewelry />
        },

        {
          path: "product/:sku",
          element: <ProductDetailPage />
        },
        {
          path: "jewelry/earth-tones-terracotta-jewelry",
          element: <TerracottaJewelry />
        },
        {
          path: "jewelry/daring-dokra-tribal-jewelry",
          element: <DaringDokraTribalJewelry />
        },
        {
          path: "shop/dokra-craft-jewelry",
          element: <DaringDokraTribalJewelry />
        },

        {
          path: "jewelry/lightheart-paper-jewelry",
          element: <SilkThreadJhumkaEarrings />
        },
        {
          path: "sarees/tussar-silk-sarees",
          element: <TussarSilkSarees />
        },
        {
          path: "sarees/odisha-handloom-sarees",
          element: <IkatSarees />
        },
        {
          path: "sarees/maheshwari-sarees",
          element: <MaheshwariSilkSarees />
        },
        {
          path: "sarees/chanderi-sarees",
          element: <ChanderiCottonSarees />
        },
        {
          path: "sarees/chettinad-south-cotton-sarees",
          element: <SouthCottonSarees />
        },
        {
          path: "sarees/bagru-cotton-sarees",
          element: <BagruBlockPrintSarees />
        },
        {
          path: "sarees/kota-doria-sarees",
          element: <KotaDoriaSarees/>
        },
        {
          path: "blouses/sleeveless-blouses",
          element: <ReadyMadeSareeBlouses/>
        },
        {
          path: "shop/ready-made-saree-blouses",
          element: <ReadyMadeSareeBlouses/>
        },
        {
          path: "blouses/benarsi-brocade-blouses",
          element: <BanarasiBrocadeBlouses/>
        },
        {
          path: "shop/best-selling",
          element: <TussarSilkSarees/>
        },
        // Image Addin Bachi hai
        {
          path:"tops/tanks-&-tops",
          element:<SummerTops/>
        },
        {
          path:"tops/short-tops-&-tunics",
          element:<WomenTunics/>
        },
        {
          path:"tops/kurtis",
          element:<WomenKurtis/>
        },
        {
          path:"skirts/skirts",
          element:<LongSkirts/>
        },
        {
          path:"skirts/palazzo-pants",
          element:<WomenPalazzoPants/>
        },
        {
          path:"vintage/kaftans",
          element:<NoProductsPage/>
        },
        {
          path:"vintage/ruffled-tops",
          element:<NoProductsPage/>
        },
        {
          path:"vintage/halter-tops",
          element:<HalterNeckSareeBlouses/>
        },
        {
          path:"vintage/tube-dress-pants",
          element:<NoProductsPage/>
        },
        {
          path:"accessories/scarves",
          element:<PremiumLinenStoles/>
        },
        {
          path:"accessories/duppattas",
          element:<PremiumLinenStolesTwoCol/>
        },
        {
          path:"accessories/headbands",
          element:<BohemianHeadbands/>
        },
        {
          path:"accessories/gratitude-journals",
          element:<LeatherDiaries/>
        },
        {
          path:"accessories/bookmarks",
          element:<PattachitraBookmarks/>
        },
        {
          path:"accessories/bags",
          element:<KalamkariToteBags/>
        },
        {
          path:"sale",
          element:<NoSalePage/>
        },
        {
          path:"shop/new-arrivals",
          element:<TerracottaJewelry/>
        },
      ]
    }
  ])


  return (
    <div>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>

    </div>
  );
}

export default App;