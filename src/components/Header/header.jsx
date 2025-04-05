import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'

const Header = () => {
  const{user, onClose} = useTelegram();

	return (
		<div onClick={onClose} className={'Header'}>
			<button>закрыть</button>
			<span className={'username'}>
        {user?.username}
      </span>
		</div>
	)
}

export default Header
