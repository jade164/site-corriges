import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Bienvenue sur SuperBac Maths !
        </h2>
        <p className="text-gray-700 text-lg">
          Prépare ton bac sereinement avec des annales corrigées, des explications claires et des ressources adaptées.
        </p>
      </div>
    </Layout>
  );
}
