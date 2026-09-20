import { Check, X } from 'lucide-react'
import './QuizQuestion.css'

function QuizQuestion({ question, questionIndex, total, selectedIndex, onAnswer }) {
  const hasAnswered = selectedIndex !== null

  return (
    <div className="quiz-question">
      <p className="quiz-progress">
        Question {questionIndex + 1} sur {total}
      </p>
      <h3>{question.question}</h3>

      <div className="quiz-options" role="radiogroup" aria-label={question.question}>
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex
          const isSelected = i === selectedIndex

          let stateClass = ''
          if (hasAnswered) {
            if (isCorrect) stateClass = 'is-correct'
            else if (isSelected) stateClass = 'is-wrong'
          }

          return (
            <button
              key={option}
              className={`quiz-option ${stateClass}`}
              onClick={() => !hasAnswered && onAnswer(i)}
              disabled={hasAnswered}
              role="radio"
              aria-checked={isSelected}
            >
              <span>{option}</span>
              {hasAnswered && isCorrect && <Check size={18} aria-hidden="true" />}
              {hasAnswered && isSelected && !isCorrect && <X size={18} aria-hidden="true" />}
            </button>
          )
        })}
      </div>

      {hasAnswered && (
        <p className={`quiz-feedback ${selectedIndex === question.correctIndex ? 'ok' : 'ko'}`} role="status">
          {selectedIndex === question.correctIndex
            ? 'Bonne réponse !'
            : `Pas tout à fait — la bonne réponse est : « ${question.options[question.correctIndex]} ».`}
        </p>
      )}
    </div>
  )
}

export default QuizQuestion
