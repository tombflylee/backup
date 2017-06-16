import React from 'react'

export default class WeekHeader extends React.Component{

	render(){
		const weekMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		return(
			<div className='weekHeader'>
			{weekMap.map((item, index) => {
				<span key={index} className='weekHeader-head'>{item}</span>
			})}
			</div>
		)
	}
}