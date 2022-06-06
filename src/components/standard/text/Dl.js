import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "dl",
        children,
        props,
        key,
        events,
        hooks,
        style,
        flags,
    });
};
