import { Suspense } from 'react'
import MealsGrid from '../components/meals/mealsGrid'
import { getMeals } from '../lib/meals'
import classes from './page.module.css'
import Link from 'next/link'

function Meals() {
  const meals = getMeals()

  return (
    <MealsGrid meals={meals} />
  )
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
        <p>Choose your favorite recipe and cook it yourself. It's easy and fun</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share your favorite recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}