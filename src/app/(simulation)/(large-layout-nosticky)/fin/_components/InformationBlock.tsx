'use client'

import { endToggleTargetBlock } from '@/constants/tracking/pages/end'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import CarboneTargetContent from './informationBlock/CarboneTargetContent'
import Button from '@/design-system/inputs/Button'
import { trackEvent } from '@/utils/matomo/trackEvent'

export default function InformationBlock() {
  const [isOpen, setIsOpen] = useState(false)


  const { t } = useClientTranslation()

  return (
    <div className="relative rounded-xl border-2 border-primary-50 bg-gray-100 px-4 py-4">
      <CarboneTargetContent isOpen={isOpen} isHedgehog={false} />
      <Button
        color={isOpen ? 'text' : 'primary'}
        className={twMerge(
          'focus:ring-primary-700 absolute top-4 right-4 h-12 w-12 p-0! focus:ring-2 focus:ring-offset-3 focus:outline-hidden lg:hidden',
        )}
        title={
          isOpen ?
            'Fermer'
            : 'Ouvrir'
        }
        aria-label={isOpen ? t('Fermer') : t('Ouvrir')}
        onClick={() => {
          setIsOpen((prevIsOpen) => !prevIsOpen)
          trackEvent(endToggleTargetBlock)
        }}>
        {isOpen ? 'Fermer' : 'Ouvrir'}
      </Button>
    </div >
  )
}
