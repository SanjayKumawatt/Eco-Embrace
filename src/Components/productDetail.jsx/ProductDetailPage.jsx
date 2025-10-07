import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpIcon, ClockIcon, CheckCircleIcon, CurrencyDollarIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

// 👈 **डेटा इंपोर्ट:** दोनों कंपोनेंट से डेटा इंपोर्ट करें
// NOTE: आपको इन दोनों इंपोर्ट पाथ्स को अपने फाइल स्ट्रक्चर के अनुसार एडजस्ट करना होगा।
import { products as HIDDEN_POTENTIAL_DATA } from '../../Pages/HiddenPotentialSeedJewelry';
import { dokraProducts as DOKRA_DATA, dokraProducts } from '../../Pages/DaringDokraTribalJewelry';
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


import { terracottaProducts as TERRACOTTA_DATA } from '../../Pages/TerracottaJewelry'; // Assuming you named the file TerracottaJewelry.jsx

// --- 1. सभी GRID डेटा को मर्ज करें ---
const ALL_PRODUCTS_DATA_GRID = [...HIDDEN_POTENTIAL_DATA, ...TERRACOTTA_DATA, ...DOKRA_DATA,
...JHUMKA_DATA,...SAREE_DATA, ...IKAT_SAREE_DATA, ...MAHESHWARI_DATA,...CHANDERI_DATA,...SOUTH_COTTON_DATA, ...BAGRU_DATA, ...KOTA_DORIA_DATA, ...BLOUSE_DATA, ...BANARASI_BLOUSE_DATA, ...TOPS_DATA, ...TUNICS_DATA, ...KURTIS_DATA, ...SKIRTS_DATA, ...PALAZZO_DATA, ...HALTER_BLOUSE_DATA, ...LINEN_DATA, ...HEADBAND_DATA, ...DIARIES_DATA, ...BOOKMARK_DATA,...TOTES_DATA, ...BATIK_DATA, ...CHIFFON_DATA, ...PLAIN_BLOUSE_DATA, ...AJRAKH_BLOUSE_DATA, ...BIKINI_BLOUSE_DATA, ...BEMPURI_DATA];


// --- 2. PDP डिटेल्स के साथ डेटा को एनहान्स करें (Merge Logic) ---
const getProductDetails = (sku) => {
    // Grid data से बेसिक प्रोडक्ट खोजें
    const gridProduct = ALL_PRODUCTS_DATA_GRID.find(p => p.sku === sku);

    if (!gridProduct) return null;

    let pdpDetails = {};

    // 👈 LOGIC FOR SEED JEWELRY (SKU001)
    if (sku === "SKU001") {
        pdpDetails = {
            images: [
                gridProduct.imageUrl,
                "/images/pdp-thumb-1.jpg", // Add specific PDP images here
                "/images/pdp-thumb-2.jpg",
                "/images/pdp-thumb-3.jpg",
            ],
            originalPrice: "Rs. 4,000.00",
            description: "This unique handcrafted necklace is made with organic seeds and beaded threads. It features a beautiful sunflower pendant.",
            detailedPoints: [
                "**“Beaded Sunflower Necklace”** Cordon with wire, Suncatcherin the traditional sense, but can also be used as a rearview mirror ornament or also as a certificate/bookmark. Embosom the beauty wherever the money work, legendary good luck sign in a never-transtory way.",
                "**“Beaded Thread Necklace”** The simplicity of the design is influenced by the beaded thread, adding a touch of sophistication to the overall look.",
                "**\"Handling\"** Get Gifting! Complement your wardrobe with this trending seed necklace, elegantly perfect for coordinating with the family.",
            ],
        };
    }
    // 👈 LOGIC FOR TERRACOTTA JEWELRY (TC201 - Example for the new page)
    else if (sku.startsWith("TC")) {
        // Example structure for a terracotta product
        pdpDetails = {
            images: [
                gridProduct.imageUrl,
                "/images/terracotta-thumb-1.jpg",
                "/images/terracotta-thumb-2.jpg",
            ],
            originalPrice: sku === "TC201" ? "Rs. 3,500.00" : undefined, // Example of specific original price
            description: sku === "TC201" ? "New Beginnings Terracotta Set, handpainted with a good luck mural design. Perfect artisan jewelry for traditional Indian attire." : `Terracotta details for ${sku} are available here.`,
            detailedPoints: [
                "**Material:** Terracotta, organic and eco-friendly.",
                "**Craftsmanship:** Handpainted by skilled artisans.",
            ],
        };
    }

    // 👈 Fallback for other SKUs
    else {
        pdpDetails = {
            images: [gridProduct.imageUrl],
            description: `Detailed description for product ${sku} is coming soon.`,
            originalPrice: undefined,
            detailedPoints: [],
        };
    }

    // Grid data और PDP details को मर्ज करें
    return { ...gridProduct, ...pdpDetails };
};


const ProductDetailPage = () => {
    const { sku } = useParams();
    const product = getProductDetails(sku);

    const displayImages = product?.images || (product?.imageUrl ? [product.imageUrl] : []);

    const [mainImage, setMainImage] = useState(displayImages[0]);
    const [quantity, setQuantity] = useState(1);

    // Ensure main image updates when SKU changes
    useEffect(() => {
        if (product) {
            // Re-call setMainImage to show the correct image for the new SKU
            setMainImage(displayImages[0]);
        }
    }, [sku, product?.id]);


    if (!product) {
        return <div className="container mx-auto py-12 text-center text-xl font-semibold">Product not found for SKU: {sku}</div>;
    }

    // --- RENDERING ---
    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* 1. Left Section: Images and Thumbnails */}
                <div className="w-full lg:w-1/2 flex gap-4">

                    {/* Thumbnails Column */}
                    <div className="flex flex-col space-y-3 w-20 hidden sm:flex">
                        {displayImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setMainImage(img)}
                                className={`w-full h-20 object-cover cursor-pointer border-2 transition duration-200 
                                            ${mainImage === img ? 'border-indigo-600' : 'border-gray-300 hover:border-gray-500'}`}
                            />
                        ))}
                    </div>

                    {/* Main Image Display */}
                    <div className="flex-grow">
                        <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* 2. Right Section: Details and CTA */}
                <div className="w-full lg:w-1/2">
                    {/* Product Name */}
                    <h1 className="text-sm font-light text-gray-500 mb-1">SKU: {product.sku}</h1>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        {product.name}
                    </h2>

                    {/* Price */}
                    <div className="mb-6">
                        <span className="text-2xl font-bold text-gray-900">Your Price: </span>
                        <span className="text-3xl font-bold text-red-600 mr-2">
                            {product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                                {product.originalPrice}
                            </span>
                        )}
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center space-x-4 mb-6">
                        {/* Quantity Control */}
                        <div className="flex border border-gray-300 rounded-md overflow-hidden">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="px-3 py-2 text-xl hover:bg-gray-100"
                            >-</button>
                            <input
                                type="text"
                                readOnly
                                value={quantity}
                                className="w-12 text-center text-lg border-x border-gray-300 focus:outline-none"
                            />
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="px-3 py-2 text-xl hover:bg-gray-100"
                            >+</button>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            className="flex-grow bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md shadow-md transition duration-200"
                            onClick={() => console.log(`Added ${quantity} of ${product.sku} to cart`)}
                        >
                            <ArrowUpIcon className="w-5 h-5 inline-block mr-2 transform rotate-90" />
                            ADD TO CART
                        </button>
                    </div>

                    {/* Payment/Security Icons */}
                    <div className="mb-6">
                        <p className="text-sm font-semibold mb-2">GUARANTEED SAFE & SECURE CHECKOUT</p>
                        {/* Placeholder for payment icons */}
                        <img src="/images/payment-icons.png" alt="Payment Methods" className="h-6" />
                    </div>

                    {/* Shipping/Delivery Text */}
                    <p className="text-sm text-gray-700 mb-6">
                        Order in the next <span className="font-bold text-red-600">01 HOUR 25 MINS 17 SECS</span> to get it by <span className="font-bold text-gray-900">NOV 28, 2025</span>
                    </p>

                    {/* Trust Badges */}
                    <div className="flex justify-between items-center text-center border-t border-b border-gray-200 py-4 mb-8">
                        <div className="flex flex-col items-center">
                            <ClockIcon className="w-6 h-6 text-green-600" />
                            <span className="text-xs mt-1">FREE</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircleIcon className="w-6 h-6 text-green-600" />
                            <span className="text-xs mt-1">24 HR</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <CurrencyDollarIcon className="w-6 h-6 text-green-600" />
                            <span className="text-xs mt-1">$</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <CubeTransparentIcon className="w-6 h-6 text-green-600" />
                            <span className="text-xs mt-1">Trust</span>
                        </div>
                    </div>
                </div> {/* End Right Section */}
            </div>

            {/* 3. Bottom Section: Tabs (Description, Shipping, Reviews) */}
            <div className="mt-12">
                <div className="border-b border-gray-200">
                    <nav className="flex space-x-6" aria-label="Tabs">
                        <button className="py-2 px-1 border-b-2 border-indigo-600 font-medium text-sm text-indigo-600">Description</button>
                        <button className="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Shipping</button>
                        <button className="py-2 px-1 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300">Reviews</button>
                    </nav>
                </div>

                <div className="py-6 text-gray-700 space-y-4 text-sm">
                    {/* Description Content */}
                    <p className="font-semibold">{product.description}</p>
                    <p>SADDHABEADS, SEED BEADS, Seed Beads Earring, Seed Beads Necklace, Beaded Thread Necklace, Bead Seed Necklace, Beaded Necklace, Seed Jewelry</p>

                    {/* Detailed Points */}
                    <div className="space-y-3">
                        {product.detailedPoints && product.detailedPoints.map((point, index) => (
                            <p key={index} className="flex items-start">
                                <span className="text-yellow-600 text-xl mr-2">★</span>
                                <span className="flex-grow" dangerouslySetInnerHTML={{ __html: point }}></span>
                            </p>
                        ))}
                    </div>
                </div>
            </div> {/* End Bottom Section */}
        </div>
    );
};

export default ProductDetailPage;