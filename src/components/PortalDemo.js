import React, { Component } from "react";
import ReactDom from "react-dom";

//The portal is used to deal with parent component ,when the child component is a model,popupa or a tooltip.
//Sometime it is useful to insert  a child into a different location in the DOM and the Portal help you do that.portal can be used any
//where in the DOM tree.it behave like child in any other way .This includes eventbubbling.It allow us to rendered children into a dom DOM
// that exists outside the dom hirarchy of the parent component.

//createPortal takes two argument-- jsx elemnt to be rendered and the node-root on which thejsx elemnt to be rendered...
//the first element of createPortal can be any thing the react can rendered like Number,String,jsx and components...
function PortalDemo() {
  return ReactDom.createPortal(
    <h1>portal demo</h1>,
    document.getElementById("portal-root") //id of the second div in index.html
  );
}

export default PortalDemo;
