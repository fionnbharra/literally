walk(document.body);

function walk(node)
{
	// The author of cloud-to-butt stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bawesome\b/g, "pooo pee poo peee");
	v = v.replace(/\bawesome\b/g, "pooo pee poo peee");
	v = v.replace(/\bawesome\b/g, "pooo pee poo peee");

	textNode.nodeValue = v;
}
