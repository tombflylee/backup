/**
 * test:calendar_test
 */
// import { Calendar } from './components/calendar/index';

// let calendar = new Calendar();
// calendar.init(document.getElementById('app'));

/**
 * test:modal_test
 */
// import { Modal } from './components/modal-test/index'
//
// let header = document.createElement('p');
// header.textContent = '确认信息';
// let content = document.createElement('p');
// content.textContent = '你确定吗？';
// let modal = new Modal({
// 	outerContain: document.getElementById('app'),
// 	header: header,
// 	content: content,
// });
// modal.init();
// modal.bindEvent(document.getElementById('modal'));

/**
 * test:Form
 */
 import { Form } from './components/Form/index'

let form = new Form(document.getElementById('form-container'));
form.init();
form.submit(document.getElementById('submit-btn'));
