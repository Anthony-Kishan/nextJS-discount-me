// import { Restaurant } from '@/types/restaurant'
// import { RestaurantCard } from './restaurant-card'

// interface RestaurantGridProps {
//     restaurants: Restaurant[]
// }

// export function RestaurantGrid({ restaurants }: RestaurantGridProps) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {restaurants.map((restaurant) => (
//                 <RestaurantCard key={restaurant.id} restaurant={restaurant} />
//             ))}
//         </div>
//     )
// }

import { Restaurant } from '@/types/restaurant';
import { RestaurantCard } from './restaurant-card';

interface RestaurantGridProps {
  restaurants: Restaurant[];
  isHomePage?: boolean; // Optional prop to check if it's the home page
}

export function RestaurantGrid({ restaurants, isHomePage = false }: RestaurantGridProps) {
  const numCardsToShow = isHomePage ? 3 : 12; // Show 3 cards on home page, 12 cards on explore page

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {restaurants.slice(0, numCardsToShow).map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
