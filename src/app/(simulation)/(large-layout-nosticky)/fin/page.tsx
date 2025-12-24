'use client'

import MetricSlider from '@/components/fin/MetricSlider'
import IframeDataShareModal from '@/components/iframe/IframeDataShareModal'
import CategoriesAccordion from '@/components/results/CategoriesAccordion'
import Trans from '@/components/translation/Trans'
import { carboneMetric, eauMetric } from '@/constants/metric'
import Title from '@/design-system/layout/Title'
import { useEndGuard } from '@/hooks/navigation/useEndGuard'
import { useSimulationIdInQueryParams } from '@/hooks/simulation/useSimulationIdInQueryParams'
import { Metric } from '@/publicodes-state/types'
import { ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'
import Carbone from './_components/Carbone'
import FinPageSkeleton from './skeleton'
import ShareBlock from './_components/ShareBlock'

const titles: Record<Metric, ReactElement> = {
  [carboneMetric]: <Trans>carbone</Trans>,
  [eauMetric]: <Trans>eau</Trans>,
}

export default function FinPage() {
  // Guarding the route and redirecting if necessary
  const { isGuardInit, isGuardRedirecting } = useEndGuard()

  const { simulationIdInQueryParams } = useSimulationIdInQueryParams()

  const currentMetric = "carbone"

  // If the simulationIdInQueryParams is set, it means that the simulation is not loaded yet
  if (!isGuardInit || isGuardRedirecting || !!simulationIdInQueryParams)
    return <FinPageSkeleton />

  return (
    <div className="relative">
      <IframeDataShareModal />

      {/* <Poll /> */}

      <div>
        <Title tag="h1">
          <Trans>Mon empreinte professionnelle</Trans>
        </Title>
      </div>

      <MetricSlider />

      <div className="relative flex flex-col-reverse gap-16 lg:flex-row lg:gap-10">
        <div className="relative flex flex-1 flex-col gap-16 lg:mt-7" style={{ width: '100%' }}>
          <div
            className={twMerge(
              'transition-opacity duration-500',
              currentMetric === carboneMetric
                ? 'relative opacity-100'
                : 'pointer-events-none absolute top-0 opacity-0'
            )}>
            <Carbone />
          </div>

          <div id="categories-block">
            <Title tag="h2" className="text-lg lg:text-2xl">
              <Trans>Le détail de mon empreinte</Trans>{' '}
              <strong className="text-secondary-700">
                {titles[currentMetric]}
              </strong>
            </Title>
            <CategoriesAccordion metric="carbone" />
          </div>

          <ShareBlock />
        </div>
      </div>
    </div>
  )
}
