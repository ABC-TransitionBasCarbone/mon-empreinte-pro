'use client'

import { PreventNavigationContext } from '@/app/_components/mainLayoutProviders/PreventNavigationProvider'
import Navigation from '@/components/form/Navigation'
import Question from '@/components/form/Question'
import ContentLarge from '@/components/layout/ContentLarge'
import questions from '@/components/specialQuestions'
import { getBgCategoryColor } from '@/helpers/getCategoryColorClass'
import { useEndPage } from '@/hooks/navigation/useEndPage'
import { useTrackTimeOnSimulation } from '@/hooks/tracking/useTrackTimeOnSimulation'
import { useDebug } from '@/hooks/useDebug'
import { useQuestionInQueryParams } from '@/hooks/useQuestionInQueryParams'
import { useCurrentSimulation, useEngine, useForm } from '@/publicodes-state'
import { useContext, useEffect, useState } from 'react'
import CategoriesSummary from './form/CategoriesSummary'
import FunFact from './form/FunFact'
import { TransitionPage } from '@/app/_components/transition/page'

export default function Form() {
  const isDebug = useDebug()

  const { progression, id } = useCurrentSimulation()

  const {
    transitionPage,
    setTransitionPage,
    remainingQuestions,
    relevantAnsweredQuestions,
    currentQuestion,
    setCurrentQuestion,
    relevantQuestions,
    currentCategory,
    noPrevQuestion,
    noNextQuestion,
    gotoPrevQuestion,
    gotoNextQuestion,
  } = useForm()

  const { questionInQueryParams, setQuestionInQueryParams } =
    useQuestionInQueryParams()

  const { goToEndPage } = useEndPage()

  const [isInitialized, setIsInitialized] = useState(false)

  const { trackTimeOnSimulation } = useTrackTimeOnSimulation()
  const { getNumericValue } = useEngine()

  // When we reach the end of the test (by clicking on the last navigation button),
  // we wait for the progression to be updated before redirecting to the end page
  const [shouldGoToEndPage, setShouldGoToEndPage] = useState(false)

  useEffect(() => {

    if (shouldGoToEndPage && progression === 1) {
      trackTimeOnSimulation()

      goToEndPage({
        allowedToGoToGroupDashboard: true,
      })
    }
  }, [
    shouldGoToEndPage,
    progression,
    goToEndPage,
    getNumericValue,
    id,
    trackTimeOnSimulation,
  ])

  const [tempValue, setTempValue] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!isInitialized) {
      let nextCurrentQuestion;
      if (
        questionInQueryParams &&
        (relevantAnsweredQuestions.includes(questionInQueryParams) || isDebug)
      ) {
        nextCurrentQuestion = questionInQueryParams
      } else {
        nextCurrentQuestion = remainingQuestions[0]
      }

      setCurrentQuestion(nextCurrentQuestion);
      setIsInitialized(true)
    }
  }, [isDebug, relevantQuestions, questionInQueryParams, remainingQuestions, relevantAnsweredQuestions, setCurrentQuestion, isInitialized, setTransitionPage])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentQuestion])

  useEffect(() => {
    if (isInitialized && currentQuestion) {
      setQuestionInQueryParams(currentQuestion)
    }
  }, [setQuestionInQueryParams, currentQuestion, isInitialized])

  const { handleUpdateShouldPreventNavigation, shouldPreventNavigation } =
    useContext(PreventNavigationContext)

  if (!isInitialized || !currentQuestion) {
    return
  }

  const transitionPageAuthorized = ['transport', 'alimentation', 'divers', 'DT', 'logement']

  const QuestionComponent = questions[currentQuestion] || Question

  return (
    <>
      <ContentLarge>
        <div className="relative flex flex-1 flex-col gap-2 md:gap-8 lg:mt-0 lg:flex-row lg:gap-24">
          <div className="relative flex flex-1 flex-col">
            {transitionPage && transitionPageAuthorized.includes(transitionPage)
              ? <TransitionPage transitionPage={transitionPage} />
              : <QuestionComponent
                question={currentQuestion}
                key={currentQuestion}
                tempValue={tempValue}
                setTempValue={setTempValue}
              />
            }
          </div>

          <div
            className={`flex flex-col gap-8 md:self-start lg:w-[20rem] short:gap-2 md:${getBgCategoryColor(currentCategory ?? 'transport', '500')}`}>
            <CategoriesSummary />

            <FunFact question={currentQuestion} />
          </div>
        </div>
      </ContentLarge>

      <Navigation
        transitionPage={transitionPage}
        noPrevQuestion={noPrevQuestion}
        noNextQuestion={noNextQuestion}
        gotoPrevQuestion={gotoPrevQuestion}
        gotoNextQuestion={gotoNextQuestion}
        remainingQuestions={remainingQuestions}
        question={currentQuestion}
        tempValue={tempValue}
        onComplete={() => {
          if (shouldPreventNavigation) {
            handleUpdateShouldPreventNavigation(false)
          }

          setShouldGoToEndPage(true)
        }}
      />
    </>
  )
}
