import ToastDisplay from '@/components/messages/ToastDisplay'
import {
  endClickSaveShortcut,
} from '@/constants/tracking/pages/end'
import { simulationClickSaveShortcut } from '@/constants/tracking/pages/simulateur'
import Button from '@/design-system/inputs/Button'
import { useClientTranslation } from '@/hooks/useClientTranslation'
import { trackEvent } from '@/utils/matomo/trackEvent'
import { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const sizeClassNames = {
  sm: '!p-0 h-10 w-10',
  md: '!p-0 h-10 w-10',
}
/*const shareClassNames = {
  sm: 'h-[22px] w-[22px]',
  md: 'h-[22px] w-[22px]',
}*/

type Props = {
  size?: 'sm' | 'md'
  endPage?: boolean
}

export default function HeadingButtons({ size = 'md', endPage }: Props) {
  /*const { sharedUrl } = useEndPageSharedUrl()
  const [shouldDisplayConfirmMessage, setShouldDisplayConfirmMessage] =
    useState(false)*/

  const { t } = useClientTranslation()

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  /*const handleShare = async () => {
    // Desktop : only copy the url
    if (!navigator?.share || !isMobile()) {
      try {
        await navigator.clipboard.writeText(sharedUrl)

        displaySuccessToast(t('Lien de partage copié dans le presse-papier !'))
        setShouldDisplayConfirmMessage(true)

        timeoutRef.current = setTimeout(() => {
          setShouldDisplayConfirmMessage(false)
        }, 2000)
      } catch (err) {
        displayErrorToast(
          t(
            'Oups, une erreur s’est produite lors de la copie du lien de partage.'
          )
        )
      }

      return
    }

    // Mobile : share the url
    if (navigator?.share && isMobile()) {
      await navigator
        .share({
          url: sharedUrl,
          text: t(
            'Nos Gestes Climat : vos empreintes carbone et eau en 10 min'
          ),
        })
        .catch((e) => console.log(e))
    } else {
      try {
        const shareText = t(
          'Nos Gestes Climat : vos empreintes carbone et eau en 10 min\n{{sharedUrl}}',
          { sharedUrl }
        )
        await navigator.clipboard.writeText(shareText)

        displaySuccessToast(t('Lien de partage copié dans le presse-papier !'))
        setShouldDisplayConfirmMessage(true)

        timeoutRef.current = setTimeout(() => {
          setShouldDisplayConfirmMessage(false)
        }, 2000)
      } catch (err) {
        displayErrorToast(
          t(
            'Oups, une erreur s’est produite lors de la copie du lien de partage.'
          )
        )
      }
    }
  }*/

  useEffect(() => {
    const timeout = timeoutRef.current;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  const handleScroll = (id: string, block: ScrollLogicalPosition) => {
    const emailBlock = document.getElementById(id)
    emailBlock?.scrollIntoView({
      behavior: 'smooth',
      block,
    })
  }

  return (
    <div className="mb-1 flex gap-0.5">
      <Button
        color="text"
        size="sm"
        aria-label={t('Sauvegarder')}
        className={twMerge(
          sizeClassNames[size],
          'font-medium lg:w-auto lg:gap-2 lg:!px-4 lg:!py-2'
        )}
        onClick={() => {
          trackEvent(
            endPage ? endClickSaveShortcut : simulationClickSaveShortcut
          )
          handleScroll('email-block', 'start')
        }}>
      </Button>

      {/*<Button
        color="text"
        size="sm"
        className={twMerge(
          sizeClassNames[size],
          'font-medium lg:w-auto lg:min-w-32 lg:gap-1 lg:!px-4 lg:!py-2'
        )}
        onClick={() => {
          trackEvent(endClickShareShortcut)
          handleShare()
        }}
        aria-label={t('Partager')}>
        <ShareIcon
          className={twMerge(
            'mr-[1px] fill-primary-700',
            shareClassNames[size]
          )}
        />
        {shouldDisplayConfirmMessage ? (
          <span className="hidden lg:inline">
            <Trans>Copié !</Trans>
          </span>
        ) : (
          <span className="hidden lg:inline">
            <Trans>Partager</Trans>
          </span>
        )}
      </Button>*/}

      <ToastDisplay />
    </div>
  )
}
