import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpIcon, ClockIcon, CheckCircleIcon, CurrencyDollarIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';
// 👈 1. Cart Context को इम्पोर्ट करें (पाथ एडजस्ट करें)
import { useCart } from '../../context/CartContext';

// --- (आपके सभी डेटा इंपोर्ट्स यहाँ रहेंगे) ---
import { products as HIDDEN_POTENTIAL_DATA } from '../../Pages/HiddenPotentialSeedJewelry';
import { dokraProducts as DOKRA_DATA } from '../../Pages/DaringDokraTribalJewelry';
import { jhumkaProducts as JHUMKA_DATA } from '../../Pages/SilkThreadJhumkaEarrings';
import { sareeProducts as SAREE_DATA } from '../../Pages/TussarSilkSarees';
import { ikatSareeProducts as IKAT_SAREE_DATA } from '../../Pages/IkatSarees';
import { maheshwariSareeProducts as MAHESHWARI_DATA } from '../../Pages/MaheshwariSilkSarees';
import { chanderiSareeProducts as CHANDERI_DATA } from '../../Pages/ChanderiCottonSarees';
import { southCottonSareeProducts as SOUTH_COTTON_DATA } from '../../Pages/SouthCottonSarees';
import { bagruSareeProducts as BAGRU_DATA } from '../../Pages/BagruBlockPrintSarees';
import { kotaDoriaSareeProducts as KOTA_DORIA_DATA } from '../../Pages/KotaDoriaSarees';
import { blouseProducts as BLOUSE_DATA } from '../../Pages/ReadyMadeSareeBlouses';
import { banarasiBlouseProducts as BANARASI_BLOUSE_DATA } from '../../Pages/BanarasiBrocadeBlouses';
import { topProducts as TOPS_DATA } from '../../Pages/SummerTops';
import { tunicProducts as TUNICS_DATA } from '../../Pages/WomenTunics';
import { kurtiProducts as KURTIS_DATA } from '../../Pages/WomenKurtis';
import { longSkirtsProducts as SKIRTS_DATA } from '../../Pages/LongSkirts';
import { palazzoProducts as PALAZZO_DATA } from '../../Pages/WomenPalazzoPants';
import { halterBlouseProducts as HALTER_BLOUSE_DATA } from '../../Pages/HalterNeckSareeBlouses';
import { linenProducts as LINEN_DATA } from '../../Pages/PremiumLinenStoles';
import { headbandProducts as HEADBAND_DATA } from '../../Pages/BohemianHeadbands';
import { diaryProducts as DIARIES_DATA } from '../../Pages/LeatherDiaries';
import { bookmarkProducts as BOOKMARK_DATA } from '../../Pages/PattachitraBookmarks';
import { toteBagProducts as TOTES_DATA } from '../../Pages/KalamkariToteBags';
import { batikSareeProducts as BATIK_DATA } from '../../Pages/BatikMulmulSarees';
import { chiffonBlouseProducts as CHIFFON_DATA } from '../../Pages/PrintedChiffonBlouses';
import { plainBlouseProducts as PLAIN_BLOUSE_DATA } from '../../Pages/PlainSilkBlouses';
import { ajrakhBlouseProducts as AJRAKH_BLOUSE_DATA } from '../../Pages/AjrakhBlouses';
import { bikiniBlouseProducts as BIKINI_BLOUSE_DATA } from '../../Pages/BikiniStyleBatikBlouses';
import { bempuriBlouseProducts as BEMPURI_DATA } from '../../Pages/BempuriHandloomBlouses';
import { terracottaProducts as TERRACOTTA_DATA } from '../../Pages/TerracottaJewelry';

// --- 1. सभी GRID डेटा को मर्ज करें (Same as before) ---
const ALL_PRODUCTS_DATA_GRID = [...HIDDEN_POTENTIAL_DATA, ...TERRACOTTA_DATA, ...DOKRA_DATA,
...JHUMKA_DATA,...SAREE_DATA, ...IKAT_SAREE_DATA, ...MAHESHWARI_DATA,...CHANDERI_DATA,...SOUTH_COTTON_DATA, ...BAGRU_DATA, ...KOTA_DORIA_DATA, ...BLOUSE_DATA, ...BANARASI_BLOUSE_DATA, ...TOPS_DATA, ...TUNICS_DATA, ...KURTIS_DATA, ...SKIRTS_DATA, ...PALAZZO_DATA, ...HALTER_BLOUSE_DATA, ...LINEN_DATA, ...HEADBAND_DATA, ...DIARIES_DATA, ...BOOKMARK_DATA,...TOTES_DATA, ...BATIK_DATA, ...CHIFFON_DATA, ...PLAIN_BLOUSE_DATA, ...AJRAKH_BLOUSE_DATA, ...BIKINI_BLOUSE_DATA, ...BEMPURI_DATA];


// --- 2. PDP डिटेल्स के साथ डेटा को एनहान्स करें (Same as before) ---
const getProductDetails = (sku) => {
    // Grid data से बेसिक प्रोडक्ट खोजें
    const gridProduct = ALL_PRODUCTS_DATA_GRID.find(p => p.sku === sku);

    if (!gridProduct) return null;

    let pdpDetails = {};

    // Note: You should expand this logic for all your SKU prefixes (DKR, JHM, SRE, etc.)
    if (sku.startsWith("SKU")) {
        pdpDetails = {
            images: [ gridProduct.imageUrl, "/images/pdp-thumb-1.jpg", "/images/pdp-thumb-2.jpg" ],
            description: "This is a unique handcrafted item made with organic materials.",
        };
    } else if (sku.startsWith("TC")) {
        pdpDetails = {
            images: [ gridProduct.imageUrl, "/images/terracotta-thumb-1.jpg" ],
            description: "Beautifully handpainted Terracotta jewelry, perfect for an ethnic look.",
        };
    } else {
        pdpDetails = { images: [gridProduct.imageUrl], description: `Details for ${sku} are coming soon.`};
    }

    // Grid data और PDP details को मर्ज करें
    return { ...gridProduct, ...pdpDetails };
};


const ProductDetailPage = () => {
    const { sku } = useParams();
    const product = getProductDetails(sku);

    // 👈 2. useCart Hook का उपयोग करें
    const { addToCart, toggleCartDrawer } = useCart();

    const [mainImage, setMainImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    // 👈 3. Selected Option के लिए State बनाएँ
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        if (product) {
            const displayImages = product.images || [product.imageUrl];
            setMainImage(displayImages[0]);

            // Set default selected option
            const options = product.options || product.sizes || [];
            if(options.length > 0) {
                setSelectedOption(options[0]);
            }
        }
    }, [sku]);


    if (!product) {
        return <div className="container mx-auto py-12 text-center text-xl font-semibold">Product not found for SKU: {sku}</div>;
    }

    // 👈 4. Add to Cart के लिए हैंडलर बनाएँ
    const handleAddToCart = () => {
        addToCart(
            product,
            quantity, // Selected quantity
            { selectedOption: selectedOption } // Selected size/color/option
        );
        toggleCartDrawer(); // Open cart drawer after adding
    };

    const displayImages = product.images || [product.imageUrl];
    const productOptions = product.options || product.sizes || [];

    // --- RENDERING ---
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* 1. Left Section: Images and Thumbnails (Same) */}
                <div className="w-full lg:w-1/2 flex gap-4">
                    <div className="flex flex-col space-y-3 w-20 hidden sm:flex">
                        {displayImages.map((img, index) => (
                            <img key={index} src={img} alt={`Thumbnail ${index + 1}`} onClick={() => setMainImage(img)}
                                className={`w-full h-20 object-cover cursor-pointer border-2 transition duration-200 ${mainImage === img ? 'border-indigo-600' : 'border-gray-300 hover:border-gray-500'}`} />
                        ))}
                    </div>
                    <div className="flex-grow">
                        <img src={mainImage} alt={product.name} className="w-full object-cover shadow-lg" />
                    </div>
                </div>

                {/* 2. Right Section: Details and CTA */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-sm font-light text-gray-500 mb-1">SKU: {product.sku}</h1>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
                    <div className="mb-6">
                        <span className="text-2xl font-bold text-gray-900">Your Price: </span>
                        <span className="text-3xl font-bold text-red-600 mr-2">{product.price}</span>
                        {product.originalPrice && <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>}
                    </div>
                    
                    {/* 👈 5. Conditional Dropdown for options */}
                    {productOptions.length > 0 && (
                        <div className="mb-6">
                            <label htmlFor="product-option" className="block text-sm font-medium text-gray-700 mb-2">
                                Select {product.sizes ? 'Size' : 'Option'}:
                            </label>
                            <select 
                                id="product-option"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                {productOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-xl hover:bg-gray-100">-</button>
                            <input type="text" readOnly value={quantity} className="w-12 text-center text-lg border-x border-gray-300 focus:outline-none" />
                            <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-xl hover:bg-gray-100">+</button>
                        </div>
                        <button
                            className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md transition duration-200"
                            onClick={handleAddToCart} // 👈 Updated onClick
                        >
                            <ArrowUpIcon className="w-5 h-5 inline-block mr-2 transform rotate-90" />
                            ADD TO CART
                        </button>
                    </div>

                    {/* ... (Rest of the right panel JSX) ... */}
                </div> 
            </div>

            {/* ... (Bottom Section with Tabs) ... */}
        </div>
    );
};

export default ProductDetailPage;

