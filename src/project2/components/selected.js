import React,{useState, useEffect} from 'react'

const Selected = ({children, category, setCategory, renderHeader }) => {
	const[background,setBackground]=useState(null)

		const loadBackground = () => {
            fetch('./data.json').then(res => res.json()).then(res => {
            	setBackground(res.categories.[category.toLowerCase()].backgrounds.selected)
            	})
        }

    useEffect(loadBackground,[])         	

    return (
        <div className='selected__wrapper' style={{backgroundImage: `url("${background}")`, backgroundSize: "cover"}}>
			{renderHeader()}
			<div className='selected__content'>
					<div className='selected__item'>
				{children}
				</div>
				<button className='forward__wrap' onClick={()=>{setCategory(prev=>({...prev, started:true}))}}>
					<div className='forward__text'>
						ROZPOCZNIJ
					</div>
					<img src="./assets/button_strzałka.svg" alt="rozpocznij"/>
				</button>
			</div>
		</div>
    )
}

export default Selected