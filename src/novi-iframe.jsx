const React = novi.react.React;
import IframeEditor from "./IframeEditor";
import IframeSettings from "./IframeSettings";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-iframe",
    title: "Novi Iframe",
    description: "Novi Iframe description",
    version: "1.0.3",
    dependencies: {
        novi: "0.8.6"
    },
    defaults: {
        querySelector: "iframe[src]"
    },
    ui: {
        editor: [IframeEditor],
        settings: <IframeSettings />,
    },
    onLanguageChange: onLanguageChange
};

function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-iframe");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    return plugin;
}
novi.plugins.register(Plugin);