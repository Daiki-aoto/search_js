
$(function() {
    var $searchInput = $('#search'); 
    var $searchElem = $('.js-extraction');
    var excludedClass = 'is-excluded';
    
  
    function extraction() {
        var keywordArr = $searchInput.val().toLowerCase().replace('　', ' ').split(' '); 
        $searchElem.removeClass(excludedClass).show();
        for (var i = 0; i < keywordArr.length; i++) {
            for (var j = 0; j < $searchElem.length; j++) {
                var thisString = $searchElem.eq(j).text().toLowerCase();
                if(thisString.indexOf(keywordArr[i]) == -1) { 
                    $searchElem.eq(j).addClass(excludedClass); 
                }
            }
        }
        $('.' + excludedClass).hide(); 
    }
 
    $searchInput.on('load keyup blur', function() {
        extraction();
    });
});
