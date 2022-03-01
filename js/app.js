$('.your-class').slick();
$('#getting-started').countdown('2022/06/19', function(event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(this).html(event.strftime('<div><span>%w</span><span>Weeks</span></div> <div><span>%d</span><span>Days</span></div> <div><span>%H</span><span>Hours</span></div> <div><span>%M</span><span>Minutes</span></div> <div><span>%S</span><span>Seconds</span></div>'));
  }); 