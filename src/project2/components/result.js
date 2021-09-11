import React,{useState,useEffect} from 'react'
import Category from './category'

const Result = ({ children, category, categories, points, max, tryAgain, restartGame }) => {
	
	const [restOfCategories,setRestOfCategories] = useState([])
	const [background,setBackground] = useState(null)
	useEffect(()=>{
		let temp=[]
		for (let i=0; i<categories.length; i++){
			if(categories[i].name!=category.name){
		temp.push(categories[i])}
		setRestOfCategories(temp)
	}},[])


const loadBackground = () => {
            fetch('./data.json').then(res => res.json()).then(res => {
            	setBackground(res.categories.[category.name.toLowerCase()].backgrounds.result)
            	})
        }

    useEffect(loadBackground,[]) 

    return (
<div className='result__wrapper' style={{backgroundImage: `url("${background}")`, backgroundSize: "cover"}}>
	<div className='result__header'>
		<div className='result__title'>
			Quiz <img onClick={restartGame} src="./assets/zamknij_x.svg" alt="zamknij"/>
		</div>
	</div>

	<div className='result__content'>
		<div className='result__left-section'>
		<div className='result__left-top'>
		</div>
		<div className='result__left-middle'>
				<div className='result__stripe'>TWÓJ WYNIK</div>
				</div>
				<div className='result__left-bottom'>
				</div>
		</div>

		<div className='result__middle-section'>
			<div className='result__middle-top'>
			{children}
			</div>
			<div className='result__middle-middle'>
				<div className='result__number'>{points}/{max}</div>
			</div>
			<div className='result__middle-bottom'>
			<button className='repeat__wrap' onClick={()=>{tryAgain(category.id,category.name)}}>
				<div className='repeat__text'>
					POWTÓRZ QUIZ
				</div>
				<img src="./assets/button_strzałka.svg"/>
			</button>
			</div>
		</div>

		<div className='result__right-section'>
			<div className='result__other'>WYBIERZ INNĄ KATEGORIĘ:
			</div>
			<div class='result__items-wrap'>
			{restOfCategories.map(el=>(
				<div className='result__item' onClick={()=>{tryAgain(el.id,el.name)}} key={el.name}>
					<Category name={el.name} logo={el.logo}/>
				</div>
			))}
			</div>
		</div>
	</div>
<
/div>
    )
}

export default Result