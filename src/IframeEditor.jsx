const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Header from "./editor/Header";
const Messages = novi.language.getDataByKey("novi-plugin-iframe");
const EditorItem = {
    trigger: <Trigger/>,
    tooltip: Messages.editor.tooltip,
    header: [<Header/>],
    closeIcon: "submit",
    width: 300,
    onSubmit: submitIframeSrc,
    title: Messages.editor.title
};

export default EditorItem;

function submitIframeSrc(headerState, bodyState){
    if (headerState[0].src === headerState[0].oldSrc) return;
    novi.element.setAttribute(headerState[0].element, "src", headerState[0].src);
}