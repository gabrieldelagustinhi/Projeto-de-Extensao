$(document).ready(function () {
    // Progress bar
    let containerA = document.getElementById("circleA")

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64DAF9',
        
        fill: 'rgba(0, 0, 0, 0.5)',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');
        }
    });

    let containerB = document.getElementById("circleB")

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('25%');

        }
    });

    let containerC = document.getElementById("circleC")

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');

        }
    });

    let containerD = document.getElementById("circleD")

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64DAF9',
        
        fill: 'rgba(0, 0, 0, 0.5)',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');
        }
    });

    let containerE = document.getElementById("circleE")

    let circleE = new ProgressBar.Circle(containerE, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('25%');

        }
    });

    let containerF = document.getElementById("circleF")

    let circleF = new ProgressBar.Circle(containerF, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');

        }
    });

    let containerG = document.getElementById("circleG")

    let circleG = new ProgressBar.Circle(containerG, {

        color: '#64DAF9',
        
        fill: 'rgba(0, 0, 0, 0.5)',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');
        }
    });

    let containerH = document.getElementById("circleH")

    let circleH = new ProgressBar.Circle(containerH, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('25%');

        }
    });

    let containerI = document.getElementById("circleI")

    let circleI = new ProgressBar.Circle(containerI, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');

        }
    });

    let containerJ = document.getElementById("circleJ")

    let circleJ = new ProgressBar.Circle(containerJ, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');

        }
    });

    let containerK = document.getElementById("circleK")

    let circleK = new ProgressBar.Circle(containerK, {

        color: '#64DAF9',
        
        fill: 'rgba(0, 0, 0, 0.5)',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },
        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('25%');
        }
    });

    let containerL = document.getElementById("circleL")

    let circleL = new ProgressBar.Circle(containerL, {

        color: '#64DAF9',
        strokeWidth: 8,
        fill: 'rgba(0, 0, 0, 0.5)',
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#65DAF9' },

        step: function (state, circle) {

            circle.path.setAttribute('stroke', state.color);

            circle.setText('50%');

        }
    });


    // Iniciando o loader quando o usuário chega no elemento
    let dataAreaOffset = $('#idiomas-area').offset();
    let stop = 0;

    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 700) && stop == 0) {

            circleA.animate(0.5);
            circleB.animate(0.25);
            circleC.animate(0.5);
            circleD.animate(0.5);
            circleE.animate(0.25);
            circleF.animate(0.5);
            circleG.animate(0.5);
            circleH.animate(0.25);
            circleI.animate(0.5);
            circleJ.animate(0.5);
            circleK.animate(0.25);
            circleL.animate(0.5);

            stop = 1;

        }
    });

    // Parallax
    setTimeout(function() {

        $('#idiomas-area').parallax({imageSrc: 'img/idiomasparallax.png'});
        $('#opportunities-area').parallax({imageSrc: 'img/pattern.png'});

    }, 250);

    // Filtro do portifólio

    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.discipline-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'bas-btn') {
            eachBoxes('bas', boxes)
        } else if (type == 'tec-btn') {
            eachBoxes('tec', boxes)
        } else if (type == 'prog-btn') {
            eachBoxes('prog', boxes)
        } else {
            eachBoxes('all', boxes)
        }
    });

    function eachBoxes(type, boxes) {
        if (type == 'all') {
            $(boxes).fadeIn();
        } else {
            $(boxes).each(function() {
                if (!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                }
            })
        }
    }

});
