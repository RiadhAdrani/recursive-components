import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, compact, type, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "ul",
        children,
        props: { ...props, compact, type },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
