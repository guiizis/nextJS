import sql from 'better-sqlite3';

const db = sql('meals.db')

export function getMeals() {
  // throw new Error('Database not initialized. Please run initdb.js first.');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMealBySlug(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}