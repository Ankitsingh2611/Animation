gsap.to('#box', {
    x:1000,
    duration: 2,
    delay:1,
    backgroundColor: 'blue',
    borderRadius: '50%',
    rotate:360,
    scale:0.5,
    opacity:0,
    repeat:-1,
    yoyo:true
})
gsap.from('h1',{
    color: white,
    delay:1,
    opacity:0,
    y:50,
    duration:1,
    stagger:0.3
})
