export function Property(propertname, propertyvalue, svg){
    const additionalInfo = document.createElement('div');
    additionalInfo.classList.add("additional-info");
    const propertyName = document.createElement('div');
    propertyName.classList.add("property")

    const propertyLabel = document.createElement('label');
    propertyLabel.innerText = propertname;

    const propertyValue = document.createElement('h1');
    propertyValue.innerText = `${propertyvalue}`
    propertyName.appendChild(propertyLabel);
    propertyName.appendChild(propertyValue);

    const iconDiv = document.createElement('div');
    // iconDiv.innerHTML = '<svg fill="#ffffff" viewBox="0 0 32 32" version="1.1 width="64px" height="64px"" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>thermometer</title> <path d="M18.959 17.913v-0.917h3.063v0.917h-3.063zM18.959 14.975h3.063v0.979h-3.063v-0.979zM18.959 13.015h3.063v0.98h-3.063v-0.98zM18.959 10.993h3.063v0.979l-3.063-0.062v-0.917zM18.959 8.909h3.063v1.042h-3.063v-1.042zM18.959 6.95h3.063v0.98h-3.063v-0.98zM20.733 24.153c0 3.246-2.632 5.878-5.878 5.878s-5.878-2.632-5.878-5.878c0-2.226 1.175-4.161 2.999-5.159v-13.087c0-1.623 1.378-2.938 3.001-2.938s2.939 1.315 2.939 2.938v13.235c1.688 1.034 2.817 2.888 2.817 5.011zM16.937 19.735v-13.828c0-1.082-0.877-1.959-1.959-1.959s-1.959 0.877-1.959 1.959v13.711c-1.794 0.728-3.062 2.48-3.062 4.535 0 2.705 2.193 4.898 4.898 4.898s4.897-2.193 4.897-4.898c0.001-1.958-1.155-3.633-2.815-4.418zM14.855 28.072c-2.165 0-3.919-1.755-3.919-3.919 0-1.869 1.311-3.426 3.062-3.818v-9.342h1.96v9.418c1.623 0.479 2.816 1.964 2.816 3.742 0 2.164-1.754 3.919-3.919 3.919z"></path> </g></svg>'
    iconDiv.innerHTML = svg
    additionalInfo.appendChild(iconDiv)
    additionalInfo.appendChild(propertyName)

    return additionalInfo;
}