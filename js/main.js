$(document).ready(function(){

    //isotope filter
  var $grid = $(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
  });

  //filter items on button click
  $(".button-group").on("click","button",function(){
    var filterValue=$(this).attr("data-filter");
    $grid.isotope({filter:filterValue});
  });

  //top sale owl owlCarousel
  $("#new-products .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      470:{
        items:2
      },
      650:{
        items:3
      },
      920:{
        items:4
      },
      1100:{
        items:5

      }
    }
  });
});