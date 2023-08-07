// ------   Typed js  ------- // 

const typed = new Typed('.multiple-text', {
    strings: ['Front End Developer','Designer', 'Blogger'],
    typeSpeed: 80,
    backSpeed: 50, 
    backDelay: 1000, 
    loop: false, 
    showCursor: false,

    showCursor: true, 
    cursorChar: '|',
    
    onStringTyped: function (arrayPos, self) {
      if (arrayPos === (self.strings.length - 1)) {
       
        setTimeout(() => {
          self.reset();
          self.start(); 
        }, 1000); 
      }
    },
  });
  