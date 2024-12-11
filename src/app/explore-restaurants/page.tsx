// 'use client'
// import { SearchBox } from "../../components/ui/search-box";
// import { RestaurantGrid } from '@/components/restaurant-grid';
// import { restaurants } from '@/data/restaurants';

// export default function ExploreRestaurants() {
//     return (
//         <section className="container mx-auto px-4 py-12 relative">
//             <div className="flex items-center justify-between mb-4">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
//                     Explore <span className="text-[#FF7D29]">Restaurants</span>
//                 </h1>
//                 <SearchBox></SearchBox>
//             </div>

//             <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-lg">
//                 Check your city Near by <br></br> Restaurant
//             </p>
//             <RestaurantGrid restaurants={restaurants} />
//         </section>
//     )
// }




'use client'
import { SearchBox } from "../../components/ui/search-box";
import { RestaurantGrid } from '@/components/restaurant-grid';
import { restaurants } from '@/data/restaurants';

export default function ExploreRestaurants() {
  return (
    <section className="container mx-auto px-4 py-12 relative">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
          Explore <span className="text-[#FF7D29]">Restaurants</span>
        </h1>
        <SearchBox />
      </div>

      <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-lg">
        Check your city Near by <br /> Restaurant
      </p>

      {/* Pass isHomePage={false} for Explore Restaurants page */}
      <RestaurantGrid restaurants={restaurants} isHomePage={false} />
    </section>
  );
}