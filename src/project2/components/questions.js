import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Questions = ({ category, setFinished, movePointsUp, renderHeader }) => {
        const [question, setQuestion] = useState({ 
            category: category.toLowerCase(), 
            number: 0, type: null,
            totalQuestions: null,
            content: null,
            examples: [],
            answers: { 'A.': null, 'B.': null, 'C.': null, 'D.': null, 'E.': null },
            myDroppedAnswers:{},
            correct: null,
            points: 0 })

        const [chosenAnswer, setChosenAnswer] = useState({
            correct: null,
            content: null
        })

        const[background,setBackground]=useState(null)
        const loadQuestion = (goodChoose = false) => {
            fetch('./data.json').then(res => res.json()).then(res => {
                let newQuestion = res.categories[question.category].questions[`q${question.number+1}`]
            	if(newQuestion.type=="DragNDrop"){
            		setBackground(res.categories[question.category].backgrounds.dragable)
            	}
            	else if(newQuestion.type=="normal"){
            		setBackground(res.categories[question.category].backgrounds.normal)
            	}            	
                setQuestion(prev => ({
                    ...prev,
                    number: prev.number + 1,
                    totalQuestions: prev.number == 0 ? Object.keys(res.categories[question.category].questions).length : prev.totalQuestions,
                    content: newQuestion.question,
                    examples: newQuestion.type == 'DragNDrop' ? newQuestion.examples : null,
                    answers: {
                        'A.': newQuestion.answers[0],
                        'B.': newQuestion.answers[1],
                        'C.': newQuestion.answers[2],
                        'D.': newQuestion.answers[3],
                        'E.': newQuestion.answers[4]
                    },
                    myDroppedAnswers: newQuestion.type == 'DragNDrop' ? newQuestion.examples.reduce((acc,curr)=>(acc[curr]='',acc),{}) : null,
                    correct: newQuestion.correct,
                    points: goodChoose ? prev.points + 1 : prev.points,
                    type: newQuestion.type
                }))
            })
        }

        const checkNormalQuestion = answer => {
            if (question.number < question.totalQuestions) {
                if (answer == question.correct) {
                    setChosenAnswer({
                        content: answer,
                        correct: true
                    })
                    setTimeout(() => { loadQuestion(true) }, 3000)
                } else {
                    setChosenAnswer({
                        content: answer,
                        correct: false
                    })
                    setTimeout(() => { loadQuestion(false) }, 3000)
                }
            } else {
                if (answer == question.correct) {
                    setChosenAnswer({
                        content: answer,
                        correct: true
                    })
                    setTimeout(() => {
                        setQuestion(prev => ({ ...prev, points: prev.points + 1 }))
                        setFinished(true)
                        movePointsUp({ got: question.points + 1, max: question.totalQuestions })
                    }, 3000)
                } else {
                    setChosenAnswer({
                        content: answer,
                        correct: false
                    })
                    setTimeout(() => {
                        setFinished(true)
                        movePointsUp({ got: question.points, max: question.totalQuestions })
                    }, 3000)
                }
            }
        }

        const checkDragableQuestion = ()=>{
        	let flag=true
        	let i=0
        	for (let j in question.myDroppedAnswers){
        		if(question.correct[i]!=question.myDroppedAnswers[j]){
        			flag=false
        		}
        		i++
        	}
        	if(flag==true){
        		setTimeout(()=>{
        	loadQuestion(true)},2000)
        	}
        	else{
        		setTimeout(()=>{
        	loadQuestion()},2000)
        	}
        	}
        

        const onDragEnd = result => {
            const { destination, source, draggableId } = result
            if (!destination) {
                return
            }

            if (destination.droppableId === source.droppableId && destination.index === source.index) {
                return
            }

            if (destination.droppableId == 'start' && source.droppableId == 'start') {
                return
            } 

            if(question.myDroppedAnswers[destination.droppableId].length>0){
            	return
            }

            if (destination.droppableId !== source.droppableId) {
  				const newStartValuesArray=[]
  				for (const el in question.answers){
  					newStartValuesArray.push(question.answers[el])
  				}
  				
  				newStartValuesArray.splice(source.index,1)
  				let newStartValuesObject = { A: null, B: null, C: null, D: null }
  				let i = 0
                for (const el in newStartValuesObject) {
                    newStartValuesObject.[el] = newStartValuesArray[i]
                    i++
                }
                setQuestion(prev=>({...prev, answers:newStartValuesObject, myDroppedAnswers:{...prev.myDroppedAnswers, [destination.droppableId]:draggableId}}))
            }
        }

        useEffect(() => {loadQuestion()}, [])
        
        useEffect(()=>{
            	if(question.type=='DragNDrop'){
            	let flag=true
            	for (let i=0; i<Object.keys(question.myDroppedAnswers).length; i++){
            		if(question.myDroppedAnswers[Object.keys(question.myDroppedAnswers)[i]].length==0){
            			flag=false
            		}
            	}
            	if(flag==true){
            		checkDragableQuestion()
            	}
            }
        },[question.myDroppedAnswers])

return (
    <div className='question__wrapper' style={{backgroundImage: `url("${background}")`, backgroundSize: "cover"}}>
		{renderHeader(question.type, question.number, question.totalQuestions)}

		<div className='question__content'>
			<div className='question__text'>
				{question.number}. {question.content}
			</div>
			
			{question.type=='normal' 
			?
			<div className='normal-question__answers-wrap'>
				{Object.keys(question.answers).map((el)=>
					(<Answer content={question.answers[el]} chosenAnswer={{content:chosenAnswer.content, correct:chosenAnswer.correct}} letter={el} checkNormalQuestion={checkNormalQuestion} key={el}/>)
				)}
			</div>
			:
			<DragDropContext onDragEnd={onDragEnd}>
				<div className='dragable-question__answers-wrap'>
					<div className='dragable-question__dropables-wrap'>
						{question.examples.map((value,index)=>{
							return(
							<Droppable droppableId={value} key={value} direction="horizontal">
								{provided=>{
									let dragAnswerStyle='dragable-question__dropable'
									let doneExamples=0
									for (let i=0;i<Object.keys(question.myDroppedAnswers).length;i++){
										if (question.myDroppedAnswers[Object.keys(question.myDroppedAnswers)[i]].length!=0){
											doneExamples++
										}
									}

									if (doneExamples==Object.keys(question.myDroppedAnswers).length){
									if(question.correct[index]==question.myDroppedAnswers[Object.keys(question.myDroppedAnswers)[index]]){
										dragAnswerStyle='dragable-question__dropable--right'
									}
									else if((question.correct[index]!=question.myDroppedAnswers[Object.keys(question.myDroppedAnswers)]) && (question.myDroppedAnswers[Object.keys(question.myDroppedAnswers)[index]].length>0)){
										dragAnswerStyle='dragable-question__dropable--wrong'
									}
								}


									return(
									<div className={dragAnswerStyle}  ref={provided.innerRef} {...provided.droppableProps}>
										<><span>{value} - </span> <span>{question.myDroppedAnswers[Object.keys(question.myDroppedAnswers)[index]]}</span></>
										{provided.placeholder}		
									</div>)
								}}
							</Droppable>)
				
						}
						)}
					</div>

					<Droppable droppableId={'start'}>
						{provided=>(
							<div className='dragable-question__dragables-wrap' ref={provided.innerRef} {...provided.droppableProps}>
								{Object.keys(question.answers).map((value,index)=>{
								if(question.answers[value]!=null){
								return(
									<AnswerDrag value={question.answers[value]} index={index} key={question.answers[value]}/>)}
								})}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</div>
			</DragDropContext>
			}
		</div>
	</div>
)
}

        const Answer = ({ content, chosenAnswer=false, letter, checkNormalQuestion, }) => {
            let answerStyle = 'normal-question__answer'
            if (chosenAnswer.content==content) {
                if (chosenAnswer.correct) {answerStyle='normal-question__answer--right'} else {answerStyle='normal-question__answer--wrong'}
            }
        	
            return (
                <div className={answerStyle} onClick={()=>{checkNormalQuestion(content)}}>
					{letter} {content}
				</div>
            )
        }

        const AnswerDrag = ({value, index}) => {  
            return(
                <Draggable draggableId={value} index={index}>
					{provided=>
						(<div className='dragable-question__dragable' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
							{value}
						</div>)
					}
				</Draggable>
            )
        }

export default Questions