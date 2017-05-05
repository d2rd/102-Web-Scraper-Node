//Solutions from Punit to apply to 102
jQuery(".title_block .title_wrapper h1")[0].innerText //Gets title as trimmed text.
"Anchorman 2: The Legend Continues (2013)"

jQuery(".title_block .title_wrapper h1 a")[0].innerText "2013" // returns value in array position '0'


jQuery(".title_block .title_wrapper h1 a").text()  //returns text from '<a>'element.
"2013"

jQuery(".title_block .title_wrapper h1").text()  //gets all text from '<h1>' element (includes unwanted padding at right).
"Anchorman 2: The Legend Continues (2013)            "

jQuery(".even")[div.news_item.even, div.list - preview.even, div.list - preview.even, div.list - preview.even, tr.even, tr.even, tr.even, tr.even, tr.even, tr.even, tr.even, div.even, prevObject: ea.fn.init(1), context: document, selector: ".even"] 0: div.news_item.even1: div.list - preview.even2: div.list - preview.even3: div.list - preview.even4: tr.even5: tr.even6: tr.even7: tr.even8: tr.even9: tr.even10: tr.even11: div.evencontext: documentlength: 12 prevObject: ea.fn.init(1) selector: ".even"
__proto__: Object(0)  //Filters only even values from the specified element.

jQuery(".even").text()


$(".subtext meta")[0].content  //Gets rating from the class '.subtext'
"PG-13"

//Tanner's Solutions
$(".title_wrapper h1").first().clone().children().remove().end().text()
"Anchorman 2: The Legend Continues             "

$(".title_wrapper h1").first().clone().children().remove().end().text().trim()
"Anchorman 2: The Legend Continues"

$(".title_block .title_wrapper h1 a").text()
"2013"

$(".subtext meta")[0].content
"PG-13"

$(".subtext meta").first().attr('content')
"PG-13"

