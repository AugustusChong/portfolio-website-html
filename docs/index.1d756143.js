const constraints={name:{presence:{allowEmpty:!1}},email:{presence:{allowEmpty:!1},email:!0},message:{presence:{allowEmpty:!1}}},form=document.getElementById("contactForm");form.addEventListener("submit",(function(e){const n={name:form.elements.name.value,email:form.elements.email.value,message:form.elements.message.value},t=validate(n,constraints);if(t){e.preventDefault();const n=Object.values(t).map((function(e){return e.join(", ")})).join("\n");alert(n)}}),!1);
//# sourceMappingURL=index.1d756143.js.map
