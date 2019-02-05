$(document).ready(function(){

  // $('form').on('submit', function(){

  //     var title = $('#etitle').val();
  //     var quant = $('#equant').val();
  //     var index =  $('#submit').attr('name');
  //     // alert(index);
  //     alert(index);
  //     var obj = {title:title, quant:quant, num:index};
  //     $.ajax({
  //       type: 'POST',
  //       url: '/',
  //       data: obj,
  //       success: function(data){
  //         //do something with the data via front-end framework
  //         location.reload();
  //       }
  //     });

  //     return false;

  // });

  $('button').on('click', function(){
      // alert($(this).attr('name'));
      var item = $(this).attr('name').trim().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/'+item,
        success: function(data){
          //do something with the data via front-end framework
          // location.reload();
        }
      });
  });

});