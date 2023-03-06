import { filterParams } from 'data/filter-params';

export function sortProductsByValue(products, value) {
  switch (value) {
    case filterParams.byPriceDown:
      return [
        ...products.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        }),
      ];

    case filterParams.byPriceUp:
      return [
        ...products.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        }),
      ];

    case filterParams.byRatingDown:
      return [...products.sort((a, b) => b.rating - a.rating)];

    case filterParams.byRatingUp:
      return [...products.sort((a, b) => a.rating - b.rating)];

    default:
      return [...products];
  }
}
