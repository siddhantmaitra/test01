// import { recipes } from './data.js';
import RecipeItems from "./RecipeItems";
import { recipes } from "./recipeData";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes:</h1>
      {recipes.map(recipeItem =>
        <div>
          <RecipeItems {...recipeItem} key={recipeItem.id}/>
        </div>
      )}
    </div>
  );
}
