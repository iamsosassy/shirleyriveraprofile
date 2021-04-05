function myFunction(x) {
    if (x.matches) {
        var layer1 = document.getElementById('bottom-cloud')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', function (e) {
            var offset = window.pageYOffset;
            scroll = offset;
            layer1.style.left = (3 + scroll / 30) + '%';
        });

        var layer2 = document.getElementById('top-cloud')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', function (e) {
            var offset = window.pageYOffset;
            scroll = offset;
            layer2.style.left = (70 + scroll / 30) + '%';
        });
    }
else {
        var layer1 = document.getElementById('bottom-cloud')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', function (e) {
            var offset = window.pageYOffset;
            scroll = offset;
            layer1.style.left = (15 + scroll / 30) + '%';
        });

        var layer2 = document.getElementById('top-cloud')
        scroll = window.pageYOffset;
        document.addEventListener('scroll', function (e) {
            var offset = window.pageYOffset;
            scroll = offset;
            layer2.style.left = (75 + scroll / 30) + '%';
        });
    }
    if (matchMedia) {
        const x = window.matchMedia("(max-width: 1050px)");
        x.addEventListener(myFunction);
        myFunction(x);
    }
    
}


