/*!
 * jQuery Stripes
 * https://github.com/joncombe/jquery-stripes
 *
 * Copyright 2014 Jon Combe
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */

 (function ( $ ) {

    var defaults = {
        collapse_width: 50
    }

    var methods = {
        collapse: function(stripe) {
            if ($(stripe).attr('data-closing') == '1') {
                return;
            }

            if (!$(stripe).hasClass('padwidth')) {
                $(stripe).stop().animate({
                    left: methods.getPositionCollapsed(methods.getID(stripe))
                }, 150);
            }
        },

        expand: function(stripe) {
            if ($(stripe).attr('data-closing') == '1') {
                return;
            }

            // check if this layer is being ignored
            var id = methods.getID(stripe);
            if (id == vars['ignore_hover']) {
                return;
            } else {
                vars['ignore_hover'] = -1;
            }

            // expand
            if (!$(stripe).hasClass('padwidth')) {
                $(stripe).stop().animate({
                    left: methods.getPositionExpanded(methods.getID(stripe))
                }, 150);
            }
        },

        // extract the integer part of a layer's ID attribute
        getID: function(element) {
            var classes = $(element).attr('class').split(' ');
            for (c in classes) {
                if (classes[c].substring(0,7) == 'stripe_') {
                    return parseInt(classes[c].substring(7));
                }
            }
        },

        // extract the layer integer from an element within it
        getIDFromElement: function(element) {
            return methods.getID(
                methods.getStripeFromElement(element)
            );
        },

        getPositionCollapsed: function(stripeID) {
            var pos = methods.getPositionExpanded(stripeID);
            var width = $(vars['stripes']).children('.stripe_' + stripeID).outerWidth();
            return (pos - width + defaults.collapse_width);
        },

        getPositionExpanded: function(stripeID) {
            return (stripeID * defaults.collapse_width);
        },

        // get a layer <div> within the DOM from an element within it
        getStripeFromElement: function(element) {
            return $(element).closest('.stripe');
        },

        // hide all layers greater than the one selected
        hide: function(stripeID) {
            $(vars['stripes']).children('div').each(function() {
                if (methods.getID(this) > stripeID) {
                    // only animate the layers we need to
                    if ($(this).css('display') != 'none') {
                        // "close" animation then reset the layer back to blank
                        $(this).attr('data-closing', 1);
                        $(this).animate({ left: 1, opacity: 0 }, 150, function() {
                            methods.reset(this);
                        });
                    }
                }
            });
        },

        //
        hideFromElement: function(element) {
            methods.hide(
                methods.getIDFromElement(element) - 1
            )
        },

        // load content via AJAX into a stripe
        loadURL: function(stripeID, url) {
            // load stripe contents via ajax
            $.ajax({
                error: function(jqXHR, textStatus, textErrorThrown) {
                    console.log('Error loading stripe contents: ' + textStatus);
                },
                success: function(data, textStatus, jqXHR) {
                    // callback
                    if ('callback' in data) {
                        eval(data['callback']);
                        return;
                    }

                    // css classes: remove
                    var classes = $(vars['stripes']).children('.stripe_' + stripeID).attr('class').split(' ');
                    for (var c in classes) {
                        if ((classes[c] != 'stripe') && (classes[c] != 'stripe_' + stripeID)) {
                            $(vars['stripes']).children('.stripe_' + stripeID).removeClass(classes[c]);
                        }
                    }

                    // css classes: add
                    if (data['class']) {
                        classes = data['class'].split(',');
                        for (var c in classes) {
                            $(vars['stripes']).children('.stripe_' + stripeID).addClass(classes[c]);
                        }
                    }

                    // padwidth
                    if (data['padwidth']) {
                        $(vars['stripes']).children('.padwidth').removeClass('padwidth');
                        $(vars['stripes']).children('.stripe_' + stripeID).addClass('padwidth');
                        methods.setWidths();
                    } else {
                        $(vars['stripes']).children('.stripe_' + stripeID)
                            .removeClass('padwidth')
                            .css('min-width', 'none');
                    }

                    // content
                    if (Array.isArray(data['html'])) {
                        data['html'] = data['html'].join('');
                    }
                    $(vars['stripes']).children('.stripe_' + stripeID).html(
                        '<div>' + data['html'] + '</div>'
                    );

                    // add url as attirbute
                    $(vars['stripes']).children('.stripe_' + stripeID).attr('data-url', url)
                },
                url: url,
            });
        },

        // load the 'next' stripe from this one, i.e.
        // a menu spawns a submenu, or a submenu spawns a content layer
        loadNext: function(element, url) {
            // hide layers above parent layer
            var parentstripeID = methods.getIDFromElement(element);
            var nextstripeID = parentstripeID + 1;
            methods.hide(nextstripeID);

            // add new layer if it doesn't yet exist
            if ($(vars['stripes']).children('.stripe_' + nextstripeID).size() == 0) {
                $(vars['stripes']).prepend('<div class="stripe stripe_' + nextstripeID + '"></div>')
            } else {
                methods.removeClasses(
                    $(vars['stripes']).children('.stripe_' + nextstripeID)[0]
                )
            }

            // show the next layer
            var left = methods.getPositionExpanded(nextstripeID);
            $(vars['stripes']).children('.stripe_' + (parentstripeID + 1))
                .stop()
                .css({ 'display': 'block' })
                .animate({ 'left': left }, 200)
                .html('<div class="loading"><div>&nbsp;</div></div>')

            // load ajax
            vars['ignore_hover'] = parentstripeID;
            methods.collapse($(vars['stripes']).children('.stripe_' + parentstripeID));
            methods.loadURL(parentstripeID + 1, url);
        },

        loadThis: function(element, url) {
            // hide stripes above this stripe
            var stripeID = methods.getIDFromElement(element);
            methods.hide(stripeID);

            // show loading
            $(vars['stripes']).children('.stripe_' + stripeID)
                .html('<div class="loading"><div>&nbsp;</div></div>')

            // load ajax
            methods.loadURL(stripeID, url);
        },

        reloadParent: function(element) {
            var parentID = methods.getIDFromElement(element) - 1;
            var url = $(vars['stripes']).children('.stripe_' + parentID).attr('data-url');
            if (url) {
                methods.hide(parentID);

                // show loading
                $(vars['stripes']).children('.stripe_' + parentID)
                    .html('<div class="loading"><div>&nbsp;</div></div>')

                // load ajax
                methods.expand($(vars['stripes']).children('.stripe_' + parentID));
                methods.loadURL(parentID, url);
            }
        },

        reloadParentSilent: function(element) {
            var parentID = methods.getIDFromElement(element) - 1;
            var url = $(vars['stripes']).children('.stripe_' + parentID).attr('data-url');

            if (url) {
                // show loading
                $(vars['stripes']).children('.stripe_' + parentID)
                    .html('<div class="loading"><div>&nbsp;</div></div>')

                // load ajax
                methods.loadURL(parentID, url);
            }
        },

        removeClasses: function(element) {
            var classes = $(element).attr('class').split(' ');
            for (c in classes) {
                if ((classes[c] != 'stripe') && (classes[c].substring(0,7) != 'stripe_')) {
                    $(element).removeClass(classes[c]);
                }
            }
        },

        reset: function(element) {
            $(element)
                .removeAttr('data-closing')
                .css({
                    display:    'none',
                    left:       0,
                    opacity:    1
                })
                .html('');
            methods.removeClasses(element);
        },

        setWidths: function() {
            var stripes = $(vars['stripes']).children('.padwidth');
            if (stripes.size() > 0) {
                var stripe = stripes[0]
                var stripeID = methods.getID(stripe);
                var usedWidth = methods.getPositionExpanded(stripeID);

                // set padwidth layer width
                $(stripe).css('min-width', Math.max(500, vars['width'] - usedWidth));
            }
        },

        //
        validateID: function(stripeID) {
            if ((typeof stripeID != 'number') ||
                (stripeID !== parseInt(stripeID)) ||
                (stripeID < 0) ||
                (stripeID > 3)) {
                throw new Error("Bad stripeID");
            }
        },

        setDimensions: function() {
            vars['height'] = $(vars['stripes']).innerHeight();
            vars['width'] = $(vars['stripes']).innerWidth();
            methods.setWidths();
        }
    };

    var settings = {};

    var vars = {
        stripes:        null,
        ignore_hover:   -1,
        height:         0,
        width:          0
    }

    $.fn.stripes = function(arg) {
        var args = Array.prototype.slice.call(arguments, 1)

        if (methods[arg]) {
            return methods[arg].apply(this, args);
        } else if (typeof arg === 'object' || !arg) {
            vars['stripes'] = this;

            // extend settings
            // currently no settings are used, but I'll keep this here just in case...
            var settings = $.extend(settings, defaults, args);

            // create first stripe
            $(vars['stripes']).html(
                '<div class="stripe stripe_0">' +
                '<div>' +
                $(vars['stripes']).html() +
                '</div>' +
                '</div>'
            );

            // set dimensions
            methods['setDimensions'].apply();

            // resize handler
            $(window).resize(function() {
                methods['setDimensions'].apply();
            });

            // slide into place
            $(vars['stripes']).children('.stripe_0').animate({
                'left': methods.getPositionCollapsed(0) + 'px'
            }, 1000);

            // mouseover / press handlers
            $(vars['stripes']).on('mouseover', '.stripe', function() {
                methods.expand(this);
            }).on('mouseout', '.stripe', function() {
                methods.collapse(this);
            }).on('touchstart', '.stripe', function() {
                vars['ignore_hover'] = -1; // tablet friendly
            });

            // return
            return this;
        } else {
            $.error('Stripes method does not exist.')
        }
    };

}( jQuery ));