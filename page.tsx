import Link from 'next/link';
import { FaComments, FaImage, FaFileAudio, FaFilePdf, FaEye, FaCog } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          ChatGPT Clone by Antoine
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard 
            href="/chat"
            icon={<FaComments className="text-3xl" />}
            title="Chat avec GPT-4o"
            description="Discutez avec l'IA en utilisant le modèle GPT-4o"
          />
          
          <FeatureCard 
            href="/image-generation"
            icon={<FaImage className="text-3xl" />}
            title="Génération d'images"
            description="Créez des images avec DALL-E 3"
          />
          
          <FeatureCard 
            href="/audio-transcription"
            icon={<FaFileAudio className="text-3xl" />}
            title="Transcription audio"
            description="Convertissez l'audio en texte avec Whisper"
          />
          
          <FeatureCard 
            href="/pdf-analysis"
            icon={<FaFilePdf className="text-3xl" />}
            title="Analyse de PDF"
            description="Analysez des documents PDF avec O3-mini"
          />
          
          <FeatureCard 
            href="/image-analysis"
            icon={<FaEye className="text-3xl" />}
            title="Analyse d'images"
            description="Analysez des images avec GPT-4 Turbo Vision"
          />
          
          <FeatureCard 
            href="/settings"
            icon={<FaCog className="text-3xl" />}
            title="Paramètres"
            description="Configurez votre clé API OpenAI"
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ href, icon, title, description }: { 
  href: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) {
  return (
    <Link href={href}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        <div className="text-emerald-600 dark:text-emerald-400 mb-4">
          {icon}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
