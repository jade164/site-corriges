import { useSession } from '@supabase/auth-helpers-react'
import Link from 'next/link'

export default function Annale() {
  const session = useSession()
  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold">Sujet : Bac Maths 2022</h2>
      <p className="mt-4">[ÉNONCÉ COMPLET]</p>

      {!session ? (
        <div className="mt-6 p-4 border rounded">
          <p>Connectez-vous ou abonnez-vous pour voir le corrigé complet.</p>
          <Link href="/login"><button className="mt-2 px-4 py-2 bg-green-600 text-white">Connexion</button></Link>
          <Link href="/abonnement"><button className="ml-2 px-4 py-2 bg-purple-600 text-white">Abonnement</button></Link>
        </div>
      ) : (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="font-bold">Corrigé :</h3>
          <p>[CORRIGÉ DISPONIBLE ICI]</p>
        </div>
      )}
    </main>
  )
}
