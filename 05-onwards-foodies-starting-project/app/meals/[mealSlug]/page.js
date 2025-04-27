import Image from 'next/image'
import classes from './page.module.css'
import { getMealBySlug } from '@/app/lib/meals'

export default function MealDetailsPage({ params }) {
  const meal = getMealBySlug(params.mealSlug)

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerContent}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>
            {meal.summary}
          </p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions.replace(/(?:\r\n|\r|\n)/g, '<br />')
        }}></p>
      </main>
    </>
  )
}