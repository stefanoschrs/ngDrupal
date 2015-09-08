## ngDrupal
Angular factory to easy connect to Drupal using Services module.  
### What's Different from other implementations?
* The annoying `'CSRF validation failed'` you get when a user is already logged in and you can't do anything about it because other implementations don't give you an error promise/ response. Well here you get one! Plus an example how to hack your way through!
* More to come

### How to use?
* Add `<script type="text/javascript" src='path-to-bower-components/ngDrupal.js'></script>` after adding the `angular.js` script in your `<body>`.
* Inject ngDrupal to your module   
`angular.module('AppName', ['stefanoschrs.ngDrupal']);`
* Initialize the module by providing the path to your Drupal endpoint:  
`app.run(['Drupal', function(Drupal){`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Drupal.init({`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`path:'http://path-to-drupal-installation/services-endpoint-name/'`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`});`  
`}])`
* Good to go!
 
### What's next?
* User registration