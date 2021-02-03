
$(function() {
    var $searchInput = $('#search'); // 入力エリア
    var $searchElem = $('.js-extraction'); // 絞り込む要素
    var excludedClass = 'is-excluded'; // 絞り込み対象外の要素に付与するclass
 
    // 絞り込み処理
    function extraction() {
        var keywordArr = $searchInput.val().toLowerCase().replace('　', ' ').split(' '); // 入力文字列を配列に格納
        $searchElem.removeClass(excludedClass).show();// 現在非表示にしているリストを表示する
        for (var i = 0; i < keywordArr.length; i++) {
            for (var j = 0; j < $searchElem.length; j++) {
                var thisString = $searchElem.eq(j).text().toLowerCase();
                if(thisString.indexOf(keywordArr[i]) == -1) { // 入力文字列と一致する文字列がない場合
                    $searchElem.eq(j).addClass(excludedClass); // 絞り込み対象外のclass付与
                }
            }
        }
        $('.' + excludedClass).hide(); // 絞り込み対象外の要素の非表示
    }
 
    $searchInput.on('load keyup blur', function() {
        extraction();
    });
});