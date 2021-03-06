import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "template",
        children,
        props: { ...props },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
