import React from 'react'

export const Header = ({ children, isIntro, restartGame }) => {
    return (
        <div className='header__wrap'>
<div className='header__title'>
Quiz { isIntro ? null : <img onClick={restartGame} src='./assets/zamknij_x.svg' alt="zamknij"/>}
</div>
<div className='header__subtitle'>
					{children}
				</div>
</div>
    )
}

export default Header