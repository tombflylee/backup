import React from 'react'
import PropTypes form 'prop-types'

export default class DateContainer extends React.Component{
	static propTypes = {
		placeholder: PropTypes.string,
		onClick: PropTypes.func,
		onClean: PropTypes.func,
		showCleanButton: PropTypes.bool,
	}

	render(){
		return(
			<div className='dateContainer' onClick={onClick}>
				<div className='dateContainer-placeholder'>{placeholder}</div>
				{
					showCleanButton && 
					<div className='dateContainer-clean' onClick={(e) => {
						e.stopPropagation();
						onClean();
					}}>
					✕
					</div>
				}
			</div>
		)
	}
}