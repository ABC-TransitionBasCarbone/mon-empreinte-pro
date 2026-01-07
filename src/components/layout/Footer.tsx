import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Link from '../Link'
import { getServerTranslation } from '@/helpers/getServerTranslation'

export default async function Footer({ className = '' }) {
  const { t } = await getServerTranslation()

  return (
    <footer
      className={twMerge(
        'relative flex flex-col items-center gap-4 bg-gray-100 p-4 !pb-32 sm:p-8 md:mb-0',
        className,
      )}>
      <div className="flex flex-row items-center gap-4">
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
        <Link href="https://www.eaudeparis.fr/" target="_blank">
          <Image
            src="/images/ambassadeurs/eaudeparis.png"
            alt="Logo eau de paris"
            width="600"
            height="253"
            className="h-auto w-24"
          />
        </Link>
      </div>
    </footer >
  )
}
