'use client'

import getNamespace from '@/publicodes-state/helpers/getNamespace'
import {
  DottedName,
  NGCRuleNode,
  Suggestions,
} from '@abc-transitionbascarbone/mon-empreinte-pro-new-model'
import { useMemo } from 'react'
import { FormattedSuggestion } from '../../types'

type Props = {
  dottedName: DottedName
  rule: NGCRuleNode | undefined
}

export default function useContent({ dottedName, rule }: Props) {
  const category = useMemo(() => {
    const namespace = getNamespace(dottedName) ?? ''
    // This is only used by "ui . pédagogie" rules. For them, we need to extract the category from the dottedName (ui . pedagogie . [category])
    if (namespace === 'ui') {
      return dottedName.split(' . ')[3] as DottedName
    }
    return namespace as DottedName
  }, [dottedName])

  const title = useMemo<string | undefined>(() => rule?.title, [rule])

  const abbreviatedTitle = useMemo<string | undefined>(
    () => rule?.rawNode.abréviation,
    [rule]
  )

  const label = useMemo<string | undefined>(
    () => rule?.rawNode.question,
    [rule]
  )
  const description = useMemo<string | undefined>(
    () => rule?.rawNode.description,
    [rule]
  )
  const icons = useMemo<string | undefined>(
    () => rule?.rawNode['icônes'],
    [rule]
  )
  const unit = useMemo<string | undefined>(() => rule?.rawNode['unité'], [rule])

  const assistance = useMemo<DottedName | undefined>(
    () => rule?.rawNode['aide'] as DottedName,
    [rule]
  )

  const questionPassee = useMemo<DottedName | undefined>(
    () => rule?.rawNode['question-passee'],
    [rule]
  )

  const descriptionPassee = useMemo<DottedName | undefined>(
    () => rule?.rawNode['description-passee'],
    [rule]
  )

  const plancher = useMemo<number>(() => rule?.rawNode['plancher'] ?? 0, [rule])

  const warning = useMemo<string | undefined>(
    () => rule?.rawNode['avertissement'],
    [rule]
  )

  const isInactive = useMemo<boolean>(
    () => rule?.rawNode['inactif'] === 'oui',
    [rule]
  )

  const suggestions = useMemo(() => {
    const suggestionsFolder = (rule?.rawNode.mosaique?.suggestions ||
      rule?.rawNode.suggestions) as Suggestions
    const suggestions = suggestionsFolder
      ? Object.keys(suggestionsFolder).map(
          (key) =>
            ({
              label: key,
              value: suggestionsFolder[key as keyof typeof suggestionsFolder],
            }) as FormattedSuggestion
        )
      : []

    return suggestions
  }, [rule])

  const excerpt = useMemo<string | undefined>(
    () => rule?.rawNode['résumé'],
    [rule]
  )

  // This is only used by "ui . pédagogie" rules
  const actions = useMemo<DottedName[] | undefined>(
    () => (rule as any)?.rawNode['actions'],
    [rule]
  )

  const informations = useMemo<DottedName[] | undefined>(
    () => (rule as any)?.rawNode['informations'],
    [rule]
  )

  const intensiteCouleur = useMemo<string | undefined>(() => (rule as any)?.rawNode['intensiteCouleur'], [rule])

  const unite = useMemo<string | undefined>(() => (rule as any)?.rawNode['unité'], [rule])

  const titreInformations = useMemo<string | undefined>(
    () => (rule as any)?.rawNode['titre-informations'],
    [rule]
  )

  const descriptionInformations = useMemo<string | undefined>(
    () => (rule as any)?.rawNode['description-informations'],
    [rule]
  )


  return {
    category,
    title,
    abbreviatedTitle,
    label,
    description,
    icons,
    unit,
    assistance,
    isInactive,
    suggestions,
    excerpt,
    plancher,
    warning,
    actions,
    informations,
    questionPassee,
    descriptionPassee,
    intensiteCouleur,
    unite,
    titreInformations,
    descriptionInformations
  }
}
