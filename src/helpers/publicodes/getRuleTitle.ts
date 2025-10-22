import { DottedName, NGCRule } from '@abc-transitionbascarbone/mon-empreinte-pro-modele'
import { utils } from 'publicodes'

export const getRuleTitle = (
  rule: NGCRule & { dottedName: DottedName; titre?: string }
) => {
  return rule?.titre ?? utils.nameLeaf(rule.dottedName)
}
