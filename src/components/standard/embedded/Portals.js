import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, referrerPolicy, src, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "portal",
        children,
        props: { ...props, referrerPolicy, src },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
