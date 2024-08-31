"use strict";
/* 
Создайте класс CopyEntity. У него должен быть статический метод copyObject, 
который бы копировал любой объект. Метод copyObject принимает любой объект и возвращает его копию. 
*/

class CopyEntity {
  static copyObject(obj) {
    if (Array.isArray(obj)) {
      return obj.map((val) => CopyEntity.copyObject(val));
    } else if (typeof obj === "object" && obj !== null) {
      let newObj = {};
      for (let item in obj) {
        newObj[item] = CopyEntity.copyObject(obj[item]);
      }
      return newObj;
    } else {
      return obj;
    }
  }
}

const arr = [1, 2, 1, [1, 2, 3, [1, 2, 3]]];
const arr2 = CopyEntity.copyObject(arr);
console.log(arr);
console.log("--------------");
console.log(arr2);
arr.push("99");
arr2.push("55");
console.log(arr);
console.log("--------------");
console.log(arr2);
const productInfo = {
  id: 101,
  name: "Super Gadget",
  category: "Electronics",
  price: 299.99,
  currency: "USD",
  stock: 150,
  description:
    "The Super Gadget is a state-of-the-art electronic device designed to make your life easier and more fun. With its sleek design and advanced features, it's the perfect addition to your tech collection.",
  manufacturer: "GadgetCorp",
  weight: "1.5kg",
  dimensions: { width: "10cm", height: "15cm", depth: "2cm" },
  ratings: 4.5,
  reviews: [
    {
      user: "Jane Doe",
      rating: 5,
      comment: "Amazing product! Exceeded my expectations.",
    },
    {
      user: "John Smith",
      rating: 4,
      comment: "Very good, but could be a bit cheaper.",
    },
  ],
  warranty: "2 years",
};
console.log(productInfo);
const productInfo2 = CopyEntity.copyObject(productInfo);
console.log(productInfo2);
