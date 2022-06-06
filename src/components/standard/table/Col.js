import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, span, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "col",
        children,
        props: { ...props, span },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
