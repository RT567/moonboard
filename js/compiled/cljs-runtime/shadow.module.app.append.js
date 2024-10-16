
shadow.cljs.devtools.client.env.module_loaded('app');

try { my_app2.core.init(); } catch (e) { console.error("An error occurred when calling (my-app2.core/init)"); throw(e); }