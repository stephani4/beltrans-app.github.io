import * as qs from "qs-esm";
import $ from "jquery/dist/jquery.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/style.scss';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';

window.bootstrap = bootstrap;
window.qs = window.Qs = qs;
window.$ = window.Jquery = window.jquery = $;

import OrderService from "./services/order.js";
const orderService = new OrderService();

;((global) => {
    const btnMenuLight = $('.btn-menu-list-light');
    $(window).scroll(function(event) {
        if ($(window).scrollTop() > 30) {
            btnMenuLight.removeClass('d-none');
        } else {
            btnMenuLight.addClass('d-none');
        }
    });

    function toggleMenu(selector) {
        $(selector).toggle();
    }


    const toggleMenuEvent = () => toggleMenu('.main-menu');
    $('.btn-toggle-menu').on('click', function () {
        toggleMenuEvent();
    });

    global.toggleMenuEvent = toggleMenuEvent;

    $('a.description-toggle').on('click', function mobileDescriptionVisibleToggle() {
        const selector = '.mobile-description-text';
        if ($(selector).hasClass('d-none')) {
            $(selector).removeClass('d-none');
            $(this).closest('section').addClass('min-vh-100');
            $(this).html('Свернуть <i class="bi bi-chevron-double-up"></i>');
            return;
        }

        $(this).closest('section').removeClass('min-vh-100');
        $(this).html('Открыть <i class="bi bi-chevron-double-down"></i>');
        $(selector).addClass('d-none');

        $('html, body').animate({
            scrollTop:
            $('#mobile-description').offset().top
        }, 300);
    });

    function scrollToElement(selector) {
        $('html, body').animate({
            scrollTop:
            $(selector).offset().top
        }, 500);
    }

    const resultModal = new bootstrap.Modal('#resultSendModal');
    async function sendRequestOrder() {
        const formData = qs.parse($(this).serialize());

        $(this).find('input, textarea').each(function () {
            $(this).val('');
        });

        const response = await orderService.send(formData);
    }

    const orderModal = new bootstrap.Modal('#orderModal');
    $(document.forms['order']).submit(function (event) {
        event.preventDefault();

        orderModal.hide();
        resultModal.show();
        sendRequestOrder
            .call(this, {})
            .then(r => ({}));
    });

    $(document.forms['footer-order']).submit(function (event) {
        event.preventDefault();

        resultModal.show();
        sendRequestOrder
            .call(this, {})
            .then(r => ({}));
    });

    global.scrollToElement = scrollToElement;
})(window);