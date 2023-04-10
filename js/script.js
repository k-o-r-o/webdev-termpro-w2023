$(document).ready(function() {

  // Add the menu styles to the submit button
  $("input[type='submit']").menu();

  $('#postalForm').validate({
    rules: {
      postal: {
        required: true,
        minlength: 6,
        maxlength: 6,
      },
    },
    messages: {
      postal: {
        required: 'Please enter a postal code',
        minlength: 'Please enter a valid postal code',
        maxlength: 'Please enter a valid postal code',
      },
    },
    submitHandler: function(form) {
      event.preventDefault();
      alert('Form submitted!');
      form.reset();
    }
  });

  $('#postal').on('focus', function() {
    $(this).attr('placeholder', '');
  });

  $('#postal').on('blur', function() {
    $(this).attr('placeholder', 'Postal Code');
  });

  // Toggle footer sections
  $("#footer-toggle").click(function() {
    $(".footer_main").slideToggle("slow", function() {
      if ($(this).is(":visible")) {
        $("#footer-toggle").text("Close");
      } else {
        $("#footer-toggle").text("Open");
      }
    });
  });

  const footerToggle = document.getElementById('footer-toggle');
  const footerMain = document.querySelector('.footer_main');

  footerToggle.addEventListener('click', () => {
    footerMain.classList.toggle('hide');
    if (footerToggle.innerText === 'Close') {
      footerToggle.innerText = 'Open';
    } else {
      footerToggle.innerText = 'Close';
    }
  });

});

(function($) {
    $.fn.menu = function(options){

        var defaults = $.extend({
                'bgColor'       : '#99DDFF',
                'color'         : '#444',
                'hoverBgColor'  : '#002850',
                'hoverColor'    : '#fff',
        }, options);

        return this.each(function(){
            var item = $(this);
            var o = defaults;
          //defaults from style guide
            item.css('font-family', 'Open Sans, sans-serif')
            .css('font-weight','bold')
            .css('text-decoration','none')
            .css('background-color', o.bgColor)
            .css('color', o.color)
            .css('border', 'none')
            .css('border-radius', '5px')
            .css('cursor', 'pointer')
            .css('font-size', '16px')
            .css('padding', '5px 20px')
            .css('text-transform', 'uppercase');

            item.mouseover(function(){
                $(this).css('background-color', o.hoverBgColor)
                .css('color',o.hoverColor)
            });

            item.mouseout(function(){
                $(this).css('background-color',o.bgColor)
                .css('color',o.color)
            });

        });
    }
})(jQuery);


  //___________LEFT OVER CODE FROM TESTING______________
  // Validate postal code
  /*

  */

  /* Parallax effect/ test stuff to be fixed
  document.addEventListener('scroll', function () {
    var main = document.getElementById('parallax-main');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    main.style.backgroundPosition = 'center ' + (-scrollTop * 0.5) + 'px';
  }); 
  
  <script>
document.addEventListener('DOMContentLoaded', function() {
  let topLeft = document.querySelector('.top-left');
  let footer = document.querySelector('.site-footer');
  let originalOffsetTop = topLeft.offsetTop;

  window.addEventListener('scroll', function() {
    let footerTop = footer.getBoundingClientRect().top;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > originalOffsetTop && scrollTop < footerTop - topLeft.offsetHeight) {
      topLeft.classList.add('sticky');
    } else {
      topLeft.classList.remove('sticky');
    }
  });
});
</script>
*/
