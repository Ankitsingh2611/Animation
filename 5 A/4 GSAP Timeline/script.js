var tl = gsap.timeline()
tl.to('#box1', {
    x:1000,
    duration: 2.5,
    delay:1.5
})
tl.to('#box2', {
    x:1000,
    rotate:360,
    duration: 2.5,
    // delay:4
})

