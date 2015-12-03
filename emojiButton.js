javascript:(function(){
    var emoJ = ['( ´ ▽ ` )ﾉ', 'ヽ(ｏ`皿′ｏ)ﾉ', '(・∀・ )', '(￣(エ)￣)', '（￣へ￣）', '( 　ﾟ,_ゝﾟ)', '(ι´Д｀)ﾉ', '(･ｪ-)', 'ლ(́◉◞౪◟◉‵ლ)', 'щ(ಠ益ಠщ)', '(ノಠ益ಠ)ノ彡┻━┻', '｡◕ ‿ ◕｡', '( °٢° )', 'ʘ‿ʘ', 'ಥ⌣ಥ', 'ಥ‿ಥ', '(ΘεΘ;)', '(n˘v˘•)¬', '(✪㉨✪)', 'ヽ(๏∀๏ )ﾉ', '（╹ェ╹）', '╮(─▽─)╭', 'щ(ಥДಥщ)', '≖‿≖', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', '(⊙ヮ⊙)', 'ᕦ(ò_óˇ)ᕤ', 'ᕙ(⇀‸↼‶)ᕗ', '( ಠ◡ಠ )', '(•⊙ω⊙•)', '‘︿’', '（　´∀｀）☆', '(≧ω≦)', '(´ー｀)', '(つд｀)', '(￣。￣)', '(*~▽~)', '( ^▽^)σ)~O~)', '(=゜ω゜)', '(´ω｀)', '(ノ_・。)', '(-＿- )ノ', '(´ヘ｀;)', '(^^;)', '（　´∀｀）', '((((゜д゜;))))', '(=ω=;)', '(。・_・。)', '(o´ω｀o)', '(^▽^)', '(*´д｀*)', '(￣□￣)', '∩(︶▽︶)∩', '(✿◠‿◠)', '(◡‿◡✿)', '(◕‿◕✿)', '(✖╭╮✖)', '(≧◡≦)', '(¬_¬)', '(◑‿◐)', '(◕‿-)', '✖‿✖', '(-’_’-)', '(╥_╥)', '(╯_╰)', '(╯3╰)', '(o_-)', '(¬‿¬)', '(◣_◢)', '(∪ ◡ ∪)', '(≧ω≦)', 'o(≧o≦)o', '(⋋▂⋌)', '(॓_॔)', '(╯ಊ╰)', '(─‿‿─)', '‹(•¿•)›', '(╯︵╰,)', '(︶︹︺)', '(∩︵∩)', '(｡◕‿◕｡)', '(⊙_◎)', '(~￣▽￣)~', '(︶ω︶)', '(+_+)', '(｡♥‿♥｡)', '(✿ ♥‿♥)', '♥╣[-_-]╠♥', '٩(͡๏̯͡๏)۶', '٩(-̮̮̃•̃)۶', '٩(̾●̮̮̃̾•̃̾)۶', '٩(-̮̮̃-̃)۶', '(u_u)', '(*_*)', '(º_º)', '٩(×̯×)۶', '(ñ_ñ)', '(∩▂∩)', '(¬▂¬)', '(╯◕_◕)╯', '(╹◡╹)凸 少', '¯\\_(ツ)_/¯', '(▰˘◡˘▰)', '(☞ﾟ∀ﾟ)☞', 'ლ(╹◡╹ლ)', 'ಠ_ರೃ', 'ಠ_ಠ', '✪‿✪', 'ᵔᴥᵔ', '( ͡° ͜ʖ ͡°) (´・ω・`)', '( ͡° з ͡°) (´・ε・`)', '( ͡° зε・`)', '( ͡o ͜ʖ ͡o)', '( ͡O ͜ʖ ͡O)', '(•̀ᴗ•́)'];


    sheet = document.createElement('style');
    sheet.innerHTML = "div.EmoJ_div {position: absolute; top: 20px; background: lightgrey; -moz-border-radius: 20px; border-radius: 20px; background-color: #A6A6A6; -moz-box-shadow: #B3B3B3 4px 4px 4px; box-shadow: #B3B3B3 4px 4px 4px; padding: 20; width: 500px; margin: auto; left: 0; right: 0;} a.EmoJ_emoj{color: black; text-decoration: none; padding: 3px; border: 1px solid black; height: 25px; display: inline-block; margin: 1px;}";
    document.body.appendChild(sheet);

    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    div = document.createElement('div');
    div.className="EmoJ_div";
    document.body.appendChild(div);

    var i=0;
    emoJ.forEach(function(elem){
        div.innerHTML += '<a href="#" class="EmoJ_emoj" id="EmoJ_id_'+i+'">'+elem+'</a>';
        i++;
    });

    function clickEmoJ(evt){
            if( hasClass(evt.target,'EmoJ_emoj') ){
                var emoj = evt.target;
                var range = document.createRange();
                range.selectNode(emoj);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                console.log(2);
                div.remove();
                sheet.remove();
                document.removeEventListener('click',clickEmoJ,false);
                evt.stopPropagation();
            }
        }
    document.addEventListener('click',clickEmoJ,false);
})();
