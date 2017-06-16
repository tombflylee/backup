/**
 * 暴露的函数：
 * init():创建dom
 * bindEvent(button):绑定显示按钮
 * modalClose(button):绑定关闭按钮
 */
import './style.scss'
export class Modal {
	/**
	 * @param  {[header:node]}<p>确认信息</p>
	 * @param  {[content:node]}<p>你确定吗</p>
	 * @param  {[footer:node]}<button></button>
	 * @param  {[closeButton:bool]}
	 * @return {[type]}
	 */
	constructor({outerContain,header,content,footer,closeButton}){
		this.outerContain = outerContain;
		this.header = header;
		this.content = content;
		this.footer = footer;
		this.closeButton = closeButton;

	}

	backgroundContain = this._createModalElement('div','background-contain background-contain--hidden');

	/**
	 * 点击事件
	 * @param  {button:绑定按钮}
	 * @return {[type]}
	 */
	bindEvent(button){
		button.addEventListener('click',(e) => {
			e.preventDefault();// 阻止原有事件
			this._toggleClassName(this.backgroundContain,'','background-contain--hidden');// 显示
		})
	}

	/**
	 * 创建dom元素(必须)
	 * @return {[type]}
	 */
	_createModal(){
		var modalContainer = this._createModalElement('div','modal-container');//container元素
		var modalHeader = this._createModalElement('div','modal-header');// head元素
		if(this.header) modalHeader.appendChild(this.header);
		if(this.closeButton) {
			let rightCloseBtn = this._createModalElement('i','modal-close-i');
			this.modalClose(rightCloseBtn);
			modalHeader.appendChild(rightCloseBtn);
		}
		modalContainer.appendChild(modalHeader);

		var modalContent = this._createModalElement('div','modal-content');// content元素，显示内容
		if(this.content) modalContent.appendChild(this.content);
		modalContainer.appendChild(modalContent);

		if(this.footer) {
			var modalFooter = this._createModalElement('div','modal-footer');// footer,可选
			modalFooter.appendChild(this.footer);
			modalContainer.appendChild(modalFooter);
		}
		this.backgroundContain.appendChild(modalContainer);
		this.outerContain.appendChild(this.backgroundContain);
		this.modalClose(this.backgroundContain);
	}

	modalClose(button){
		button.addEventListener('click',(e) =>{
			e.preventDefault();
			this._toggleClassName(this.backgroundContain,'background-contain--hidden'); // 隐藏
		})
	}

	init(){
		this._createModal();
	}

	/**
	 * 创建元素
	 * @param  {[tag：string]}
	 * @param  {[classNames：string]}'modal container',请空格
	 * @return {[type]}
	 */
	_createModalElement( tag, classNames ){
		var _tempElement = document.createElement(tag);
		_tempElement.className = classNames;
		return _tempElement;
	}

	/**
	 * 删除或添加class
	 * @param  {rest[0]:节点，rest[1]:添加的class，rest[2]:删除的class}
	 * @return {[type]}
	 */
	_toggleClassName(...rest){
		let _node = rest[0];
		if(rest[2]){
			let reg = new RegExp(rest[2], 'ig');
			_node.className = _node.className.replace(reg, '');
		}
		if(rest[1]){
			_node.className = `${_node.className} ${rest[1]}`;
		}
	}

}