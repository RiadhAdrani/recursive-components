import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, open, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "dialog",
        children,
        props: { ...props, open },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
