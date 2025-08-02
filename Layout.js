import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Barre de navigation */}
      <header className="bg-blue-700 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">SuperBac Maths</h1>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:underline">Présentation</Link>
            </li>
            <li>
              <Link href="/annale" className="hover:underline">Annales</Link>
            </li>
            <li>
              <Link href="/abonnement" className="hover:underline">Abonnements</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow bg-blue-50 p-6">
        <div className="container mx-auto">{children}</div>
      </main>

      {/* Pied de page */}
      <footer className="bg-blue-100 text-center py-4 text-sm text-gray-700">
        © {new Date().getFullYear()} SuperBac Maths – Tous droits réservés.
      </footer>
    </div>
  );
}
