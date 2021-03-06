import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, cols, width, wrap, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "pre",
        children,
        props: { ...props, cols, width, wrap },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
