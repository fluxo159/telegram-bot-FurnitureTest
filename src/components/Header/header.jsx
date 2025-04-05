import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'

const header = () => {
  const{user, onClose} = useTelegram();

	return (
		<div onClick={onClose} className={'header'}>
			<button>закрыть</button>
			<span className={'username'}>
        {user?.username}
      </span>
		</div>
	)
}

export default header
