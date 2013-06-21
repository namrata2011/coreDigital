/**
 * Created with JetBrains PhpStorm.
 * User: namrata_khandeparkar
 * Date: 6/20/13
 * Time: 4:42 PM
 * To change this template use File | Settings | File Templates.
 */


//$$('div.menuItem').observe('mouseover', menuSelect);
Event.observe( window, 'load', function(){
    $$('#menuContainer div.menuItem').each(function(element){
        console.log(element);
        element.observe('click',menuSelect);
    })

})










function menuSelect(event)
{
    var element = event.element();
    if(element.match('div.subMenuItem'))
    console.log(element);

}


