(function ($) {

  // Preloader.
  $(window).on('load', function () {
    $('#preloader').fadeOut();
  });
  // --------------------------------

  // Form button
  $('#index-page #form-btn').on('click', function() {
    $('#index-page #form-container').toggleClass('open');
  });
  // --------------------------------


  // Indicator
  var items = $(".f-nav .f-nav-tab");
  var ind = $(".f-nav .indicator");
  var fiWidth = $(".f-nav .f-nav-tab:nth-child(1)").width();
  ind.css('width', fiWidth);

  function handleIndicator(el) {
    ind.css('width', el.offsetWidth + 'px');
    ind.css('left', el.offsetLeft + 'px');
  }

  items.each(function (item, index) {
    $(this).on("click", function (e) {
      handleIndicator(e.target);
      $(this).addClass('active').siblings().removeClass('active');
    });
  });
  // --------------------------------


  // Navbar
  $('#theme-navbar .f-nav .f-nav-tab').on('click', function(e) {
    const filter = $(this).data('filter');
    // Hide (f-area)
    if ($(window).width() > 1199) {
      $('#theme-navbar .mega-menu .f-area.'+filter).siblings().hide();
      $('#theme-navbar .mega-menu .f-area.'+filter).show()
    }
    else {
      $('#theme-navbar .mega-menu .f-area.'+filter).show().siblings().hide();
    }

  });

  // Hide all mega-menu
  $('#theme-navbar .has-mega-menu .mega-menu').css('visibility', 'hidden');
  $('#theme-navbar .has-menu .menu').css('visibility', 'hidden');

  // Hide (mega-menu) and (menu) in small screen
  $(window).on('load resize', function() {
    // Check if window width <= 1199px
    if ($(window).width() <= 1199) {
      // Hide theme
      $('#theme-navbar .mega-menu, #theme-navbar .menu').hide();

      // Show (mega-menu) on click
      $('#theme-navbar .has-mega-menu > a').on('click', function() {
        // Consts
        const ele = $(this).parent().find('.mega-menu');

        // Check if (mega-menu) visible
        if (ele.is(':visible')) {
          ele.slideUp();
        } else {
          ele.slideDown();
        }
      });

      // Show (menu) on click
      $('#theme-navbar .has-menu > a').on('click', function() {
        // Consts
        const ele2 = $(this).parent().find('.menu');

        // Check if (menu) visible
        if (ele2.is(':visible')) {
          ele2.slideUp();
        } else {
          ele2.slideDown();
        }
      });

    } else {
      $('#theme-navbar .mega-menu, #theme-navbar .menu').show();
    }
  });

  // Show (links)
  $('#navbar-toggler').on('click', function() {
    $('#theme-navbar').toggleClass('links-on');
  });

  // Add class (scrolled)
  $(window).on('scroll', function() {
    // Check if scrollTiop > 5
    if ($(this).scrollTop() > 5) {
      $('#theme-navbar').addClass('scrolled');
    }
    else {
      $('#theme-navbar').removeClass('scrolled');
    }
  });

  // Function to play "scrollLine();" func when window scroll.
  $(window).on('scroll', function () {
    scrollLine();
  });

  // Function to change "#scroll-line" props.
  function scrollLine() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-line").style.width = scrolled + "%";
  }
  // --------------------------------

  // Filter nav (#filter-nav-v)
  $('#filter-nav-v .tab').on('click', function () {
    // Add class (active).
    $(this).addClass('active').parent().siblings().find('.tab').removeClass('active');
    // Get (data-filter) value.
    const val = $(this).data('filter');
    // Compare table (#compare-table-v).
    $('#compare-table-v tbody tr:not(.hovered, .t-space)').addClass('tr-hide');
    $('#compare-table-v tbody tr[data-filter="'+val+'"]').removeClass('tr-hide');
  });

   // Custom thead (custom-thead).
  $('#custom-thead-v .tab').on('click', function () {
    // Add class (active).
    $(this).addClass('active').siblings().removeClass('active');
    // Get (data-filter) value.
    const val = $(this).data('filter');
    // Compare table (#compare-table-v).
    $('#compare-table-v tbody tr td[data-for]').addClass('td-hide');
    $('#compare-table-v tbody tr td[data-for="'+val+'"]').removeClass('td-hide');
    // Content
    $('#custom-thead-v .tab-content[data-for]').addClass('content-hide');
    $('#custom-thead-v .tab-content[data-for="'+val+'"]').removeClass('content-hide');
  });

  // --------------------------------

  // Section VII

  // (#faqs-category)
  $('#faqs-category .item').on('click', function() {

    $(this).addClass('active').siblings().removeClass('active');

    const data = $(this).data('category');

    // hide all boxes then show one that clicked
    $('#faqs .box').hide();
    $('#faqs .box.category-' + data).show();

  });

  // (#faqs .q)
  $('#faqs .q .q-h').on('click', function() {
    $(this).parent().toggleClass('open').siblings().removeClass('open');
    if ($(this).parent().hasClass('open')) {
      $(this).parent().find('.q-b').slideDown();
      $(this).parent().siblings().find('.q-b').slideUp();
    } else {
      $(this).parent().find('.q-b').slideUp();
    }
  });
  // --------------------------------

  // VPS Page > Filter Bar
  $('#vps-page .filter-bar .item').on('click', function() {
    // vars
    const e = $(this).data('show');
    $('.filter-' + e).addClass('show').siblings().removeClass('show');

    // actions
    $(this).parents('.filter-bar').find('.item').removeClass('active')
    $(this).addClass('active');
  });
  // --------------------------------

  // Dedicated Page > Filter Bar
  $('#dedi-page .filter-bar .item').on('click', function() {
    // vars
    const e = $(this).data('show');
    $('.filter-' + e).addClass('show').siblings().removeClass('show');

    // actions
    $(this).parents('.filter-bar').find('.item').removeClass('active')
    $(this).addClass('active');
  });
  // --------------------------------

  // Abuse form functions

  // Vars
  let ip_in                 = $('#ip-in').html();
  let url_in                = $('#url-in').html();
  let trademark_word_in     = $('#trademark-word-in').html();
  let trademark_reg_body_in = $('#trademark-reg-body-in').html();
  let trademark_url_in      = $('#trademark-url-in').html();
  let brand_type_in         = $('#brand-type-in').html();
  let description_1_in      = $('#description-1-in').html();
  let owner_name_in         = $('#owner-name-in').html();
  let description_2_in      = $('#description-2-in').html();
  let description_3_in      = $('#description-3-in').html();
  let description_4_in      = $('#description-4-in').html();
  let description_5_in      = $('#description-5-in').html();
  let uuid_in               = $('#uuid-in').html();
  let technical_details_in  = $('#technical-details-in').html();

  // Vars
  let email_in      = $('#email-in').html();
  let full_name_in  = $('#full-name-in').html();
  let phone_in      = $('#phone-in').html();
  let address_in    = $('#address-in').html();
  let city_in       = $('#city-in').html();
  let state_in      = $('#state-in').html();
  let country_in    = $('#country-in').html();

  // Remove (.i-g).
  $('#abuse-page .form-row[data-type] .i-g:not(.show)').remove();

  // Vars
  let report_details_row        = $('#abuse-page .form-row[data-type=report-details]').html();
  let personal_info_row         = $('#abuse-page .form-row[data-type=personal-info]').html();
  let terms_and_conditions_row  = $('#abuse-page .form-row[data-type=terms-and-conditions]').html();

  // Remove (.form-row).
  $('#abuse-page .form-row[data-type=report-details]').remove();
  $('#abuse-page .form-row[data-type=personal-info]').remove();
  $('#abuse-page .form-row[data-type=terms-and-conditions]').remove();

  // Show required inputs.
  $('#abuse-page #abuse-form #category-select').on('change', function() {

    // Get label value.
    let label = this.value;

    // Check if label value = copyright or trademark.
    if (label == 'copyright' || label == 'trademark') {

      // Remove (.form-row)
      $('.form-row[data-type]').remove();

      // Add html elements.
      $('#category-row').after('<div class="form-row" data-type="report-details" id="report-details-row">'+ report_details_row +'</div>');
      $('#report-details-row').after('<div class="form-row" data-type="personal-info" id="personal-info-row">'+ personal_info_row +'</div>');
      $('#personal-info-row').after('<div class="form-row" data-type="terms-and-conditions" id="terms-and-conditions-row">'+ terms_and_conditions_row +'</div>');

    }
    // Check if label value = networkAttack or malware, illegal, intrusion, other, phishing, spam.
    else if (label == 'networkAttack' || label == 'malware' || label == 'illegal' || label == 'intrusion' || label == 'other' || label == 'phishing' || label == 'spam') {

      // Remove (.form-row)
      $('.form-row[data-type]').remove();

      // Add html elements.
      $('#category-row').after('<div class="form-row" data-type="report-details" id="report-details-row">'+ report_details_row +'</div>');
      $('#report-details-row').after('<div class="form-row" data-type="personal-info" id="personal-info-row">'+ personal_info_row +'</div>');

    }

    // Remove (.form-row).
    else {
      $('.form-row[data-type]').remove();
    }

    // Check if label = copyright.
    if (label == 'copyright') {
      // Add html elements
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ brand_type_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_1_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ owner_name_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_3_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ phone_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ address_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ city_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ state_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ country_in +'</div>');
    }

    // Check if label = networkAttack.
    else if (label == 'networkAttack') {
      // Add html elements
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ technical_details_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_3_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = malware.
    else if (label == 'malware') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ technical_details_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_2_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = copyright.
    else if (label == 'illegal') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_3_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = intrusion.
    else if (label == 'intrusion') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ technical_details_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_2_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = other.
    else if (label == 'other') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_3_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = phishing.
    else if (label == 'phishing') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_2_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = spam.
    else if (label == 'spam') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_4_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_5_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
    }

    // Check if label = trademark.
    else if (label == 'trademark') {
      // Add html elements.
      $('#report-details-row .inputs').append('<div class="i-g">'+ ip_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ owner_name_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ trademark_word_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ trademark_reg_body_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ trademark_url_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ brand_type_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ description_3_in +'</div>');
      $('#report-details-row .inputs').append('<div class="i-g">'+ uuid_in +'</div>');
      // Add html elements.
      $('#personal-info-row .inputs').append('<div class="i-g">'+ email_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ full_name_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ phone_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ address_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ city_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ state_in +'</div>');
      $('#personal-info-row .inputs').append('<div class="i-g">'+ country_in +'</div>');
    }

  });

  // Check all inputs.
  $(document.body).keyup('#abuse-page #abuse-form input', function () {
    function check_required_inputs() {
      $('input[required]').each(function(){
        if( $(this).val() == ""){
          $('#submit-abuse-form').attr('disabled', 'disabled');
          return false;
        }
        else {
          $('#submit-abuse-form').attr('disabled', false);
        }
    });
      return true;
    }
    check_required_inputs();
  });

  $(document.body).on('click', '#abuse-page #abuse-form input[name=terms]', function () {
    if($(this).prop("checked") == true){
      $('#submit-abuse-form').attr('disabled', false);
    }
    else if($(this).prop("checked") == false){
      $('#submit-abuse-form').attr('disabled', 'disabled');
    }
  });
  // --------------------------------

  // TRIAL PAGE => QUESTIONS SECTION
  $('#ques .i.active .i-body').slideDown();
  $('#ques .i .i-head').on('click', function() {
    $(this).parent().toggleClass('active').siblings().removeClass('active');
    $(this).parent().find('.i-body').slideToggle().parent().siblings().find('.i-body').slideUp();
  });
  // --------------------------------

}(jQuery));

$(document).ready(function() {
  jQuery.validator.addMethod("phoneUS", function(e, r) {
      return e = e.replace(/\s+/g, ""),
      this.optional(r) || e.length > 9 && e.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
  }, "Please enter a valid phone number."),
  $("#abuse-form").validate({
      rules: {
          ip_address: {
              required: !0
          },
          url: {
              required: !0,
              url: !0
          },
          brand_owner: {
              required: !0
          },
          description_1: {
              required: !0,
              minlength: 30
          },
          description_2: {
              required: !1,
              minlength: 30
          },
          description_3: {
              required: !0,
              minlength: 30
          },
          technical_details: {
              required: !0,
              minlength: 30
          },
          copyright_owner_name: {
              required: !0,
              minlength: 3
          },
          abuse_report_uuid: {
              required: !1,
              minlength: 3
          },
          email_1: {
              required: !0,
              email: !0,
              minlength: 3
          },
          full_name: {
              required: !0,
              minlength: 3
          },
          phone: {
              required: !0,
              phoneUS: !0
          },
          address: {
              required: !0,
              minlength: 3
          },
          city: {
              required: !0,
              minlength: 3
          },
          state: {
              required: !0,
              minlength: 3
          },
          country: {
              required: !0
          },
          signature: {
              required: !0,
              minlength: 3
          },
          description_4: {
              required: !0,
              minlength: 30
          },
          description_5: {
              required: !0,
              minlength: 30
          },
          trademark_word: {
              required: !0,
              minlength: 3
          },
          trademark_reg_body: {
              required: !0,
              minlength: 30
          },
          trademark_url: {
              required: !0,
              url: !0,
              minlength: 3
          }
      }
  })
});
