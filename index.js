import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold">Bienvenue sur SuperBac Maths</h1>
      <p className="mt-4">Consultez gratuitement les énoncés d'annales.</p>
      <Link href="/annale">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Voir une annale</button>
      </Link>
    </main>
  )
}
