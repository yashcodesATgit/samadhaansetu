# AI Rules for CivicFix Application

This document outlines the core technologies used in the CivicFix application and provides guidelines for library usage to maintain consistency and best practices.

## Tech Stack

*   **Frontend Framework**: React.js
*   **Language**: TypeScript (preferred for all new components and logic)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS for utility-first styling
*   **Component Library**: shadcn/ui for pre-built, accessible UI components
*   **Icons**: Lucide React for vector icons
*   **Routing**: React Router for client-side navigation
*   **Backend/Database**: Supabase (client library installed)
*   **Package Manager**: npm

## Library Usage Rules

*   **React**: Use functional components and React Hooks for state management and side effects.
*   **TypeScript**: All new `.jsx` files should be converted to `.tsx` and new files should be created as `.tsx`. Leverage TypeScript for type safety and improved developer experience.
*   **Tailwind CSS**: All styling should be done using Tailwind CSS utility classes. Avoid custom CSS files unless absolutely necessary for complex, unique styles not achievable with Tailwind.
*   **shadcn/ui**: Utilize components from the shadcn/ui library whenever a suitable component exists. Do not modify shadcn/ui component files directly; create new components that wrap or extend them if customization is needed.
*   **Lucide React**: Use `lucide-react` for all icons in the application.
*   **React Router**: Implement `react-router-dom` for all application routing. Define routes in `src/App.tsx`.
*   **Supabase**: For any authentication, database interactions, or serverless functions, use the `@supabase/supabase-js` client library.
*   **State Management**: For local component state, use React's `useState` and `useReducer` hooks. For global state, consider `useContext` before introducing external state management libraries.
*   **New Components**: Always create new components in separate files within the `src/components/` directory. Keep components small and focused.
*   **Pages**: New pages should be created in `src/pages/` and integrated into the main routing in `src/App.tsx`.