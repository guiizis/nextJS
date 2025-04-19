export default function DynamicMealPage({ params }) {
  return (
    <h1>Meal page for {params.mealSlug}</h1>
  )
}