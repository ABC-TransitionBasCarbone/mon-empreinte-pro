'use client'

import getNamespace from '@/publicodes-state/helpers/getNamespace'
import { DottedName } from '@abc-transitionbascarbone/mon-empreinte-pro-new-model'
import { EvaluatedNode, PublicodesExpression } from 'publicodes'
import { useMemo } from 'react'
import { Situation } from '../../types'

type Props = {
  dottedName: DottedName
  everyNotifications: DottedName[]
  safeEvaluate: (rule: PublicodesExpression) => EvaluatedNode | null
  situation: Situation
}

export default function useNotifications({
  dottedName,
  everyNotifications,
  safeEvaluate,
  situation,
}: Props) {
  const notifications = useMemo(
    () =>
      everyNotifications.filter(
        (notification) => {
          const splitNotification = notification.split(' . ')
          // If notification dottedName has only two names (itself and its category), it should apply to the whole category.
          if (splitNotification.length <= 2) {
            return splitNotification[0] === getNamespace(dottedName)
          }
          // If not, it should apply to the subcategory
          return splitNotification[1] === dottedName.split(' . ')[1]
        },
        [dottedName, everyNotifications]
      ),
    [dottedName, everyNotifications]
  )

  const activeNotifications = useMemo(
    () => {
      if (notifications.length < 5) {
        return notifications.filter((notif) => {
          if (notif.match(new RegExp(`^${dottedName}`, 'i'))) {
            return safeEvaluate(notif)?.nodeValue
          }
        })
      }
      return notifications.filter(
        (notification) =>  {
            return safeEvaluate(notification)?.nodeValue
        })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [notifications, safeEvaluate, situation, dottedName]
  )
  return { notifications, activeNotifications }
}
