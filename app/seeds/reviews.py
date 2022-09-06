from app.models import db, Review


def seed_reviews():
    demo = Review(
    user_id = 3,
            location_id = 2,
            content = "I managed to keep my radiation sickness down while here!",
            recommends = True
    )
    demo2 = Review(
    user_id = 2,
            location_id = 1,
            content = "It was about as spooky as you'd expect an abandoned school to be 10/10",
            recommends = True
    )
    demo3 = Review(
    user_id = 3,
            location_id = 1,
            content = "I'm just a negative person.",
            recommends = False
    )
    demo4 = Review(
    user_id = 2,
            location_id = 2,
            content = "I managed to keep my radiation sickness down while here!",
            recommends = True
    )
    demo5 = Review(
    user_id = 2,
            location_id = 3,
            content = "Who could have done this? must be aliens...",
            recommends = True
    )
    demo6 = Review(
    user_id = 4,
            location_id = 10,
            content = "My skin... It's melting...",
            recommends = False
    )
    demo7 = Review(
    user_id = 2,
            location_id = 5,
            content = "I FOUND THE ALIENS WHAT MADE THAT CARHENGE!",
            recommends = True
    )
    demo8 = Review(
    user_id = 3,
            location_id = 10,
            content = "Deathclaw ate my baby!!",
            recommends = False
    )
    demo9 = Review(
    user_id = 2,
            location_id = 10,
            content = "I have a noticable glow after my stay here 10/10",
            recommends = True
    )
    demo10 = Review(
    user_id = 5,
            location_id = 2,
            content = "Pretty good place to flog my wares!",
            recommends = True
    )
    demo11 = Review(
    user_id = 5,
            location_id = 1,
            content = "Don't like abandoned schools. Creepy stuff.",
            recommends = False
    )
    demo12 = Review(
    user_id = 5,
            location_id = 10,
            content = "Made a killing on radaway here.",
            recommends = True
    )
    demo13 = Review(
    user_id = 6,
            location_id = 1,
            content = "Filled with mutants. Should have seen that coming.",
            recommends = False
    )
    demo14 = Review(
    user_id = 6,
            location_id = 10,
            content = "Have I been there? No. Neither should you.",
            recommends = False
    )
    


    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)







generated1 = Review(
    user_id=2,
    location_id=1,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=False,
)


generated2 = Review(
    user_id=3,
    location_id=1,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated3 = Review(
    user_id=4,
    location_id=1,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated4 = Review(
    user_id=5,
    location_id=1,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated5 = Review(
    user_id=6,
    location_id=1,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated6 = Review(
    user_id=2,
    location_id=2,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated7 = Review(
    user_id=3,
    location_id=2,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated8 = Review(
    user_id=4,
    location_id=2,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated9 = Review(
    user_id=5,
    location_id=2,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated10 = Review(
    user_id=6,
    location_id=2,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated11 = Review(
    user_id=2,
    location_id=3,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=True,
)


generated12 = Review(
    user_id=3,
    location_id=3,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated13 = Review(
    user_id=4,
    location_id=3,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated14 = Review(
    user_id=5,
    location_id=3,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated15 = Review(
    user_id=6,
    location_id=3,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated16 = Review(
    user_id=2,
    location_id=4,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated17 = Review(
    user_id=3,
    location_id=4,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated18 = Review(
    user_id=4,
    location_id=4,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated19 = Review(
    user_id=5,
    location_id=4,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated20 = Review(
    user_id=6,
    location_id=4,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated21 = Review(
    user_id=2,
    location_id=5,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated22 = Review(
    user_id=3,
    location_id=5,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated23 = Review(
    user_id=4,
    location_id=5,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated24 = Review(
    user_id=5,
    location_id=5,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated25 = Review(
    user_id=6,
    location_id=5,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated26 = Review(
    user_id=2,
    location_id=6,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated27 = Review(
    user_id=3,
    location_id=6,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated28 = Review(
    user_id=4,
    location_id=6,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated29 = Review(
    user_id=5,
    location_id=6,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated30 = Review(
    user_id=6,
    location_id=6,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated31 = Review(
    user_id=2,
    location_id=7,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated32 = Review(
    user_id=3,
    location_id=7,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=False,
)


generated33 = Review(
    user_id=4,
    location_id=7,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=False,
)


generated34 = Review(
    user_id=5,
    location_id=7,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated35 = Review(
    user_id=6,
    location_id=7,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated36 = Review(
    user_id=2,
    location_id=8,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated37 = Review(
    user_id=3,
    location_id=8,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated38 = Review(
    user_id=4,
    location_id=8,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated39 = Review(
    user_id=5,
    location_id=8,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated40 = Review(
    user_id=6,
    location_id=8,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated41 = Review(
    user_id=2,
    location_id=9,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated42 = Review(
    user_id=3,
    location_id=9,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated43 = Review(
    user_id=4,
    location_id=9,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated44 = Review(
    user_id=5,
    location_id=9,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated45 = Review(
    user_id=6,
    location_id=9,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated46 = Review(
    user_id=2,
    location_id=10,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=True,
)


generated47 = Review(
    user_id=3,
    location_id=10,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=False,
)


generated48 = Review(
    user_id=4,
    location_id=10,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated49 = Review(
    user_id=5,
    location_id=10,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated50 = Review(
    user_id=6,
    location_id=10,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated51 = Review(
    user_id=2,
    location_id=11,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated52 = Review(
    user_id=3,
    location_id=11,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated53 = Review(
    user_id=4,
    location_id=11,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated54 = Review(
    user_id=5,
    location_id=11,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated55 = Review(
    user_id=6,
    location_id=11,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated56 = Review(
    user_id=2,
    location_id=12,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated57 = Review(
    user_id=3,
    location_id=12,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=False,
)


generated58 = Review(
    user_id=4,
    location_id=12,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated59 = Review(
    user_id=5,
    location_id=12,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=False,
)


generated60 = Review(
    user_id=6,
    location_id=12,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated61 = Review(
    user_id=2,
    location_id=13,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated62 = Review(
    user_id=3,
    location_id=13,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated63 = Review(
    user_id=4,
    location_id=13,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated64 = Review(
    user_id=5,
    location_id=13,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated65 = Review(
    user_id=6,
    location_id=13,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=False,
)


generated66 = Review(
    user_id=2,
    location_id=14,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated67 = Review(
    user_id=3,
    location_id=14,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=True,
)


generated68 = Review(
    user_id=4,
    location_id=14,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated69 = Review(
    user_id=5,
    location_id=14,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated70 = Review(
    user_id=6,
    location_id=14,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated71 = Review(
    user_id=2,
    location_id=15,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated72 = Review(
    user_id=3,
    location_id=15,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated73 = Review(
    user_id=4,
    location_id=15,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated74 = Review(
    user_id=5,
    location_id=15,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated75 = Review(
    user_id=6,
    location_id=15,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated76 = Review(
    user_id=2,
    location_id=16,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated77 = Review(
    user_id=3,
    location_id=16,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated78 = Review(
    user_id=4,
    location_id=16,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated79 = Review(
    user_id=5,
    location_id=16,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated80 = Review(
    user_id=6,
    location_id=16,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated81 = Review(
    user_id=2,
    location_id=17,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=False,
)


generated82 = Review(
    user_id=3,
    location_id=17,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated83 = Review(
    user_id=4,
    location_id=17,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=True,
)


generated84 = Review(
    user_id=5,
    location_id=17,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated85 = Review(
    user_id=6,
    location_id=17,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated86 = Review(
    user_id=2,
    location_id=18,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated87 = Review(
    user_id=3,
    location_id=18,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated88 = Review(
    user_id=4,
    location_id=18,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated89 = Review(
    user_id=5,
    location_id=18,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated90 = Review(
    user_id=6,
    location_id=18,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=False,
)


generated91 = Review(
    user_id=2,
    location_id=19,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated92 = Review(
    user_id=3,
    location_id=19,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated93 = Review(
    user_id=4,
    location_id=19,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated94 = Review(
    user_id=5,
    location_id=19,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated95 = Review(
    user_id=6,
    location_id=19,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated96 = Review(
    user_id=2,
    location_id=20,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated97 = Review(
    user_id=3,
    location_id=20,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated98 = Review(
    user_id=4,
    location_id=20,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated99 = Review(
    user_id=5,
    location_id=20,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated100 = Review(
    user_id=6,
    location_id=20,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated101 = Review(
    user_id=2,
    location_id=21,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated102 = Review(
    user_id=3,
    location_id=21,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated103 = Review(
    user_id=4,
    location_id=21,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated104 = Review(
    user_id=5,
    location_id=21,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated105 = Review(
    user_id=6,
    location_id=21,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated106 = Review(
    user_id=2,
    location_id=22,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated107 = Review(
    user_id=3,
    location_id=22,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated108 = Review(
    user_id=4,
    location_id=22,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated109 = Review(
    user_id=5,
    location_id=22,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated110 = Review(
    user_id=6,
    location_id=22,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated111 = Review(
    user_id=2,
    location_id=23,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated112 = Review(
    user_id=3,
    location_id=23,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated113 = Review(
    user_id=4,
    location_id=23,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=False,
)


generated114 = Review(
    user_id=5,
    location_id=23,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated115 = Review(
    user_id=6,
    location_id=23,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated116 = Review(
    user_id=2,
    location_id=24,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated117 = Review(
    user_id=3,
    location_id=24,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated118 = Review(
    user_id=4,
    location_id=24,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated119 = Review(
    user_id=5,
    location_id=24,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=False,
)


generated120 = Review(
    user_id=6,
    location_id=24,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated121 = Review(
    user_id=2,
    location_id=25,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated122 = Review(
    user_id=3,
    location_id=25,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated123 = Review(
    user_id=4,
    location_id=25,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated124 = Review(
    user_id=5,
    location_id=25,
    content="Eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Ultrices vitae auctor eu augue ut lectus arcu. Gravida arcu ac tortor dignissim convallis aenean et. Orci sagittis eu volutpat odio facilisis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Id porta nibh venenatis cras sed felis eget. Vel fringilla est ullamcorper eget nulla. Tortor aliquam nulla facilisi cras. Odio pellentesque diam volutpat commodo sed egestas. Diam maecenas ultricies mi eget mauris. Libero id faucibus nisl tincidunt eget nullam non nisi est. Pretium lectus quam id leo in vitae. \n\n Non enim praesent elementum facilisis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Elementum sagittis vitae et leo duis ut diam quam nulla. Nunc sed augue lacus viverra vitae congue eu consequat ac. Auctor eu augue ut lectus arcu bibendum at varius. Tellus molestie nunc non blandit massa enim nec dui nunc. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Amet purus gravida quis blandit. Cursus in hac habitasse platea dictumst quisque sagittis. Malesuada proin libero nunc consequat interdum varius sit amet. Id interdum velit laoreet id donec ultrices. Gravida quis blandit turpis cursus in. Felis eget velit aliquet sagittis id consectetur. Non enim praesent elementum facilisis leo vel.",
    recommends=True,
)


generated125 = Review(
    user_id=6,
    location_id=25,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated126 = Review(
    user_id=2,
    location_id=26,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated127 = Review(
    user_id=3,
    location_id=26,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated128 = Review(
    user_id=4,
    location_id=26,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated129 = Review(
    user_id=5,
    location_id=26,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated130 = Review(
    user_id=6,
    location_id=26,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=False,
)


generated131 = Review(
    user_id=2,
    location_id=27,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=False,
)


generated132 = Review(
    user_id=3,
    location_id=27,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated133 = Review(
    user_id=4,
    location_id=27,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated134 = Review(
    user_id=5,
    location_id=27,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=False,
)


generated135 = Review(
    user_id=6,
    location_id=27,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit:\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem mollis aliquam ut porttitor leo a. Tellus in metus vulputate eu. Lacus vestibulum sed arcu non odio euismod lacinia. Vitae elementum curabitur vitae nunc sed velit. Sed nisi lacus sed viverra tellus in hac. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Neque gravida in fermentum et. \n Facilisis leo vel fringilla est ullamcorper eget.\n Sit amet est placerat in egestas erat imperdiet sed.",
    recommends=True,
)


generated136 = Review(
    user_id=2,
    location_id=28,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated137 = Review(
    user_id=3,
    location_id=28,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated138 = Review(
    user_id=4,
    location_id=28,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)


generated139 = Review(
    user_id=5,
    location_id=28,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated140 = Review(
    user_id=6,
    location_id=28,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=True,
)


generated141 = Review(
    user_id=2,
    location_id=29,
    content="Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non nisi est sit amet facilisis.\n\n\n Porttitor rhoncus dolor purus non enim.",
    recommends=False,
)


generated142 = Review(
    user_id=3,
    location_id=29,
    content="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Magna etiam tempor orci eu lobortis elementum nibh tellus.\n Varius duis at consectetur lorem donec.\nEu lobortis elementum nibh tellus molestie nunc non.",
    recommends=True,
)


generated143 = Review(
    user_id=4,
    location_id=29,
    content="Volutpat diam ut venenatis tellus in. Quis enim lobortis scelerisque fermentum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Eu sem integer vitae justo eget magna fermentum. Hac habitasse platea dictumst vestibulum rhoncus. ",
    recommends=True,
)


generated144 = Review(
    user_id=5,
    location_id=29,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=True,
)


generated145 = Review(
    user_id=6,
    location_id=29,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated146 = Review(
    user_id=2,
    location_id=30,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated147 = Review(
    user_id=3,
    location_id=30,
    content="Hac habitasse platea dictumst vestibulum rhoncus.\n\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna fermentum. Volutpat diam ut venenatis tellus in. \nQuis enim lobortis scelerisque fermentum.",
    recommends=False,
)


generated148 = Review(
    user_id=4,
    location_id=30,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated149 = Review(
    user_id=5,
    location_id=30,
    content="Quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel",
    recommends=True,
)


generated150 = Review(
    user_id=6,
    location_id=30,
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt porttitor leo a diam.",
    recommends=True,
)










db.session.add(generated1)
db.session.add(generated2)
db.session.add(generated3)
db.session.add(generated4)
db.session.add(generated5)
db.session.add(generated6)
db.session.add(generated7)
db.session.add(generated8)
db.session.add(generated9)
db.session.add(generated10)
db.session.add(generated11)
db.session.add(generated12)
db.session.add(generated13)
db.session.add(generated14)
db.session.add(generated15)
db.session.add(generated16)
db.session.add(generated17)
db.session.add(generated18)
db.session.add(generated19)
db.session.add(generated20)
db.session.add(generated21)
db.session.add(generated22)
db.session.add(generated23)
db.session.add(generated24)
db.session.add(generated25)
db.session.add(generated26)
db.session.add(generated27)
db.session.add(generated28)
db.session.add(generated29)
db.session.add(generated30)
db.session.add(generated31)
db.session.add(generated32)
db.session.add(generated33)
db.session.add(generated34)
db.session.add(generated35)
db.session.add(generated36)
db.session.add(generated37)
db.session.add(generated38)
db.session.add(generated39)
db.session.add(generated40)
db.session.add(generated41)
db.session.add(generated42)
db.session.add(generated43)
db.session.add(generated44)
db.session.add(generated45)
db.session.add(generated46)
db.session.add(generated47)
db.session.add(generated48)
db.session.add(generated49)
db.session.add(generated50)
db.session.add(generated51)
db.session.add(generated52)
db.session.add(generated53)
db.session.add(generated54)
db.session.add(generated55)
db.session.add(generated56)
db.session.add(generated57)
db.session.add(generated58)
db.session.add(generated59)
db.session.add(generated60)
db.session.add(generated61)
db.session.add(generated62)
db.session.add(generated63)
db.session.add(generated64)
db.session.add(generated65)
db.session.add(generated66)
db.session.add(generated67)
db.session.add(generated68)
db.session.add(generated69)
db.session.add(generated70)
db.session.add(generated71)
db.session.add(generated72)
db.session.add(generated73)
db.session.add(generated74)
db.session.add(generated75)
db.session.add(generated76)
db.session.add(generated77)
db.session.add(generated78)
db.session.add(generated79)
db.session.add(generated80)
db.session.add(generated81)
db.session.add(generated82)
db.session.add(generated83)
db.session.add(generated84)
db.session.add(generated85)
db.session.add(generated86)
db.session.add(generated87)
db.session.add(generated88)
db.session.add(generated89)
db.session.add(generated90)
db.session.add(generated91)
db.session.add(generated92)
db.session.add(generated93)
db.session.add(generated94)
db.session.add(generated95)
db.session.add(generated96)
db.session.add(generated97)
db.session.add(generated98)
db.session.add(generated99)
db.session.add(generated100)
db.session.add(generated101)
db.session.add(generated102)
db.session.add(generated103)
db.session.add(generated104)
db.session.add(generated105)
db.session.add(generated106)
db.session.add(generated107)
db.session.add(generated108)
db.session.add(generated109)
db.session.add(generated110)
db.session.add(generated111)
db.session.add(generated112)
db.session.add(generated113)
db.session.add(generated114)
db.session.add(generated115)
db.session.add(generated116)
db.session.add(generated117)
db.session.add(generated118)
db.session.add(generated119)
db.session.add(generated120)
db.session.add(generated121)
db.session.add(generated122)
db.session.add(generated123)
db.session.add(generated124)
db.session.add(generated125)
db.session.add(generated126)
db.session.add(generated127)
db.session.add(generated128)
db.session.add(generated129)
db.session.add(generated130)
db.session.add(generated131)
db.session.add(generated132)
db.session.add(generated133)
db.session.add(generated134)
db.session.add(generated135)
db.session.add(generated136)
db.session.add(generated137)
db.session.add(generated138)
db.session.add(generated139)
db.session.add(generated140)
db.session.add(generated141)
db.session.add(generated142)
db.session.add(generated143)
db.session.add(generated144)
db.session.add(generated145)
db.session.add(generated146)
db.session.add(generated147)
db.session.add(generated148)
db.session.add(generated149)
db.session.add(generated150)

db.session.commit()


def undo_reviews():
  db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE')
  db.session.commit()
