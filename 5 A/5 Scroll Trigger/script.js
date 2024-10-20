gsap.from('#page1 #box', {
    scale:0,
    rotate:360,
    duration:1,
    delay:1
})
gsap.to('#page2 #box', {
    scale:0,
    rotate:360,
    duration:1,
    delay:1,
    scrollTrigger: {
        trigger:'#page2 #box',
        scroller:'body',
        start:'top 55%',
        end:'top 30%',
        scrub:2
    }
})
gsap.to('#page3 #box', {
    x:'50%',
    duration:1,
    scrollTrigger: {
        trigger:'#page2 #box',
        scroller:'body',
        start:'top 55%',
        end:'top 30%',
        scrub:2,
        pin:true
    }
})