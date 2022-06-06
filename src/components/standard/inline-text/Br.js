import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, clear, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "br",
        children,
        props: { ...props, clear },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
