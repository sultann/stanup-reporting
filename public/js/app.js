jQuery(document).ready(function ($) {
    // alert(1);
    $('#select-date-filter').datetimepicker({
        maxDate : moment(),
        // defaultDate: moment(),
        daysOfWeekDisabled: [5, 6],
        // format: 'DD/MM/YYYY'
    });

    var totalBlockers = $('.late-reported-list li');
    if(totalBlockers.length>10){
        var button = $('<p>');
            button.addClass('show-more-blockers')
                .text('Show More/Less')
                .on('click', function () {
                    totalBlockers.eq(9).nextAll('li').toggle()
                });
        totalBlockers.eq(9).nextAll('li').hide();
        button.insertAfter('.late-reported-list');
    }



    $('.add-blocker').on('change', function () {
        var val = $(this).val();
        console.log(val);
      if(val == 'yes'){
              $('.blocker-area').slideDown('fast');
      }else{
          $('.blocker-area').slideUp('fast');
      }
    });







});