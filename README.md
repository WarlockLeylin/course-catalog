# Course Catalog — Lab 1

A course catalog web application built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript** for the *Advanced Web Technologies* course.

## Features Implemented

* **File-Based Routing (App Router)**:
  * `/` — Home page introducing the catalog
  * `/about` — Static page describing the project
  * `/courses` — Server-rendered list of courses fetched via `getCourses()`
  * `/courses/[id]` — Dynamic route for individual course details
* **Server & Client Components**:
  * Server Components used by default across all routes (`page.tsx`, `layout.tsx`, `CourseCard.tsx`)
  * `LikeButton.tsx` implemented as an interactive Client Component using `'use client'` and `useState`
* **Next.js 16 Dynamic Parameters**:
  * Handled asynchronous `params` with `await params` inside `/courses/[id]/page.tsx`
  * Added `generateStaticParams()` for build-time static generation (SSG)
* **UI & States**:
  * `loading.tsx` for visual feedback during delayed data retrieval
  * `not-found.tsx` for custom 404 handling on missing course IDs
  * Shared root layout with navigation using `next/link` and Tailwind CSS styling

## Getting Started

First, install the dependencies:
* npm install

Run the development server:
* npm run dev

And finally, open
* http://localhost:3000

