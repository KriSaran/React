window.onload = ()=> {
  const rootElement=document.getElementById("root");
  // const button=document.createElement("button");
  // button.innerHTML="Want to know current date click me";
  // button.addEventListener("click",()=>{
  //   button.innerHTML=new Date().toString();
  // });
  // rootElement.appendChild(button);
  // const ints=[1,2,3];
  // ints.forEach(i =>{
  //   let li=document.createElement("li");
  //   li.innerHTML=i;
  //   rootElement.appendChild(li);
  // });
  const root=ReactDOM.createRoot(rootElement);
  const ints=[1,2,3];
  const childrenElements=[];

  for(let i=0;i<ints.length;i++){
    childrenElements.push(
      React.createElement("li",{key:ints[i]},ints[i])
    );

    root.render(childrenElements);
  }

  // childrenElements.push(
  //   React.createElement("li",{key:ints[0]},ints[0])
  // );
  // childrenElements.push(
  //   React.createElement("li",{key : ints[1]},ints[1])
  // );
  // childrenElements.push(
  //   React.createElement("li",{key : ints[2]},ints[2])
  // );

  // root.render(childrenElements);
};