import type { Metadata } from 'next';
import CandidatureSpontaneeClient from './CandidatureSpontaneeClient';

export const metadata: Metadata = {
  title: "Candidature spontanée",
  description: "Aucune offre ne correspond exactement à votre profil ? Dites-nous ce que vous cherchez, nos trois entités recrutent en continu.",
};

export default function Page() {
  return <CandidatureSpontaneeClient />;
}