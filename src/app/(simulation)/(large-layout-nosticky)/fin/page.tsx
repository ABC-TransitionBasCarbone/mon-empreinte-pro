'use client'

import MetricSlider from '@/components/fin/MetricSlider'
import IframeDataShareModal from '@/components/iframe/IframeDataShareModal'
import CategoriesAccordion from '@/components/results/CategoriesAccordion'
import Trans from '@/components/translation/trans/TransClient'
import Title from '@/design-system/layout/Title'
import { useEndGuard } from '@/hooks/navigation/useEndGuard'
import Carbone from './_components/Carbone'
import InformationBlock from './_components/InformationBlock'
import FinPageSkeleton from './skeleton'


export default function FinPage() {
  // Guarding the route and redirecting if necessary
  const { isGuardInit, isGuardRedirecting } = useEndGuard()
  const currentMetric = "carbone"

  // If the simulationIdInQueryParams is set, it means that the simulation is not loaded yet
  if (!isGuardInit || isGuardRedirecting) return <FinPageSkeleton />

  return (
    <div className="relative mt-12">
      <IframeDataShareModal />


      <div className="flex justify-between">
        <Title tag="h1">
          <Trans>Mon empreinte professionnelle</Trans>
        </Title>
      </div>

      <MetricSlider />

      <div className="relative flex gap-8 lg:flex-row lg:gap-10">
        <div className="relative flex flex-1 flex-col gap-16 lg:mt-7">
          <div className="short:gap-2 mt-8 flex w-full flex-col gap-4 md:hidden">
            <InformationBlock />
          </div>
          <div
            className="transition-opacity duration-500 relative opacity-100">
            <Carbone />
          </div>

          <div id="categories-block">
            <Title tag="h2" className="text-lg lg:text-2xl">
              <Trans>Le détail de mon empreinte</Trans>{' '}
            </Title>
            <CategoriesAccordion metric={currentMetric} />
          </div>
        </div>

        <div className="short:gap-2 top-40 hidden w-full flex-col gap-4 self-start md:mb-8 md:flex lg:sticky lg:z-30 lg:w-[22rem]">
          <InformationBlock />
        </div>
      </div>
    </div>
  )
}
