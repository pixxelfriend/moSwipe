# moSwipe
My own Swipe Plugin
moSwipe is a jQuery Plugib which detects simple touch gesture of touchscreen devices. Currently supported directions are left and right. 

<strong>Supported devices and browsers: </strong>
- Android Stock Browser
- Chrome
- Dolphin
- maybe more Android webbrosers
- Windows based smartphones

# Usage
```javascript
  $('body').moSwipe({
    left: function(){ /**do whatever you want **/ },
    right: function(){ /**do whatever you want **/ },
  });
```
# Known Issues
- Currently no support for Internet Explorer on Windows based tablets.
