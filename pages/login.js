import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function Login() {
  const supabase = useSupabaseClient()
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert('Erreur : ' + error.message)
    else alert('Vérifiez votre boite mail pour le lien magique.')
  }

  return (
    <main className="p-8">
      <h2 className="text-xl font-bold">Connexion</h2>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="mt-4 px-4 py-2 border rounded"
      />
      <button onClick={handleLogin} className="mt-4 px-4 py-2 bg-blue-600 text-white">Envoyer le lien magique</button>
    </main>
  )
}
