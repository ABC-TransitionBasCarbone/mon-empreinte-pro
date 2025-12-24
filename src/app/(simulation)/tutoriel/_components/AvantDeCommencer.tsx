import Trans from '@/components/translation/Trans'
import Emoji from '@/design-system/utils/Emoji'
import OrganisationDisclaimer from './avantDeCommencer/OrganisationDisclaimer'

export default function AvantDeCommencer() {
  return (
    <div className="border-rainbow relative mb-8 mt-6 flex flex-col rounded-xl bg-gray-100 p-7 md:mt-10">
      <div
        role="presentation"
        aria-hidden
        className="absolute -top-8 inline-block rounded-full bg-gray-100 p-4 text-3xl">
      </div>
      <h3 className="z-10">
        <Trans>Avant de commencer</Trans>
      </h3>
      <OrganisationDisclaimer />
      <div className="relative pl-8">
        <h4 className="relative overflow-visible font-bold">
          <Emoji className="absolute -left-8 top-0">👤</Emoji>
          <Trans>Le test est individuel !</Trans>
        </h4>
        <p className="text-sm md:text-base">
          <span className="hidden md:inline">
            {' '}
            <Trans>
              Cette phase de test est individuelle et se concentre sur certaines pratiques émissives typiques du travail tertiaire, secteur qui représente près de 80 % des emplois en France. Certaines spécificités métiers pouvant entraîner des émissions de GES ne sont pas encore couvertes dans cette version, mais elles seront adressées dans une prochaine mise à jour.             </Trans>
          </span>
        </p>
        <h4 className="relative overflow-visible font-bold mt-2">
          <Emoji className="absolute -left-8 top-0">❓</Emoji>
          <Trans>Vous commencez avec des réponses par défaut !</Trans>
        </h4>
        <p className="text-sm md:text-base">
          <span className="hidden md:inline">
            {' '}
            <Trans>Ne vous formalisez donc pas si vous ne partez pas de 0.</Trans>
          </span>
        </p>
      </div>
    </div>
  )
}
