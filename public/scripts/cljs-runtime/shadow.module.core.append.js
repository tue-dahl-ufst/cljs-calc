
shadow.cljs.devtools.client.env.module_loaded('core');

try { my_project.app.run(); } catch (e) { console.error("An error occurred when calling (my-project.app/run)"); throw(e); }