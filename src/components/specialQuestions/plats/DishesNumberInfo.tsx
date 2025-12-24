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
          <Trans>Êtes vous sûr de vouloir renseigner</Trans>
          <strong>
            <strong>
              {' '}{totalNumberOfPlats}
            </strong>{' '}
          </strong>{' '}
          <Trans>
            repas (soit {totalNumberOfPlats < 10 ? 'moins' : 'plus'} de 2 repas par jour).
          </Trans>
        </span>
      </div>}
    </>
  )
}
