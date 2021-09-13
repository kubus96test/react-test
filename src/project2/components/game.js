import React,{useState, useEffect} from 'react'
import Intro from './intro'
import Header from './header'
import Category from './category'
import Selected from './selected'
import Questions from './questions'
import Result from './result'

const Game = ()=>{
	const [category,setCategory]=useState({id:null,name:null, started:false})
	const [categories, setCategories] = useState([])
	const [finished,setFinished] = useState(false)
	const [points,setPoints]= useState({got:0,max:0})
	let toRender=null

	useEffect(getData, [])

    function getData() {
        fetch("./data.json").then(res => res.json()).then(res => {
            let newCategories = []
            let id=0
            for (const name in res.categories) {
            	id++
                newCategories.push({
                	id:id,
                    name: name.toUpperCase(),
                    logo: `${res.categories[name].logo}`
                })
            }
            setCategories(newCategories)
        })
    }

    function tryAgain(id,name){
    	setCategory({id:id,name:name, started:false})
    	setFinished(false)
    	setPoints({got:0, max:0})
    }

    if(category.name){
    	if(category.started){
    		if(finished){
    			toRender= <Result category={category} categories={categories} points={points.got} max={points.max} tryAgain={tryAgain} restartGame={()=>{setCategory({id:null, name: null, started:null}); setPoints({got:null, max:null}); setFinished(null)}}>
    			<Category name={category.name} logo={categories[category.id-1].logo}  selected='--selected'/>
    						</Result>
    		}
    		else{
    			toRender=<Questions category={category.name} setFinished={setFinished} movePointsUp={setPoints} renderHeader={(questionType,questionNumber,questionTotal)=>(
    				<Header restartGame={()=>{setCategory({id:null,name:null,started:null}); setPoints({got:0, max:0})}}>
    					{questionType=='normal' ? <span className='question__subtitle'>Wybierz prawidłową odpowiedź</span> : <span className='question__subtitle'>Przeciągnij prawidłową odpowiedź w puste miejsce</span>}
						<div className='question__number-wrap'>
						<div className='question__number'>{questionNumber}/{questionTotal}</div>
						</div>
    				</Header>
    				)}/>
    		}
    	}
    	else{
    		toRender= <Selected category={category.name} setCategory={setCategory} renderHeader={()=>(<Header restartGame={()=>setCategory({id:null,name:null,started:null})}><>Wybrana kategoria:</></Header>)}>
						<Category name={category.name} logo={categories[category.id-1].logo}  selected='--selected'/>
					</Selected>
    	}
    }
    else{
    	toRender=<Intro> 
					<Header isIntro={true}>
						<>10 pytań/5 kategorii</>
					</Header>
					<div className='intro__content'>
						{categories.map((el,index)=>(<div className='intro__item' onClick={()=>{setCategory(prev=>({...prev,id:el.id,name:el.name}))}} key={index}><Category name={el.name} logo={el.logo} id={el.id} key={el.name} setCategory={setCategory}/></div>))}	
					</div>
				</Intro>
    }
	return(
		<>
			{toRender}
		</>
)
}

export default Game