import { CreateComponent } from "@riadh-adrani/recursive";
import View from "../View";

class Row extends View {
    constructor() {
        super("row-view");
    }
}

View.makeDefaultStyle("row-view{display:flex;flex-direction:row;}");

export default ({ children, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "row-view",
        children,
        props,
        key,
        events,
        hooks,
        style,
        flags,
    });
};
