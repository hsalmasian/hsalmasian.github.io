/* OpenOpenClose(a,b,c) opens a and b and closes c */
function OpenOpenClose(Openone_id, Opentwo_id,Close_id){
    var opo = document.getElementById(Openone_id);
    var opt = document.getElementById(Opentwo_id);
    var cl = document.getElementById(Close_id);
    opo.style.display = "block";
    opt.style.display = "block";
    cl.style.display = "none";
}

/* OpenClose(a,b) opens a and closes b */
function OpenClose(Openone_id, Close_id){
    var opo = document.getElementById(Openone_id);
    var cl = document.getElementById(Close_id);
    opo.style.display = "block";
    cl.style.display = "none";
}

/* CloseCloseOpen(a,b,c) closes a and b and opens c */
function CloseCloseOpen(Closeone_id, Closetwo_id,Open_id){
    var clo = document.getElementById(Closeone_id);
    var clt = document.getElementById(Closetwo_id);
    var op = document.getElementById(Open_id);
    clo.style.display = "none";
    clt.style.display = "none";
    op.style.display = "block";
}

/* CloseOpen(a,b) closes a and opens b */
function CloseOpen(Closeone_id, Open_id){
    var clo = document.getElementById(Closeone_id);
    var op = document.getElementById(Open_id);
    clo.style.display = "none";
    op.style.display = "block";
}

/* OpenOpenCloseScroll(a,b,c,d) opens a and b, closes c, and scrolls to the bottom of d */
function OpenOpenCloseScroll(Openone_id, Opentwo_id,Close_id,scroll_id){
    var opo = document.getElementById(Openone_id);
    var opt = document.getElementById(Opentwo_id);
    var cl = document.getElementById(Close_id);
    var scr = document.getElementById(scroll_id);
    opo.style.display = "block";
    opt.style.display = "block";
    cl.style.display = "none";
    scr.scrollIntoView(true);
}
