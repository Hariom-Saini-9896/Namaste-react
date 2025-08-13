    // done by pure JS
    // const heading = document.createElement("h1");
    // heading.textContent = "I create this element through script.";
    // const  root = document.getElementById("root");
    // root.appendChild(heading)

    // Now do the same with pure REACT
    //const heading = React.createElement("h1", {id : "title"}, "hello world!"); // Here we just created a h1 element and its just in memory/free space let put this inside an element
    
    const heading1 = React.createElement("h1", {}, "Heading 1")
    const heading2 = React.createElement("h2", {}, "Heading 2")
    const heading3 = React.createElement("h2", {}, "Heading 3")
    const div = React.createElement("div", {id : "container"}, [heading1,heading2])
    
    const root = ReactDOM.createRoot(document.getElementById("root")) // the root element for this h1 element is the div with id = root. and works aas root element for this h1 element
    root.render([div,heading3]) // this render function injects this heading elements inside the DOM and its render over the browser window. Render is used to modify our DOMand it overwrite the stuff inside root element.
