import Posts from "./components/Posts"

// najpierw zbudowac (build) projekt, wtedy czas revalidate sie zaktualizuje (za kazdym po zmianie przebudowac) 
// next build, next start (dziala tylko na produkcji)
// rewalidacja co 10s, dodac plik lub zmienic w app/blogposts
// export const revalidate = 10;

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Dave</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}
