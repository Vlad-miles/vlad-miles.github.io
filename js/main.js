!(function () {
  var e = document.querySelector(".header");
  window.onscroll = function () {
    window.pageYOffset > 50
      ? e.classList.add("header_active")
      : e.classList.remove("header_active");
  };
})(),
  (function () {
    var e = document.querySelector(".burger"),
      t = document.querySelector(".header__nav"),
      n = document.querySelector(".header__nav-close"),
      r = document.querySelectorAll(".header__link");
    if (
      (e.addEventListener("click", function () {
        t.classList.add("header__nav_active");
      }),
      n.addEventListener("click", function () {
        t.classList.remove("header__nav_active");
      }),
      window.innerWidth <= 767)
    )
      for (var c = 0; c < r.length; c += 1)
        r[c].addEventListener("click", function () {
          t.classList.remove("header__nav_active");
        });
  })(),
  document.querySelectorAll(".js-scroll").forEach(function (e) {
    e.addEventListener("click", function () {
      var e,
        t,
        n,
        r,
        c,
        i,
        o = this.getAttribute("href");
      (e = o),
        (t = 1e3),
        (n = document.querySelector(".header").clientHeight),
        (r = document.querySelector(e).getBoundingClientRect().top - n),
        (c = window.pageYOffset),
        (i = null),
        requestAnimationFrame(function e(n) {
          null === i && (i = n);
          var o,
            a,
            d,
            l = n - i,
            u =
              ((o = l),
              (a = c),
              (d = r),
              (o /= t / 2) < 1
                ? (d / 2) * o * o + a
                : (-d / 2) * (--o * (o - 2) - 1) + a);
          window.scrollTo(0, u), l < t && requestAnimationFrame(e);
        });
    });
  });

(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

// Burger handler
jQuery( function ( $ ) {
	const body = $( 'body' );
  const burgerItem = $(".burger");
  const menu = $(".header__nav");
  const menuCloseItem = $(".header__nav-close");
  const menuLinks = $(".header__link");
  burgerItem.on( "click", function() {
    menu.addClass("header__nav_active");
	body.addClass('noscroll');
	menu.slideDown();
  });
  menuCloseItem.on( "click", function() {
    menu.removeClass("header__nav_active");
	body.removeClass('noscroll');
	menu.slideUp();
  });
  if (window.innerWidth <= 767) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].on("click", function() {
        menu.removeClass("header__nav_active");
		body.removeClass('noscroll');
      });
    }
  }
} );

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
