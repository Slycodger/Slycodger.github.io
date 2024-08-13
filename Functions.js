class pageButton {
    constructor(text, link) {
        this.text = text;
        this.link = link;
    }
}

function createMainBox() {
    ParentBox = document.createElement('div');
    ParentBox.className = "projectParent";
    document.body.appendChild(ParentBox);
}

function createProjectBox(TitleText, Weblink, DescriptionText) {
    var Button = document.createElement("button");
    var TextDiv = document.createElement("div");
    var MainText = document.createElement("h2");
    var SecondaryText = document.createElement("h3");
    var HyperLink = document.createElement("a");
    MainText.append(TitleText);
    SecondaryText.append(DescriptionText);
    HyperLink.setAttribute("href", Weblink);
    Button.className = "projectElement";
    TextDiv.className = "boxText";
    TextDiv.appendChild(MainText);
    TextDiv.appendChild(SecondaryText);
    Button.appendChild(TextDiv);
    HyperLink.appendChild(Button);
    ParentBox.appendChild(HyperLink);
}

function addDescription(Description)
{
	var DescriptionDiv = document.createElement("div");
    var DescriptionText = document.createElement("h3");
    DescriptionDiv.className = "descriptionText";
    DescriptionText.append(Description.replaceAll('  ', '\xA0\xA0'));
    DescriptionDiv.appendChild(DescriptionText);
    document.body.appendChild(DescriptionDiv);
}
function addText(div, Text, Size)
{
	var TextDiv = document.createElement("div");
	var TextElement = document.createElement(Size);
	
	TextDiv.className = div;
	TextElement.append(Text.replaceAll('  ', '\xA0\xA0'));
	
	TextDiv.appendChild(TextElement);
	document.body.appendChild(TextDiv);
}

function br()
{
	document.body.appendChild(document.createElement("br"));
}

function startBackground(...Links) 
{
    document.body.style.backgroundColor = "#555533";
	addButtons("homeButtons", ...Links);
}

function addButtons(divClass, ...Links)
{
	for(let Button of Links)
	{
		var ButtonClass = document.createElement("button");
		var ButtonLink = document.createElement("a");
		var DivElement = document.createElement("div");

		DivElement.className = divClass;
		ButtonClass.className = "pageButton";
		
		ButtonLink.setAttribute("href", Button.link);
		ButtonClass.append(Button.text);

		ButtonLink.appendChild(ButtonClass);
		DivElement.appendChild(ButtonLink);

		document.body.appendChild(DivElement);
	}
}