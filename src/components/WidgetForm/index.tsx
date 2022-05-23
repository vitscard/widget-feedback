import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "🐛",
      alt: "Bug"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: "💡",
      alt: "Idea"
    }
  },
  OTHER: {
    title: "Outros",
    image: {
      source: "🎈",
      alt: "Others"
    }
  }
}

export type FeedbackType = keyof typeof feedBackTypes;


export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">            
      { feedbackSent ? (
        <FeedbackSuccessStep  onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          ) }        
        </>

      )}
      <footer className="text-xs text-neutral-400">
        Feito com 💙 por <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  );
}