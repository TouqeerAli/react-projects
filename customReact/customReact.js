

function customReact(reactElement,mainContainer)
{
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // mainContainer.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props : {
        href:"https://google.com",
        target: "_blank"
    },
    Children: "Click to visit Google"
}

const mainContainer = document.querySelector("#root")

customReact(reactElement,mainContainer)