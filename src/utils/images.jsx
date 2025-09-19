// src/utils/imageFetcher.js
import axios from "axios";

export const fetchFoodImages = async () => {
  try {
    const url = "https://dummyjson.com/recipes";
    const response = await axios.get(url);

    // ناخد بس الصور من كل وصفة
    return response.data.recipes.map((recipe) => recipe.image);
  } catch (err) {
    console.error("Error fetching food images:", err);
    return ["/assets/menu/default.jpg"]; // fallback image
  }
};
