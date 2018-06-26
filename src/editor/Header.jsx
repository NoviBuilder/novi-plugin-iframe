const Icon = novi.ui.icon;
const Input = novi.ui.input;
const Icons = novi.ui.icons;
const React = novi.react.React;
const Component = novi.react.Component;

export default class Header extends Component {
    constructor(props) {
        super();
        let src = novi.element.getAttribute(props.element, 'src');
        this.state = {
            src: src,
            oldSrc : src,
            element: props.element
        };

        this._handleLinkChange = this._handleLinkChange.bind(this);
    }


    render() {
        return (
            <div className="novi-iframe-tool" style={{display: "flex"}}>
                <Icon>{Icons.ICON_IFRAME}</Icon>
                <div className="link-tool-input-warp" style={{width: 210}}>
                    <Input onChange={this._handleLinkChange} value={this.state.src}/>
                </div>
            </div>
        )
    }

    _handleLinkChange(e) {
        let value, isYoutube, id, embedLink;
        value = e.target.value;
        embedLink = e.target.value;
        isYoutube = value.indexOf("youtube");
        if (isYoutube) {
            id = value.split("?v=")[1];
            if (id && id.length) {
                embedLink = "http://www.youtube.com/embed/" + id;
            }
        }
        this.setState({
            src: embedLink
        });
    }
}