import Main from '@/design-system/layout/Main'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import { getMetadataObject } from '@/helpers/metadata/getMetadataObject'
import Explanations from './_components/Explanations'
import Heading from './_components/Heading'

export async function generateMetadata() {
  const { t } = await getServerTranslation()
  return getMetadataObject({
    title: t(
      "Calculez votre empreinte professionnelle en 5 minutes !"
    ),
    description: t(
      'Connaissez-vous votre empreinte sur le climat ? Faites le test et découvrez comment réduire votre empreinte carbone sur le climat.'
    ),
    alternates: {
      canonical: '',
    },
  })
}

export default async function Homepage() {
  return (
    <>
      <Main className="lg:-mt-8">
        <Heading />
        <Explanations />
      </Main>
    </>
  )
}
