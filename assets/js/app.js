'use strict';

document.addEventListener('DOMContentLoaded', () => {
	// elems
	const chooseThemeBtn = document.querySelector('#choose-theme'),
		chooseThemeModal = document.querySelector('.profile__menu--3'),
		notificationBtn = document.querySelector('#notification'),
		notificationModal = document.querySelector('.profile__menu--2'),
		arrowDownBtn = document.querySelector('#shop__additional-menu'),
		arrowDownModal = document.querySelector('.profile__menu--1');
	
	chooseThemeBtn.addEventListener('click', () => {
		chooseThemeModal.classList.toggle('active');
	});
	
	notificationBtn.addEventListener('click', () => {
		notificationModal.classList.toggle('active');
	});
	
	arrowDownBtn.addEventListener('click', () => {
		arrowDownModal.classList.toggle('active');
	});
	const modal = document.querySelectorAll('.modal'),
		body = document.querySelector('#body');
	
	// functions
	function checkCloseTrigger(target, modal, item) {
		if ((target === item) || (target.classList.contains('modal__close'))) {
			closeModalWindow(modal);
		}
	}
	
	function openModalWindow(modal) {
		modal.classList.add('active');
		body.classList.add('active-body');
	}
	
	function closeModalWindow(modal) {
		modal.forEach(item => {
			item.classList.remove('active');
		});
	
		body.classList.remove('active-body');
	}
	
	function openPage(page, current) {
		page.classList.add('active');
		current.classList.remove('active');
	}
	
	// goods
	const hoodieItem = document.querySelectorAll('.hoodie__item'),
		modalAbout = document.querySelector('.modal--about');
	
	hoodieItem.forEach(item => {
		item.addEventListener('click', () => {
			openModalWindow(modalAbout);
		});
	});
	
	// ordering
	// const orderBtn = document.querySelector('#order-btn'),
	// 	orderPage = document.querySelector('#order-page');
	
	// orderBtn.addEventListener('click', () => {
	// 	openModalWindow(orderPage);
	// });
	
	// close-modal
	modal.forEach(item => {
		item.addEventListener('click', (e) => {
			const target = e.target;
	
			checkCloseTrigger(target, modal, item);
		});
	});
	const fullscreenBtn = document.querySelector('#fullscreen'),
		modalFullscreen = document.querySelector('.modal--fullscreen'),
		subtractBtn = document.querySelector('#subtract-btn');
	
	fullscreenBtn.addEventListener('click', () => {
		openModalWindow(modalFullscreen);
	});
	
	subtractBtn.addEventListener('click', () => {
		closeModalWindow(modal);
	});
});