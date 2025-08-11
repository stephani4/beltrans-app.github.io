import $ from "jquery/dist/jquery.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.scss';

import 'bootstrap/dist/js/bootstrap.js';

window.$ = window.Jquery = window.jquery = $;

function toggleMenu(selector) {
    $(selector).toggle();
}

$('.btn-toggle-menu').on('click', function () {
    toggleMenu('.main-menu');
});


function mobileDescriptionVisibleToggle() {
    const selector = '.mobile-description-text';
    if ($(selector).hasClass('d-none')) {
        $(selector).removeClass('d-none');
        $(this).html('Свернуть <i class="bi bi-chevron-double-up"></i>');
        return;
    }

    $(this).html('Открыть <i class="bi bi-chevron-double-down"></i>');
    $(selector).addClass('d-none');
}

$('a.description-toggle').on('click', mobileDescriptionVisibleToggle)
