var ParentBox;

startBackground(...[new pageButton("home", "index.html"), new pageButton("about", "./About/index.html")]);
br();
addText("descriptionText", "Home", "h1");
br();
addDescription("All my awesome projects from past about November 2023.  Most aren't meant for huge use as these are just my personal projects for testing and learning.");
createMainBox();
createProjectBox("CPPEngine", "./CPPEngine/index.html", "A multiple month project to create an engine with c++ using OpenGL.");
createProjectBox("Unity collision system", "./UnityCollisionSystem/index.html", "My last Unity project where I attempted to create the collision system described by Kasber Fauerby");
createProjectBox("Basic app", "./BasicApp/index.html", "A basic project that I haven't decided on what to use with yet");