jQuery(document).ready(function(){
	
$('.guideText').each(function(){
    var guideText = this.defaultValue;
    var element = $(this);
    
    if(element.val() === guideText){
        element.addClass('guide')
    }

    element.on('focus', function(){
        if(element.val() === guideText){
            element.val('');
            element.removeClass('guide')
        }
    })

    element.on('blur', function(){
        if(element.val() === ''){
            element.val(guideText);
            element.addClass('guide')
        }
    })
})

$('.log_help').children().hover(
  function () {
    const $this = $(this);
    $this.css({
      color: 'black',
      'text-decoration': 'underline'
    });
  },
  function () {
    const $this = $(this);
    $this.css({
      color: 'rgb(209, 141, 81)',
      'text-decoration': 'none'
    });
  }
);

$('.log_help').children().hover(
  function () {
    const $this = $(this);
    $this.css({
      color: 'black',
      'text-decoration': 'underline'
    });
  },
  function () {
    const $this = $(this);
    $this.css({
      color: 'rgb(209, 141, 81)',
      'text-decoration': 'none'
    });
  }
);

$('button').on('mouseenter', function(){
  console.log('enter');
  $(this).addClass('hover')
})
$('button').on('mouseleave', function(){
  console.log('leave');
  $(this).removeClass('hover')
})

})