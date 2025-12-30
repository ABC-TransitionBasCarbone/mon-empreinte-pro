import { useCurrentTab } from '@/hooks/useCurrentTab'
import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import CarboneTotalChart from './metricSlider/CarboneTotalChart'
import { ImpactCO2Module } from '@/components/encapsulage/ImpactCO2Module'
import TabNavigation from '@/components/fin/metricSlider/TabNavigation'
import { carboneTab, comparateurTab } from '@/constants/tabs'
import { useRule } from '@/publicodes-state'

type Props = {
  carboneTotal?: number
  waterTotal?: number
  isStatic?: boolean
}
export default function MetricSlider({
  carboneTotal,
  isStatic: initialIsStatic,
}: Props) {
  const { currentTab } = useCurrentTab()

  const isStatic = currentTab === comparateurTab || initialIsStatic

  const [isSticky, setIsSticky] = useState(false)

  const myElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isStatic) {
      return
    }

    const handleScroll = () => {
      if (myElementRef.current) {
        const { top } = myElementRef.current.getBoundingClientRect()
        // We need a value > 0 because of an iOS issue
        if (top <= 10) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isStatic])

  const { numericValue } = useRule('bilan')
  const usedValue = carboneTotal ?? numericValue

  return (
    <div
      className={twMerge(
        isStatic ? '' : 'sticky top-0 z-40 mb-4',
        isSticky && 'pointer-events-none',
        currentTab === carboneTab ? 'h-96' : 'h-[50rem]'
      )}
      ref={myElementRef}>
      <TabNavigation
        isSticky={isSticky}
        shouldShowWater={!(isStatic)}
      />
      <div
        className={twMerge(
          'relative mx-auto -mt-0.5 w-full overflow-hidden rounded-b-xl rounded-tr-xl border-2 border-primary-50 bg-gray-100 px-0 transition-all duration-300',
          isSticky
            ? 'h-20 lg:h-[5.5rem]'
            : currentTab === carboneTab
              ? 'h-72 lg:h-80'
              : 'h-72 lg:h-[46rem]'
        )}>
        {currentTab === carboneTab && (
          <div className={twMerge('relative !flex h-full flex-col')}>
            <div className="h-full w-full px-4">
              <CarboneTotalChart isSmall={isSticky} total={carboneTotal} />
            </div>
          </div>
        )}
        {currentTab === comparateurTab && (
          <div className={twMerge('relative !flex h-full flex-col')}>
            <ImpactCO2Module
              src="https://impactco2.fr/iframe.js"
              dataType="comparateur"
              dataSearch={`?value=${Math.round(Number(usedValue || 0))}`}
              name="impact-co2"
            />
          </div>
        )}
      </div>
    </div>
  )
}
