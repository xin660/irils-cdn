function insertAtCursor(t, e) {
    var n = t.scrollTop,
        o = document.documentElement.scrollTop;
    if (document.selection) {
        t.focus();
        var s = document.selection.createRange();
        s.text = e, s.select()
    } else if (t.selectionStart || "0" == t.selectionStart) {
        var l = t.selectionStart,
            c = t.selectionEnd;
        t.value = t.value.substring(0, l) + e + t.value.substring(c, t.value.length), t.focus(), t.selectionStart = l + e.length, t.selectionEnd = l + e.length
    } else t.value += e, t.focus();
    t.scrollTop = n, document.documentElement.scrollTop = o
}
$(function () {
    0 < $("#wmd-button-row").length && (
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-images-button" style="" title="插入图集">图集</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-photoset-button" style="" title="插入相册">相册</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-video-button" style="" title="插入视频">视频</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-biliVideo-button" style="" title="插入blibli">bilibli视频</li>'),
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-cid-button" style="" title="文章跳转">文章跳转</li>'),
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-collapse-button" style="" title="展开隐藏">展开隐藏</li>'),
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-tabs-button" style="" title="tabs标签">tabs标签</li>'),
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-success-button" style="" title="插入成功">成功</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-info-button" style="" title="插入信息">信息</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-warning-button" style="" title="插入警告">警告</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-danger-button" style="" title="插入错误">错误</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-hide-button" style="" title="插入隐藏内容">隐藏内容</li>'), 
        $("#wmd-button-row").append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-owo-button" style="" title="插入表情"><div class="OwO"></div></li>'), 
        new OwO({
        logo: "OωO",
        container: document.getElementsByClassName("OwO")[0],
        target: document.getElementById("text"),
        api: "/usr/themes/0A-X/libs/owo/OwO.json",
        position: "down",
        width: "400px",
        maxHeight: "250px"
    })), 
    $(document).on("click", "#wmd-images-button", function () {
        myField = document.getElementById("text"), 
        insertAtCursor(myField, '[images]\n\n[/images]\n')
    });
    $(document).on("click", "#wmd-photoset-button", function () {
        myField = document.getElementById("text"), 
        insertAtCursor(myField, '[photos]\n\n[/photos]\n')
    });
    $(document).on("click", "#wmd-video-button", function () {
        myField = document.getElementById("text"), 
        insertAtCursor(myField, '[video src=""]\n')
    });
    $(document).on("click", "#wmd-biliVideo-button", function () {
        myField = document.getElementById("text"), 
        insertAtCursor(myField, '[bilibili bv="" p="1"]\n')
    });
    $(document).on('click', '#wmd-cid-button', function () {
        myField = document.getElementById('text');
        insertAtCursor(myField, '[cid=""]\n');
    });
    $(document).on('click', '#wmd-collapse-button', function () {
        myField = document.getElementById('text');
        insertAtCursor(myField, '[collapse]\n[collapse-item expanded="true(打开)/false(关闭)" label="标题"]\n内容\n[/collapse-item]\n[/collapse]\n');
    });
    $(document).on('click', '#wmd-tabs-button', function () {
        myField = document.getElementById('text');
        insertAtCursor(myField, '[tabs]\n[tab-pane label="标题"]\n内容\n[/tab-pane]\n[/tabs]\n');
    });
    $(document).on('click','#wmd-success-button',function() {
        myField = document.getElementById('text'),
        insertAtCursor(myField, '[success]成功[/success]\n');
    });
    $(document).on('click','#wmd-info-button',function() {
        myField = document.getElementById('text'),
        insertAtCursor(myField, '[info]提示[/info]\n');
    });
    $(document).on('click','#wmd-warning-button',function() {
        myField = document.getElementById('text'),
        insertAtCursor(myField, '[warning]警告[/warning]\n');
    });
    $(document).on('click','#wmd-danger-button',function() {
        myField = document.getElementById('text'),
        insertAtCursor(myField, '[danger]危险[/danger]\n');
    });
    $(document).on('click','#wmd-hide-button',function() {
        myField = document.getElementById('text');
        insertAtCursor(myField, '[hide]\n隐藏内容\n[/hide]\n');
    });
});