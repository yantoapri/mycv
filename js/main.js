(function ($) {
    "use strict";
  
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    let html="";
    let porto={
        Frontend: [
          {
            title: 'Hidok',
            img: 'hidok.png',
          },
          {
            title: 'Cloudcare',
            img: 'cloudcare.png',
          },
          {
            title: 'Manulife',
            img: 'manulife.png',
          },
          {
            title: 'UD SODARA',
            img: 'ud-sodara.png',
          },
          {
            title: 'Dashboard Lintasarta',
            img: 'Dashboard Lintasarta.png',
          },
        ],
        FullStack: [
          {
            title: 'LRT Jakarta',
            img: 'lrt jakarta.png',
          },
          {
            title: 'Kejati Yogyakarta',
            img: 'kejati.png',
          },
          {
            title: 'Smart Ics',
            img: 'smart-ics.png',
          },
          {
            title: 'Hidok',
            img: 'hidok.png',
          },
          {
            title: 'Direct Carrier Billing Configuration',
            img: 'dcb.png',
          },
          {
            title: 'DINAS PUSDATARU Provinsi Jawa Tengah',
            img: 'databasePSDA.png',
          },
        ],
      };
      porto.Frontend.forEach(val => {
        html+=` <div
            class="col-lg-4 filter-1"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="img/project/${val.img}" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>${val.title}</h3>
              </div>
            </div>
          </div>`;
      });
      porto.FullStack.forEach(val => {
        html+=` <div
            class="col-lg-4 filter-2"
          >
            <div class="portfolio-wrap">
              <div class="portfolio-img">
                <img src="img/project/${val.img}" alt="Image" />
              </div>
              <div class="portfolio-text">
                <h3>${val.title}</h3>
              </div>
            </div>
          </div>`;
      });
      
      $("#portofolio-data").html(html)
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
})(jQuery);

