import { useState } from "react";

import ideaImageUrl from '../../assets/idea.svg';
import bugImageURL from '../../assets/bug.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";




export type FeedbackType = keyof typeof feedbackTypes;



export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageURL,
            alt: 'Ícone de Bug',
        }

    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Ícone de uma lampada',
        }

    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Ícone de um balão de pensamento',
        }
    }
}

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }


    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center  shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSucessStep 
                handleRestartFeedback={handleRestartFeedback}/>
            ) : <>
                {!feedbackType ? (
                    <FeedbackTypeStep onChangeType={setFeedbackType} />
                ) : (
                    <FeedbackContentStep
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={() => setFeedbackSent(true)} />
                )}

            </>}



            <footer className="text-xs text-neutral-400 ">
                Feito Por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/nycollas-pontes-3110a71a2/">Nycollas Pontes</a>
            </footer>
        </div>
    )
}