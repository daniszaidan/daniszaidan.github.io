var buttons = document.getElementsByTagName('button');
Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});
function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + 'px';

    var rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left -d/2 + 'px';
    circle.style.top = e.clientY - rect.top - d/2 + 'px';

    circle.classList.add('ripple');
}

// countCategory('all');
// function countCategory(category){
//     let size = 0;
//     switch(category) {
//         case "all":
//             size = $(".portfolio").size();
//             break;
//         case "website":
//             size = $(".website").size();
//             break;
//         case "design":
//             size = $(".design").size();
//             break;
//         case "art":
//             size = $(".art").size();
//             break;
//         default:
//             size = $(".portfolio").size();
//     }
//     $("#count_category").text("(" + size + ")");
// }

function changeCategory(obj, category) {
    switch(category) {
        case "all":
            $(".portfolio").hide();
            $(".portfolio").show();
            break;
        case "website":
            $(".portfolio").hide();
            $(".website").show();
            break;
        case "design":
            $(".portfolio").hide();
            $(".design").show();
            break;
        case "art":
            $(".portfolio").hide();
            $(".art").show();
            break;
        case "uiux":
            $(".portfolio").hide();
            $(".uiux").show();
            break;
        case "desktop":
            $(".portfolio").hide();
            $(".desktop").show();
            break;
        case "3d":
            $(".portfolio").hide();
            $(".3d").show();
            break;
        default:
            $(".portfolio").hide();
            $(".portfolio").show();
    }
    // countCategory(category);
    // $(this).addClass("active");

    var thisButton = "." + $(obj).attr('class');
    var buttonType = thisButton.split(" ");
    console.log(buttonType[1]);
    $(".btn-category").removeClass("active");
    $("." + buttonType[1] + "").addClass("active");

}