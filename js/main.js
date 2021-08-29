/*
	这里除了一些没有用到的功能，就没有什么其他的东西了，真的！:)
	____________ _____ _   __  
	|  ___| ___ \_   _| | / /  
	| |_  | |_/ / | | | |/ /   
	|  _| | ___ \ | | |    \   
	| |   | |_/ /_| |_| |\  \_ 
	\_|   \____/ \___/\_| \_(_)

	Copyright 2021 FBIK. 
	未经允许禁止盗窃源码，网页作者享有追究一切责任的权利.
*/
//var bg = 0;
var i, len;
var $body = $('body');
var classStr = $body.attr('class');

devtoolsDetector.addListener(function(isOpen) {
    if (isOpen) mdui.alert('如果您确实想使用 F12 来学习代码结构（真的有人会看这个学！），那么我不会阻拦您。<br/><br/>禁止任何盗窃代码的行为，本人享有一切追究责任的权利', '请勿使用 F12');
});

devtoolsDetector.launch();

/*自动隐藏appbar
mdui.$(function() {
    const _scrollToTop = document.documentElement.scrollTop;
    const _windowHeight = mdui.$(window).innerHeight() - mdui.$('#mdui_header_bg').innerHeight();

    if (_scrollToTop >= _windowHeight && bg == 0) {
        bg = 1;
        $('#mdui_header_bg').stop();
        $('#mdui_header_bg').animate({
            opacity: 1
        },
        150);

    } else if (_scrollToTop < _windowHeight && bg == 1) {
        bg = 0;
        $('#mdui_header_bg').stop();
        $('#mdui_header_bg').animate({
            opacity: 0
        },
        150);

    }

});

mdui.$(window).on('scroll',
function() {
    const _scrollToTop = document.documentElement.scrollTop;
    const _windowHeight = mdui.$(window).innerHeight() - mdui.$('.mdui-appbar').innerHeight();

    if (_scrollToTop >= _windowHeight && bg == 0) {
        bg = 1;
        $('#mdui_header_bg').stop();
        $('#mdui_header_bg').animate({
            opacity: 1
        },
        150);

    } else if (_scrollToTop < _windowHeight && bg == 1) {
        bg = 0;
        $('#mdui_header_bg').stop();
        $('#mdui_header_bg').animate({
            opacity: 0
        },
        150);

    }
});
*/

// 设置主色
if (theme.primary !== false) {
    for (i = 0, len = classs.length; i < len; i++) {
        if (classs[i].indexOf('mdui-theme-primary-') === 0) {
            $body.removeClass(classs[i])
        }
    }
    $body.addClass('mdui-theme-primary-' + theme.primary);
    setCookie('docs-theme-primary', theme.primary);
    $('input[name="doc-theme-primary"][value="' + theme.primary + '"]').prop('checked', true);
}

// 设置强调色
if (theme.accent !== false) {
    for (i = 0, len = classs.length; i < len; i++) {
        if (classs[i].indexOf('mdui-theme-accent-') === 0) {
            $body.removeClass(classs[i]);
        }
    }
    $body.addClass('mdui-theme-accent-' + theme.accent);
    setCookie('docs-theme-accent', theme.accent);
    $('input[name="doc-theme-accent"][value="' + theme.accent + '"]').prop('checked', true);
}

// 设置主题色
if (theme.layout !== false) {
    for (i = 0, len = classs.length; i < len; i++) {
        if (classs[i].indexOf('mdui-theme-layout-') === 0) {
            $body.removeClass(classs[i]);
        }
    }
    $body.addClass('mdui-theme-layout-' + theme.layout);
    setCookie('docs-theme-layout', theme.layout);
    $('input[name="doc-theme-layout"][value="' + theme.layout + '"]').prop('checked', true);
};

// 切换主色
$document.on('change', 'input[name="doc-theme-primary"]',
function() {
    setDocsTheme({
        primary: $(this).val()
    });
});

// 切换强调色
$document.on('change', 'input[name="doc-theme-accent"]',
function() {
    setDocsTheme({
        accent: $(this).val()
    });
});

// 切换主题色
$document.on('change', 'input[name="doc-theme-layout"]',
function() {
    setDocsTheme({
        layout: $(this).val()
    });
});

// 恢复默认主题
$document.on('cancel.mdui.dialog', '#dialog-docs-theme',
function() {
    setDocsTheme({
        primary: DEFAULT_PRIMARY,
        accent: DEFAULT_ACCENT,
        layout: DEFAULT_LAYOUT
    });
});