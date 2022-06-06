import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ children, value, props, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "data",
        children,
        props: { ...props, value },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
