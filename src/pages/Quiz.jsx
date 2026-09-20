import { useState } from 'react'
import { Trophy, RotateCcw } from 'lucide-react'
import SectionTitle from '../components/SectionTitle.jsx'
import QuizQuestion from '../components/QuizQuestion.jsx'
import quizData from '../data/quiz.js'
import './Quiz.css'

function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null))
  const [finished, setFinished] = useState(false)

  const score = answers.reduce(
    (acc, answer, i) => acc + (answer === quizData[i].correctIndex ? 1 : 0),
    0,
  )

  const handleAnswer = (index) => {
    const next = [...answers]
    next[current] = index
    setAnswers(next)
  }

  const handleNext = () => {
    if (current < quizData.length - 1) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setAnswers(Array(quizData.length).fill(null))
    setCurrent(0)
    setFinished(false)
  }

  const hasAnsweredCurrent = answers[current] !== null

  return (
    <div className="page">
      <div className="container">
        <SectionTitle
          eyebrow="Testez vos connaissances"
          title="Quiz"
          subtitle="Dix questions pour vérifier ce que vous avez retenu du roman."
        />

        {!finished ? (
          <div className="quiz-card">
            <QuizQuestion
              question={quizData[current]}
              questionIndex={current}
              total={quizData.length}
              selectedIndex={answers[current]}
              onAnswer={handleAnswer}
            />

            <div className="quiz-nav">
              <button className="quiz-next" onClick={handleNext} disabled={!hasAnsweredCurrent}>
                {current === quizData.length - 1 ? 'Voir mon score' : 'Question suivante'}
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <Trophy size={40} className="quiz-trophy" aria-hidden="true" />
            <h3>Votre score</h3>
            <p className="quiz-score">
              {score} / {quizData.length}
            </p>
            <p className="quiz-score-message">
              {score === quizData.length
                ? 'Parfait ! Vous connaissez très bien le roman.'
                : score >= quizData.length / 2
                ? 'Bon résultat — quelques relectures et ce sera parfait.'
                : "Continuez d'explorer les pages du site pour progresser."}
            </p>
            <button className="quiz-restart" onClick={handleRestart}>
              <RotateCcw size={18} aria-hidden="true" />
              Recommencer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
