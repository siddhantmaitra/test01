


export default function RecipeItems({ id, name, ingredients }) {

    return (
        <>
            <h2>{name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </>

    );

}