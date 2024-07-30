$(function() {
  // YOUR CODE HERE

 //ex1
  const toggleButton = $('#toggleButton')
  const myParagraph = $('#myParagraph')

  toggleButton.on('click',function(){
    myParagraph.toggle()
  });

  // ex2

  const colorButton= $('#colorButton')
  const colorDiv = $('#colorDiv')

  colorButton.on('click',function(){
    colorDiv.css('background-color','yellow')
  });

// ex3
  const addClassButton = $('#addClassButton')
  const removeClassButton = $('#removeClassButton')

  const classDiv =$('#classDiv')

  addClassButton.on('click',function(){
    classDiv.addClass('graydiv')
  })
  removeClassButton .on('click',function(){
    classDiv.removeClass('graydiv');
  })

  // ex4 

  const fadeInButton = $('#fadeInButton')
  const fadeOutButton = $('#fadeOutButton')
  const fadeDiv = $('#fadeDiv')

  fadeInButton.on('click',function(){
    fadeDiv.fadeIn()
  });

  fadeOutButton.on('click',function(){
    fadeDiv.fadeOut()
  })

    // ex5


  const slideUpButton = $('#slideUpButton')
  const slideDownButton = $('#slideDownButton')
  const slideDiv= $('#slideDiv')

  slideUpButton.on('click',function(){
    slideDiv.slideUp()
  });

  slideDownButton.on('click',function(){
    slideDiv.slideDown()
  });

  })


