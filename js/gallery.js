$(window).load(function(){
  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows' 
  });
});

var grid = $('.grid');
var mAll = $('#m-all'); 
var m1 = $('#m1'); 
var m2 = $('#m2'); 
var m3 = $('#m3'); 


$('.grid-item .icons .icon').magnificPopup({
  type: 'image',
  gallery :{
    enabled: true
  }
});



mAll.click(function(e){
  grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.grid-item'
  });
  
  $('.grid-item .icons .icon').magnificPopup({
    type: 'image',
    gallery :{
      enabled: true
    }
  });
  e.preventDefault();
});


m1.click(function(e){
  grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.g1'
  });
  
  $('.g1 .icons .icon').magnificPopup({
    type: 'image',
    gallery :{
      enabled: true
    }
  });
  e.preventDefault();
});

m2.click(function(e){
  grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.g2'
  });

  $('.g2 .icons .icon').magnificPopup({
    type: 'image',
    gallery :{
      enabled: true
    }
  });
  e.preventDefault();
});

m3.click(function(e){
  grid.isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.g3'
  });
  
  $('.g3 .icons .icon').magnificPopup({
    type: 'image',
    gallery :{
      enabled: true
    }
  });
  e.preventDefault();
});