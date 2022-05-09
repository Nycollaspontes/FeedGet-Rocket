import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "./ScreenshotButton";


interface FeedbackContentProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}


export function FeedbackContentStep({ onFeedbackSent,feedbackType, onFeedbackRestartRequested }: FeedbackContentProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];


    const [screenshot , setScreenshot] = useState<string | null>(null);
    const [comment , setComment] = useState('');


    function  handleSubmitForm(event:FormEvent) {
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        })
        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute 
                    text-zinc-400 hover:text-zinc-100 ">

                    <ArrowLeft
                        weight="bold"
                        className="w-4 h-4"
                        onClick={onFeedbackRestartRequested} />


                </button>

                <span className=" text-xl leading-6 
                flex items-center  ">


                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6 " />
                    {feedbackTypeInfo.title}


                </span>


                <CloseButton />


            </header>


            <form className="my-4 w-full"  onSubmit={handleSubmitForm}>
                <textarea
                    onChange={event => setComment(event.target.value)}      
                    className="min-w-[304px] w-full min-h-[112px] text-sm 
                            placeholder-zinc-400 text-zinc-100 border-zinc-60
                             0 bg-transparent rounded-md focus:border-brand-500
                            focus:ring-brand500 focus:ring-1 resize-none
                            focus:outline-none  scrollbar scrollbar-thumb-zinc-700 
                            scrollbar-track-transparent scrollbar-thin "

                    placeholder="Conte com detalhes o que esta acontecendo..." />

                <footer className="flex gap-2">
                    <ScreenshotButton 
                    onScreenshotTook={setScreenshot}
                    screenshot={screenshot} />



                    <button
                    type="submit"
                    disabled={comment.length  ===  0}
                    className= "p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500  disabled:bg-brand-500 disabled:opacity-50"> 

                        Enviar FeedBack

                  
                        </button>
                </footer>


            </form>
        </>
    )

}