window.viewport = function () {
    var width = window.outerWidth > 0 ? window.outerWidth : window.screen.width;
    var widthDevice = width;
    var is_desktop = width >= 768;
    var content = "";
    if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {
        window.ladi_is_desktop = is_desktop;
    }
    if (!is_desktop) {
        widthDevice = 420;

    } else {
        widthDevice = 1200;

        
    }
    content = "width=" + widthDevice + ", user-scalable=no";
    var scale = 1;
    if (!is_desktop && widthDevice != window.screen.width && window.screen.width > 0) {
        scale = window.screen.width / widthDevice;
    }
    if (scale != 1) {
        content += ", initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale;
    }
    var docViewport = document.getElementById("viewport");
    if (!docViewport) {
        docViewport = document.createElement("meta");
        docViewport.setAttribute("id", "viewport");
        docViewport.setAttribute("name", "viewport");
        document.head.appendChild(docViewport);
    }
    docViewport.setAttribute("content", content);
};




window.viewport();