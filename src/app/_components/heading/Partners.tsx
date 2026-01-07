import Link from '@/components/Link'
import { getServerTranslation } from '@/helpers/getServerTranslation'
import Image from 'next/image'

export default async function Partners() {
  const { t } = await getServerTranslation()

  return (
    <div className=" mb-4 flex justify-center md:-mt-10">
      <div className="relative mb-4 flex items-center justify-center gap-6 rounded-full bg-white py-4 md:mb-0 md:gap-8 md:px-24 md:py-10">
        <Link href="https://abc-transitionbascarbone.fr" target="_blank">
          <Image
            src="/images/misc/logo-abc-web.webp"
            alt={t("Logo de l'Association pour la transition Bas Carbone")}
            width="90"
            height="30"
            className="h-auto w-20"
          />
        </Link>
        <Link href="https://www.grdf.fr/" target="_blank">
          <Image
            src="/images/ambassadeurs/grdf.png"
            alt="Logo de GRDF"
            width="600"
            height="253"
            className="h-auto w-32"
          />
        </Link>
        <Link href="https://www.ag2rlamondiale.fr" target="_blank">
          <Image
            src="/images/ambassadeurs/ag2r.png"
            alt="Logo de AG2R"
            width="600"
            height="253"
            className="h-auto w-32"
          />
        </Link>
        <Link href="https://www.edf.fr/" target="_blank">
          <Image
            src="/images/ambassadeurs/edf.png"
            alt="Logo d'EDF"
            width="600"
            height="253"
            className="h-auto w-32"
          />
        </Link>
        <Link href="https://www.francetravail.fr/" target="_blank">
          <Image
            src="/images/ambassadeurs/francetravail.png"
            alt="Logo de France Travail"
            width="600"
            height="253"
            className="h-auto w-32"
          />
        </Link>
      </div>
    </div>
  )
}
