# moSwipe
My own Swipe Plugin
moSwipe is a jQuery Plugib which detects simple touch gesture of touchscreen devices. Currently supported directions are left and right. If you add one or more elements to the ignore object, all swipe actions will be ignored for these elements and their children. 

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
    ignore: $('#idtoignore,.classtoignore,.container') //Add id or classes of elements to ignore
  });
```
# Known Issues
- Currently no support for Internet Explorer on Windows based tablets.
