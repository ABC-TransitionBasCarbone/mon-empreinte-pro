import Trans from '@/components/translation/Trans'
import { useRule } from '@/publicodes-state'

export default function DishesNumberInfo() {
  const { numericValue: totalNumberOfPlats } = useRule(
    'ui . nombre de repas par semaine'
  )

  return (
    <>
      {totalNumberOfPlats != 10 && <div aria-live="polite" className="mb-2 text-center text-sm">
        <span className="text-red-700">
          <Trans>Êtes vous sûr de vouloir renseigner {totalNumberOfPlats < 5 ? 'moins' : 'plus'}</Trans>
          <strong>
            <strong>
              {' '}de 5 repas
            </strong>{' '}
          </strong>{' '}
        </span>
      </div>}
    </>
  )
}
