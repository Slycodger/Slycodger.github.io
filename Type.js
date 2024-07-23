createMainBox();
createProjectBox("CPPEngine", "https://slycodger55.github.io/CPPEngine/", "My project is the greatest to ever exist in all the projects that ever projected to create a project");
createProjectBox("Unity collision system", "https://github.com/Slycodger55/CollisionTest", "A slightly worse project that still beats everyone but is ever so slightly worse than the greatest project to ever project a project");
var ParentBox;
function createMainBox() {
    ParentBox = document.createElement('div');
    ParentBox.className = "projectParent";
    document.body.appendChild(ParentBox);
}
function createProjectBox(TitleText, Weblink, DescriptionText) {
    var DivElement = document.createElement("div");
    var MainText = document.createElement("h1");
    var HyperLink = document.createElement("a");
    var SecondaryText = document.createElement("h4");
    MainText.appendChild(HyperLink);
    HyperLink.setAttribute("href", Weblink);
    HyperLink.appendChild(document.createTextNode(TitleText));
    SecondaryText.appendChild(document.createTextNode(DescriptionText));
    DivElement.className = "projectElement";
    DivElement.appendChild(MainText);
    DivElement.appendChild(SecondaryText);
    ParentBox.appendChild(DivElement);
}
function showInputs() {
}
//# sourceMappingURL=Type.js.map