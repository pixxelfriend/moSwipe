/**
 * jQuery MoSwipe
 * Version: 0.1
 * Copyright (c) 2015 Steffen Hoffmann
 * License: CC BY-NC-ND
 *			MoSelect von Steffen Hoffamnn steht unter einer
 *			Creative Commons Namensnennung-NichtKommerziell-KeineBearbeitung
 *			3.0 Unported Lizenz.
 */

/* My Own Swipe */
(function($, window, document, undefined){
	'use strict';
	var moWipeOptions = new Array(),
		callOptions = {},
		hasTouch	= ('ontouchstart' in window),
		hasPointers = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		wasTouched	= function( event )
		{
			if( hasTouch )
				return true;
			if( !hasPointers || typeof event === 'undefined' || typeof event.pointerType === 'undefined' )
				return false;
			if( typeof event.MSPOINTER_TYPE_MOUSE !== 'undefined' )
			{
				if( event.MSPOINTER_TYPE_MOUSE != event.pointerType )
					return true;
			}
			else
				if( event.pointerType != 'mouse' )
					return true;

			return false;
		};

	$.fn.moSwipe = function(callOptions) {
		var ele = $(this);
		if (ele.length > 0) {
			var moSwipeOptions = $.extend({
				left: false,
				right: false,

			}, callOptions),
			touchEnd = function( direction ) {
				switch(direction){
					case 'left':
						if(moSwipeOptions.left)	moSwipeOptions.left();
						break;
					case 'right':
						if(moSwipeOptions.right) moSwipeOptions.right();
						break;
				}
			},
			getTouches = function(e){
				if(e.originalEvent.touches){
					var pagex = e.originalEvent.touches[ 0 ].pageX ;
					var pagey = e.originalEvent.touches[ 0 ].pageY;
				} else {
					var pagex = e.originalEvent.clientX;
					var pagey = e.originalEvent.clientY;
				}
				return {x:pagex,y:pagey};
			},
			swipeStartX	 = 0,
			swipeStartY	 = 0,
			swipeEndX	 = 0,
			swipeEndY	 = 0,
			swipeDiffX	 = 0,
			swipeDiffY	 = 0,
			imagePosLeft = 0;
			ele.on( 'touchstart pointerdown MSPointerDown mousedown', function( e )
			{
				if( !wasTouched( e.originalEvent ) ) return true;
				var t = getTouches(e);
				swipeStartX = t.x ;
				swipeStartY = t.y;

			})
			.on( 'touchmove pointermove MSPointerMove mousemove', function( e )
			{
				if( !wasTouched( e.originalEvent ) ) return true;
				var t = getTouches(e);
				swipeEndX = t.x ;
				swipeEndY = t.y;
				var xMovement = Math.abs(swipeEndX - swipeStartX);
				var yMovement = Math.abs(swipeEndY - swipeStartY);

				if((xMovement * 3) > yMovement){
					e.preventDefault();
				} /** else if((yMovement * 3) > xMovement){
					//e.preventDefault();
				} **/
				swipeDiffX = swipeStartX - swipeEndX;
				swipeDiffY = swipeStartY - swipeEndY;
				return true;
			})
			.on( 'touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel mouseup', function( e )
			{
				if( !wasTouched( e.originalEvent ) ) return true;
				if( Math.abs( swipeDiffX ) > 80 )
				{
					 touchEnd(swipeDiffX < 0 ? 'right' : 'left' );
				}
			});
		}
	}
})( jQuery, window, document );