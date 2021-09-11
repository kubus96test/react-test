import React from 'react'

const Category = ({ name=null, id=null, logo=null, setCategory=null, selected=''}) => {
    return (
        <div className={`category__wrap${selected}`}>
		<div className='category__logo'>
		<img src={logo} alt="logo"/>
		</div>
		<div className='category__title'>
		{name}
		</div>
		</div>
    )
}

export default Category