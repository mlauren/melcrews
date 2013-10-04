/**
 * Created with JetBrains PhpStorm.
 * User: loganfisher
 * Date: 10/3/13
 * Time: 10:20 PM
 * To change this template use File | Settings | File Templates.
 */



(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=213021155398697";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
