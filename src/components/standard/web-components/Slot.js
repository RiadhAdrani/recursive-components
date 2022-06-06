import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, name, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "slot",
        children,
        props: { ...props, name },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
