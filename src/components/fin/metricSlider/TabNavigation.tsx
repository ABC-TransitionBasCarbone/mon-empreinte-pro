'use client'

import { twMerge } from 'tailwind-merge'
import HeadingButtons from './heading/HeadingButtons'
import Trans from '@/components/translation/Trans'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useCurrentTab } from '@/hooks/useCurrentTab'
import { carboneTab, comparateurTab } from '@/constants/tabs'
import { Tab } from '@/publicodes-state/types'

const tabSelectedClasses =
  'border-x-primary-50 border-b-transparent border-t-primary-50 bg-gray-100'
const tabNotSelectedClasses =
  'border-transparent border-b-primary-50 text-primary-700'
const carboneTabClasses: Record<Tab, string> = {
  [carboneTab]: tabSelectedClasses,
  [comparateurTab]: tabNotSelectedClasses,
}
const comparateurTabClasses: Record<Tab, string> = {
  [carboneTab]: tabNotSelectedClasses,
  [comparateurTab]: tabSelectedClasses,
}

type Props = {
  isSticky?: boolean
  isStatic?: boolean
  shouldShowWater?: boolean
}
export default function TabNavigation({
  isSticky,
  isStatic,
}: Props) {
  const { t } = useClientTranslation()
  const { currentTab, setCurrentTab } = useCurrentTab()

  return (
    <div
      className={twMerge(
        'pointer-events-auto relative flex w-full items-end justify-between bg-white transition-all',
        isSticky ? 'pt-3' : 'pt-0.5'
      )}>
      <div className="flex">
        <button
          aria-label="Mon empreinte professionnelle"
          onClick={() => setCurrentTab(carboneTab)}
          className={twMerge(
            'z-40 mb-0 rounded-t-xl border-2 px-4 pb-1 pt-2 text-lg font-medium transition-all duration-300',
            carboneTabClasses[currentTab]
          )}>
          <span className="hidden lg:inline">
            <Trans>Mon empreinte professionnelle</Trans>{' '}
          </span>
        </button>
        {!isSticky && (
          <button
            aria-label={t('A quoi cela équivaut ?')}
            onClick={() => setCurrentTab(comparateurTab)}
            className={twMerge(
              'relative z-40 mb-0 rounded-t-xl border-2 px-4 pb-1 pt-2 text-lg font-medium transition-all duration-300',
              comparateurTabClasses[currentTab]
            )}>
            <span className="hidden lg:inline">
              <Trans>A quoi cela équivaut ?</Trans>{' '}
            </span>
          </button>
        )}
      </div>
      {!isStatic && <HeadingButtons />}
    </div>
  )
}
