/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

'use client'

import Trans from '@/components/translation/Trans'
import {
  tutorielClickFaq,
  tutorielClickQuestion,
} from '@/constants/tracking/pages/tutoriel'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import { trackEvent } from '@/utils/matomo/trackEvent'
import Image from 'next/image'
import OrganisationPrivacy from './autresQuestions/OrganisationPrivacy'

export default function AutresQuestions() {
  return (
    <div className="order-last mb-8 md:order-none">
      <h5 className="mb-2 text-lg">
        <Trans>Quelques explications</Trans>
      </h5>
      <ul className="mb-1 list-none p-0">
        <OrganisationPrivacy />
        <li className="mb-2" id={'empreinte'}>
          <details>
            <summary
              className="cursor-pointer text-sm font-bold text-primary-700 md:text-lg"
              onClick={() =>
                trackEvent(
                  tutorielClickQuestion('C’est quoi mon empreinte carbone ?')
                )
              }>
              <Trans>Qu’est-ce que l’empreinte carbone ?</Trans>
            </summary>
            <div className="my-2 ml-3.5 text-sm">
              <p>
                <Trans >
                  Les moyens de transport que nous utilisons, notre alimentation, ce que nous achetons, tout ce qui fait notre vie quotidienne nécessite de l’énergie pour être fabriqué, transporté, utilisé et même pour être traité une fois hors d’usage. Ainsi, nos modes de vie contribuent au réchauffement climatique, c’est un fait. Certains énormément d’autres très peu. C’est pourquoi pour estimer cette contribution il est d’usage de calculer ce qu’on appelle une empreinte carbone.
                </Trans>
              </p>
            </div>
          </details>
        </li>
        <li className="mb-2" id={'mesure'}>
          <details>
            <summary
              className="cursor-pointer text-sm font-bold text-primary-700 md:text-lg"
              onClick={() =>
                trackEvent(tutorielClickQuestion('Comment on la mesure ?'))
              }>
              <Trans>Comment on la mesure ?</Trans>
            </summary>
            <div className="my-2 ml-3.5 text-sm">
              <p>
                <Trans>
                  Avec une unité au nom barbare : l’équivalent CO2, écrit CO2e. C’est-à-dire qu’on ramène la contribution de réchauffement de tous les gaz à effet de serre à celle du gaz que tout le monde connait : le dioxyde de carbone, oui celui que l’on expire mais heureusement sans influence sur le climat. A titre d’exemple, un kg de méthane (CH4) qui a un pouvoir réchauffant 30 fois supérieur à celui du CO2 équivaut à 30 kgCO2e
                </Trans>
              </p>
              <Image
                src="/images/tutoriel/co2e.svg"
                alt="CO₂e"
                className="mx-auto mb-2 w-24"
                width={100}
                height={100}
              />
            </div>
          </details>
        </li>
        <li className="mb-2" id={'categories'}>
          <details id={'categories'} className="text-sm">
            <summary
              className="cursor-pointer text-sm font-bold text-primary-700 md:text-lg"
              onClick={() =>
                trackEvent(tutorielClickQuestion('D’où vient mon empreinte ?'))
              }>
              <Trans>D’où vient mon empreinte professionelle ? Et que faire pour la réduire ?</Trans>
            </summary>
            <div className="my-2 ml-3.5">
              <Trans>
                <p>
                  Ce n’est peut-être pas une surprise pour vous mais les déplacements (domicile-travail et profesionnels) sont souvent le facteur principal de l'empreinte liée au travail, surtout s’ils sont faits en voiture. Mais comme nous allons le voir d’autres pratiques du quotidien au travail contribuent à notre empreinte. C’est pourquoi, en fin de test nous vous proposerons des pistes d’actions pour la réduire et pour faire en sorte d'inscrire ces pratiques dans une démarche professionnelle plus durable.
                </p>
              </Trans>
            </div>
          </details>
        </li>
      </ul>
      <ButtonLink
        href="/questions-frequentes"
        size="sm"
        color="text"
        className="px-0 underline"
        trackingEvent={tutorielClickFaq}>
        <Trans>Consultez la FAQ</Trans>
      </ButtonLink>
    </div>
  )
}
