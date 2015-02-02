# jquery-geokbd

Type Georgian letters without having Georgian keyboard installed in the system

## Getting Started
First of all this is jQuery plugin, which means that you have to include jQuery first, then the plugin:

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="src/jquery.geokbd.css">
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script type="text/javascript" src="src/jquery.geokbd.js"></script>
</head>
<body>

	<button class="switch" data-switch="on">on</button>
	<button class="switch" data-switch="off">off</button>		

	<form>
		<input type="text">
		<input type="text">
		<input placeholder="unaffected" type="password">
		<input placeholder="unaffected" type="email">
	</form>
	
	
	<script type="text/javascript">
		$('.switch').geokbd();
	</script>

</body>
</html>
```

## Credits
Plugin is inspired and partially based on Ioseb Dzmanashvili's GeoKBD (https://github.com/ioseb/geokbd)
and https://github.com/jayarjo/jquery-geokbd

