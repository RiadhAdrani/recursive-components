import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, isFor, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "label",
        children,
        props: { ...props, isFor },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
