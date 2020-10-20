// change top topPanel
$(document).ready(function() {
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 2) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });

  // hide-in-stycky
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 2) {
      $('.hide-in-stycky').css({
        'display': "none"
      })

      $('.toTopButtonPanel').css({
        "display": "block"
      })
    } else {
      $('.hide-in-stycky').css({
        'display': "block"
      })

      $('.toTopButtonPanel').css({
        "display": "none"
      })
    }
  })

  // Show and hide Form
  $(window).scrollTop(function() {
    $("header").removeClass("sticky");
  });

  $(".showCF").click(function() {
    $('#lightwindow').fadeTo(200, 1);
    $("#overlay").fadeTo(400, 1);
    // $("#overlay").hide();

  });

  $("#closeContactForm").click(function() {
    $("#lightwindow").hide();
    $("#overlay").hide();
  });
  // hide form with skip
  $(".skip").click(function() {
    $("#lightwindow").hide();
    $("#overlay").hide();
  })

  $("#overlay").click(function() {
    $("#lightwindow").hide();
    $("#overlay").hide();
  })
  //scrollTop
  $('.toTopButtonPanel').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  })
  // SlideShow
  $("#slideshow > li:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > li:first')
      .fadeOut(1500)
      .next()
      .fadeIn(1500)
      .end()
      .appendTo('#slideshow');
  }, 6000);

  // Scroll view
  var lastId,
    topPanel = $("#panel"),
    topPanelHeight = topPanel.outerHeight(),
    sidePanel = $('#buttons')
    menuItems = sidePanel.find("a"),
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

    // Click scroll
  $('a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 80
    }, 700);
  });

  // Scroll active
  $(window).scroll(function() {
    var fromTop = $(this).scrollTop();
    var cur = scrollItems.map(function() {
      if ($(this).offset().top - 100 < fromTop)
        return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

});
