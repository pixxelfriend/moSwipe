# moSwipe
My own Swipe Plugin
moSwipe detects touch gesture of touchscreen devices. Supported directions are left and right. 
<strong>Supported devices and browsers: </strong>
- Android Stock Browser
- Chrome
- Dolphin
- maybe more Android webbrosers
- Windows based smartphones

# Usage
```javascript
  $('body').moSwipe({ <br/>
    left: function(){ /**do whatever you want **/ },
    right: function(){ /**do whatever you want **/ },
  });
```
# Known Issues
- Currently no support for Internet Explorer on Windows based tablets.
