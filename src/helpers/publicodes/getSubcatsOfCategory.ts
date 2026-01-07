import { DottedName } from '@abc-transitionbascarbone/mon-empreinte-pro-new-model'

export function getSubcatsOfCategory(
  category: DottedName,
  subcategories: DottedName[] | undefined
): DottedName[] {
  return (
    subcategories?.filter((subcategory) => subcategory?.startsWith(category)) ??
    []
  )
}
