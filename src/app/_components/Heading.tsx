import Trans from '@/components/translation/Trans'
import Buttons from './heading/Buttons'
import Partners from './heading/Partners'

export default async function Heading() {
  return (
    <>
      <div className="relative flex h-[588px] items-center justify-center overflow-hidden p-4 md:h-[36rem] bg-gray-100">
        <div className="relative mb-2 max-w-sm text-center md:mb-0 md:max-w-2xl">
          <h1 className="md:text-5xl">
            <Trans>Connaissez-vous votre empreinte carbone professionnelle ?</Trans>
          </h1>
          <p className="md:text-2xl">
            Obtenez une estimation en seulement 5 minutes !
          </p>
          <Buttons />
        </div>
      </div>
      <Partners />
    </>
  )
}
