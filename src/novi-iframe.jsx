const React = novi.react.React;
import IframeEditor from "./IframeEditor";
import IframeSettings from "./IframeSettings";

const Plugin = {
    name: "novi-plugin-iframe",
    title: "Novi Iframe",
    description: "Novi Iframe description",
    version: "1.0.2",
    dependencies: {
    },
    defaults: {
        querySelector: "iframe[src]"
    },
    ui: {
        editor: [IframeEditor],
        settings: <IframeSettings />,
    }
};

novi.plugins.register(Plugin);