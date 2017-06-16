import React from 'react'
import PropTypes from 'prop-types'

export default class Header extends React.Component{
	static propTypes = {
		date: PropTypes.instanceOf(Date),
		onMoveForward: PropTypes.func,
		onMoveBack: PropTypes.func,
		onClickTitle: PropTypes.func,
	}

	render(){
		const { date, onMoveForward, onMoveBack, onClickTitle } = this.props;
		return(
			<div className='monthHeader'>
				<i className='monthHeader-backward'
					onClick={onMoveBack}>
					{String.fromCharCode(9664)}
				</i>
				<span className='monthHeader-title' onClick={onClickTitle}>
					{`${date.getFullYear()} - ${date.getMonth()+1}`}
				</span>
				<i className='monthHeader-forward'
					onclick={onMoveForward}>
					{String.fromCharCode(9654)}
				</i>
			</div>
		)
	}
}
