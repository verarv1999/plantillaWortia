/*
Template Name: Kadso - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Main Js File
*/


class App {

    initComponents() {

        // Waves Effect
        Waves.init();

        // Feather Icons
        feather.replace()

        // Popovers
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })

        // Tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })

        // Toasts
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })

        // Toasts Placement
        var toastPlacement = document.getElementById("toastPlacement");
        if (toastPlacement) {
            document.getElementById("selectToastPlacement").addEventListener("change", function () {
                if (!toastPlacement.dataset.originalClass) {
                    toastPlacement.dataset.originalClass = toastPlacement.className;
                }
                toastPlacement.className = toastPlacement.dataset.originalClass + " " + this.value;
            });
        }

        // liveAlert
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        var alertTrigger = document.getElementById('liveAlertBtn')

        function alert(message, type) {
            var wrapper = document.createElement('div')
            wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

            alertPlaceholder.append(wrapper)
        }

        if (alertTrigger) {
            alertTrigger.addEventListener('click', function () {
                alert('Nice, you triggered this alert message!', 'primary')
            })
        }

        if (document.getElementById('app-style').href.includes('rtl.min.css')) {
            document.getElementsByTagName('html')[0].dir = "rtl";
        }
    }

    initMenu() {
        var self = this;
        var body = document.body;

        // Menu Toggle Button ( Placed in Topbar) (Left menu collapse)
        var menuToggleBtn = document.querySelector('.button-toggle-menu');
        if (menuToggleBtn) {
            menuToggleBtn.addEventListener('click', function () {

                if (body.getAttribute('data-sidebar') == 'default') {
                    body.setAttribute('data-sidebar', 'hidden');
                } else {
                    body.setAttribute('data-sidebar', 'default');
                }
            });
        }

        const updateOnWindowResize = () => {
            if (window.innerWidth < 1040) {
                body.setAttribute('data-sidebar', 'hidden');
            } else {
                body.setAttribute('data-sidebar', 'default');
            }
        }

        updateOnWindowResize();
        window.addEventListener('resize', updateOnWindowResize)

        // sidebar - main menu
        if ($("#side-menu").length) {
            var navCollapse = $('#side-menu li .collapse');

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function (event) {
                    var parent = $(event.target).parents('.collapse.show');
                    $('#side-menu .collapse.show').not(parent).collapse('hide');
                }
            });

            // activate the menu in left side bar (Vertical Menu) based on url
            $("#side-menu a").each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active");

                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu') firstLevelParent.addClass("show");

                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");

                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper') secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body')) upperLevelParent.addClass("menuitem-active");
                }
            });
        }
    }

    init() {
        this.initComponents();
        this.initMenu();
    }
}

new App().init();