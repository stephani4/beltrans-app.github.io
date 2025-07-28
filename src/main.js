import $ from "jquery/dist/jquery.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

import 'bootstrap/dist/js/bootstrap.js';

window.$ = window.Jquery = window.jquery = $;

function toggleMenu(selector) {
    $(selector).toggle();
}

$('.btn-toggle-menu').on('click', function () {
    toggleMenu('.main-menu');
})

