import Trans from '@/components/translation/Trans'
import ButtonLink from '@/design-system/inputs/ButtonLink'
import Title from '@/design-system/layout/Title'

export default async function Explanations() {
  return (
    <>
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24">
        <Title tag="h2" className="font-medium md:text-3xl">
          <Trans>Pourquoi cet outil ?</Trans>
        </Title>

        <p className="md:text-lg">
          <Trans>
            [PROTOTYPE] Cet outil de calcul d’empreinte carbone professionnelle s’inscrit dans la démarche de transition de votre organisation en proposant une estimation des ordres de grandeur des émissions de GES liées aux pratiques professionnelles. Il permet de sensibiliser en rendant le sujet plus tangible, tout en abordant la question des émissions à l’échelle des employés. En ce sens, il fait le lien entre actions individuelles et enjeux structurels, et constitue un point d’appui pour mieux comprendre les principaux postes d’émissions et nourrir une réflexion collective sur les leviers de réduction à l’échelle de l’organisation.           </Trans>
        </p>
      </div>
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24">
        <Title tag="h2" className="font-medium md:text-3xl">
          <Trans>A propos du développement de l’outil ?</Trans>
        </Title>

        <div className="md:text-lg">
          <Trans>
            <p>
              Cet outil a été développé par l’Association pour la transition Bas Carbone en partenariat avec des organisations engagées.
              Cette déclinaison s'appuie librement sur la version officielle de Nos Gestes Climat développée par l'ADEME (<a href="https://www.ademe.fr/">Agence de la transition écologique</a>) en partenariat avec l'ABC (<a href="https://abc-transitionbascarbone.fr/">Association pour la Transition Bas Carbone</a>).
            </p>
            <p>
              Si vous avez des suggestions d’amélioration ou des questions, faites-en nous part  !
            </p>
          </Trans>
        </div>
        <ButtonLink
          color="secondary"
          href="/">
          <Trans>Contactez-nous</Trans>
        </ButtonLink>
      </div>
      <div className="mx-auto mb-12 w-full max-w-3xl px-4 md:mb-24">
        <Title tag="h2" className="font-medium md:text-3xl">
          <Trans>Note : </Trans>
        </Title>

        <div className="md:text-lg">
          <Trans>
            ⚠️Cet outil est actuellement à l’état de prototype : il peut donc comporter des bugs, des fonctionnalités incomplètes ou certaines informations et messages encore manquants, qui seront progressivement corrigés et enrichis.
          </Trans>
        </div>
      </div>
    </>
  )
}
